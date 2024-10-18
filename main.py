import argparse
import json
import random
from datetime import datetime
from pathlib import Path

import requests


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
        _text = response.text.replace(f'https://www.xitongku.com/images', f'https://cdn.jsdelivr.net/gh/lopins/msdn-images@main/docs/images')
        # _text = _text.replace(f'https://www.xitongku.com', f'https://{domain}')
        remote_data = json.loads(_text[1:]) if _text.startswith('\ufeff') else json.loads(_text)
    except requests.RequestException as e:
        # print(f"Error accessing remote JSON source: {e}")
        return False
    except json.JSONDecodeError as e:
        # print(f"Error decoding JSON from remote source: {e}")
        return False
    # print(type(remote_data)) # <class 'list'>
    # 检查本地是否存在 JSON 文件
    local_file = Path(__file__).parent / file
    if local_file.exists():
        try:
            with local_file.open('r', encoding='utf-8-sig') as f:
                local_data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON from local file: {e}")
            local_data = []         
    else:
        local_data = []
    # 比较本地和远程数据
    if remote_data != local_data:
        with open(file, 'w', encoding='utf-8-sig') as f:
            json.dump(remote_data, f)
            print(f"Updated {file} successfully.")
        return True
    else:
        print(f"{file} no need to be updated")
        return False

def random_china_ip():
    # 中国大陆IP范围
    start_ip = "36.54.0.0"
    end_ip = "123.255.255.254"
    start_ip_num = int.from_bytes(map(int, start_ip.split('.')), 'big')
    end_ip_num = int.from_bytes(map(int, end_ip.split('.')), 'big')
    random_ip_num = random.randint(start_ip_num, end_ip_num)
    random_ip = ".".join(map(str, random_ip_num.to_bytes(4, 'big')))
    return random_ip

def main(domain: str) -> bool:
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
    updated_files = []
    updated_files = [_["file"] for _ in files_info if update_json(_["url"], _["file"], domain)]
    return bool(updated_files)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Update local JSON files from a remote source.")
    parser.add_argument('-d', '--domain', type=str, default='msdn.lopins.cn', required=False, help="The domain name used in the JSON files.")
    args = parser.parse_args()

    updated = main(args.domain)
    # exit(0 if updated else 1)