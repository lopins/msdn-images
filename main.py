import argparse
import json
import random
import re
from datetime import datetime
from pathlib import Path

import requests

# 远程JSON源更新到本地JSON文件
def update_json(url: str, file: str, domain: str) -> bool:
    session = requests.Session()
    headers = {
        # "Authorization": "Bearer YOUR_API_TOKEN",
        "Content-Type": "application/json",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Referer": "https://www.xitongku.com/",
        "Host": "www.xitongku.com", 
        "Origin": "https://www.xitongku.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "X-Forwarded-For": f'{random_china_ip()}',
    }
    session.headers.update(headers)
    # 获取远程JSON数据
    try:
        response = session.get(f'{url}?t={datetime.now().strftime("%Y%m%d%H%M%S")}')
        response.raise_for_status()  # 确保请求成功
        _text = response.text.replace(f'https://www.xitongku.com/images', f'https://cdn.jsdelivr.net/gh/lopins/msdn-images@main/docs/assets/images')
        _text = _text.replace(f'https://www.xitongku.com', f'https://{domain}')
        remote_text = _text[1:] if _text.startswith('\ufeff') else _text
    except Exception as e:
        raise ValueError("Failed to fetch JSON data from the remote source") from e
        # print(remote_text)
    
    try:
        remote_data = json.loads(remote_text, strict=False)
    except json.JSONDecodeError as e:
        remote_text = remote_text.replace('"百度网盘":""百度网盘|msdn":"",",','').replace(',\\r\\n\\r\\n','",\\r\\n\\r\\n')
        try:
            remote_data = json.loads(remote_text, strict=False)
        except json.JSONDecodeError as e:
            raise ValueError("Invalid JSON format") from e
        
    # print(type(remote_data)) # <class 'list'>
    # 检查本地是否存在 JSON 文件
    local_file = Path(__file__).parent / file
    if local_file.exists():
        try:
            with local_file.open('r', encoding='utf-8-sig') as f:
                local_data = json.load(f)
        except json.JSONDecodeError as e:
            local_data = []         
    else:
        local_data = []
    
    # 比较本地和远程数据
    if remote_data != local_data:
        with local_file.open('w', encoding='utf-8-sig') as f:
            json.dump(remote_data, f)
        return True
    else:
        return False

# 提取数据中的信息形成新JSON源
def extract_info(files_info: dict, output_file: str) -> bool:
    def extract_json(data: dict, source: str) -> list:
        results = []
        for item in data:
            if item.get('description') and item.get('keywords'):
                if '"百度网盘":""百度网盘|msdn":"",",' in item['keywords']:
                    item['keywords'] = item['keywords'].replace('"百度网盘":""百度网盘|msdn":"",",','')
                # 去除不可见字符和换行符
                item['keywords'] = re.sub(r'[\x00-\x1f\x7f-\x9f]', '', item['keywords']).replace('\n', '').replace('\r', '') 
                try:
                    json_data = json.loads(item['keywords'], strict=False)
                except json.JSONDecodeError as e:
                    item['keywords'] = item['keywords'].replace(',"', '","').replace('"",', '",')
                # # 要删除的键列表
                remove_keys = ['定制装机U盘', '定制系统盘', '购买U盘', '123云盘', '123网盘']
                for key in remove_keys:
                    if key in json_data:
                        json_data.pop(key, None)
                
                results.append({
                    'mirror': f"名称：{item['description']}",
                    'link': json.dumps(json_data, ensure_ascii=False)
                    # 'link': item['keywords']
                })
            if 'children' in item:
                results.extend(extract_json(item['children'], source))
        return results
    
    # 提前写入JSON文件
    def extract_init() -> dict:
        all_data = {}
        for entry in files_info:
            file = Path(entry["file"])
            _name = file.stem
            with file.open('r', encoding='utf-8-sig') as f:
                all_data[_name] = extract_json(json.load(f), _name)
        return all_data
    
    output_path = Path(output_file)
    new_data = extract_init()
    
    if not output_path.exists() or json.dumps(new_data, sort_keys=True) != json.dumps(json.load(output_path.open('r', encoding='utf-8-sig')), sort_keys=True):
        with open(output_file, 'w', encoding='utf-8-sig') as file:
            json.dump(new_data, file, indent=4, ensure_ascii=True)
            return True
    else:
        return False

# 随机生成一个中国大陆的IP地址
def random_china_ip():
    start_ip = "36.54.0.0"
    end_ip = "123.255.255.254"
    start_ip_num = int.from_bytes(map(int, start_ip.split('.')), 'big')
    end_ip_num = int.from_bytes(map(int, end_ip.split('.')), 'big')
    random_ip_num = random.randint(start_ip_num, end_ip_num)
    random_ip = ".".join(map(str, random_ip_num.to_bytes(4, 'big')))
    return random_ip

# 主函数
def main(domain: str) -> None:
    # 生成更新JSON文件
    files_info = [
        {
            "url": "https://www.xitongku.com/data/windows.json", 
            "file": "docs/data/windows.json"
        },
        {
            "url": "https://www.xitongku.com/data/office.json", 
            "file": "docs/data/office.json"
        }
    ]

    # 从远程更新JSON文件到本地
    updated_files = [_["file"] for _ in files_info if update_json(_["url"], _["file"], domain)]
    print("Updated files:\n" + "\n".join([f"- {file}" for file in updated_files])) if updated_files else None
    # 提取数据中的信息形成新JSON源
    if all(Path(info["file"]).exists() for info in files_info): 
        extract_files = extract_info(files_info, "docs/data/mirrors.json")
        print("Extracted files:\n - docs/data/mirrors.json") if extract_files else None

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Update local JSON files from a remote source.")
    parser.add_argument('-d', '--domain', type=str, default='msdn.lopins.cn', required=False, help="The domain name used in the JSON files.")
    args = parser.parse_args()

    main(args.domain)