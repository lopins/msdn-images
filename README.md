<img src="https://avatars.githubusercontent.com/u/6154722?s=200&v=4" alt="Microft Logo" width="50" height="50" align="right" />

<div align="center">

<h1> 微软原版镜像 </h1>

<p>微软官方原版镜像：包括操作系统Microsoft Windows和办公软件Microsoft Office</p>

</div>

<hr/>

<div align="center">
<a href="https://dotnet.microsoft.com/zh-cn/download">.NET Framework</a> | 
<a href="https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170">Microsoft Visual C++</a> | 
<a href="https://www.microsoft.com/zh-cn/download">官方网站</a> | 
<a href="https://learn.microsoft.com/zh-cn/docs/">知识文档</a> | 
<a href="https://developer.microsoft.com/zh-cn/">开发者中心</a> 
</div>

<hr/>

## 分类页

Windows: <https://msdn.lopins.cn/windows.html>

Office: <https://msdn.lopins.cn/office.html>

## JSON源

Windows: <https://cdn.jsdelivr.net/gh/lopins/msdn-images/docs/data/windows.json>

Office: <https://cdn.jsdelivr.net/gh/lopins/msdn-images/docs/data/office.json>

综合纯净源：<https://cdn.jsdelivr.net/gh/lopins/msdn-images/docs/data/mirrors.json>

## 一键部署

### GitHub 部署

1. Fork&设置：[Fork](https://github.com/lopins/msdn-images/fork) -> 选择 `gh-pages` -> 运行目录选择 `/(root)`

2. 绑定域名（如果使用自定义域名）： 

https://github.com/lopins/msdn-images/blob/bbd54b8717a2f40216da8c0d9a8f3bd6632c7635/.github/workflows/update.yml#L48

https://github.com/lopins/msdn-images/blob/bbd54b8717a2f40216da8c0d9a8f3bd6632c7635/.github/workflows/update.yml#L69

3. 启用 Actions [![Deploy to GitHub Pages](https://github.com/lopins/msdn-images/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/lopins/msdn-images/actions/workflows/pages/pages-build-deployment)

4. 执行一次更新 [update.yml](https://github.com/lopins/msdn-images/actions/workflows/update.yml)

### API 部署

`api.js`: 是使用Express.js 搭建的API入口文件,

## API(按需使用)

### MSDN API

https://github.com/lopins/msdn-images/blob/bbd54b8717a2f40216da8c0d9a8f3bd6632c7635/docs/js/api.js#L1-L73

### 示例API

Windows: <https://msdn.lopins.cn/api/v1/office/2024/ProPlus/x64>

Office: <https://msdn.lopins.cn/api/v1/windows/Win11/24H2/消费者版/2024.10/64位>

### 所有API

<details>

``` markdown
/api/v1/windows/Win11/24H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.10/64%E4%BD%8D
/api/v1/windows/Win11/24H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.10
/api/v1/windows/Win11/24H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win11/24H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.10/64%E4%BD%8D
/api/v1/windows/Win11/24H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.10
/api/v1/windows/Win11/24H2/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win11/24H2
/api/v1/windows/Win11/LTSC/64%E4%BD%8D
/api/v1/windows/Win11/LTSC
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.09/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.09
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.08/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.08
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.07/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.07
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.06/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.06
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.05/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.05
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.04/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.04
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.03/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.03
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.02/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.02
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.01/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.01
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.12/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.12
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.10/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.10
/api/v1/windows/Win11/23H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.09/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.09
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.08/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.08
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.07/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.07
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.06/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.06
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.05/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.05
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.04/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.04
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.03/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.03
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.02/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.02
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.01/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2024.01
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.12/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.12
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.10/64%E4%BD%8D
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.10
/api/v1/windows/Win11/23H2/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win11/23H2
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.10/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.10
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.09/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.09
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.08/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.08
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.07/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.07
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.06/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.06
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.05/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.05
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.03/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2023.03
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2022.09/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2022.09
/api/v1/windows/Win11/22H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.10/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.10
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.09/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.09
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.08/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.08
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.07/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.07
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.06/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.06
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.05/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.05
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.03/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2023.03
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2022.09/64%E4%BD%8D
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88/2022.09
/api/v1/windows/Win11/22H2/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win11/22H2
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2022.06/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2022.06
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2022.05/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2022.05
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2022.04/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2022.04
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2022.03/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2022.03
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2021.10/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2021.10
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/RTM/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/RTM
/api/v1/windows/Win11/21H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88/2022.06/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88/2022.06
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88/2022.05/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88/2022.05
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88/2022.04/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88/2022.04
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88/2022.03/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88/2022.03
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88/2021.10/64%E4%BD%8D
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88/2021.10
/api/v1/windows/Win11/21H2/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win11/21H2
/api/v1/windows/Win11/Beta/22000.132/64%E4%BD%8D
/api/v1/windows/Win11/Beta/22000.132
/api/v1/windows/Win11/Beta
/api/v1/windows/Win11/Dev/22449/64%E4%BD%8D
/api/v1/windows/Win11/Dev/22449
/api/v1/windows/Win11/Dev/22000.132/64%E4%BD%8D
/api/v1/windows/Win11/Dev/22000.132
/api/v1/windows/Win11/Dev/22000.100/64%E4%BD%8D
/api/v1/windows/Win11/Dev/22000.100
/api/v1/windows/Win11/Dev/22000.51/64%E4%BD%8D
/api/v1/windows/Win11/Dev/22000.51
/api/v1/windows/Win11/Dev
/api/v1/windows/Win11
/api/v1/windows/Win10/22H2/2024.09/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.09/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2024.09/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.09/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2024.09
/api/v1/windows/Win10/22H2/2024.08/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.08/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2024.08/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.08/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2024.08
/api/v1/windows/Win10/22H2/2024.07/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.07/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2024.07/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.07/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2024.07
/api/v1/windows/Win10/22H2/2024.06/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.06/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2024.06/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.06/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2024.06
/api/v1/windows/Win10/22H2/2024.05/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.05/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2024.05/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.05/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2024.05
/api/v1/windows/Win10/22H2/2024.04/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.04/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2024.04/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.04/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2024.04
/api/v1/windows/Win10/22H2/2024.03/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.03/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2024.03/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.03/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2024.03
/api/v1/windows/Win10/22H2/2024.02/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.02/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2024.02/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.02/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2024.02
/api/v1/windows/Win10/22H2/2024.01/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.01/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2024.01/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2024.01/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2024.01
/api/v1/windows/Win10/22H2/2023.12/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.12/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2023.12/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.12/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2023.12
/api/v1/windows/Win10/22H2/2023.11/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.11/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2023.11/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.11/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2023.11
/api/v1/windows/Win10/22H2/2023.10/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.10/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2023.10/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.10/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2023.10
/api/v1/windows/Win10/22H2/2023.09/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.09/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2023.09/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.09/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2023.09
/api/v1/windows/Win10/22H2/2023.08/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.08/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2023.08/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.08/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2023.08
/api/v1/windows/Win10/22H2/2023.07/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.07/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2023.07/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.07/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2023.07
/api/v1/windows/Win10/22H2/2023.06/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.06/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2023.06/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.06/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2023.06
/api/v1/windows/Win10/22H2/2023.05/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.05/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2023.05/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.05/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2023.05
/api/v1/windows/Win10/22H2/2023.03/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.03/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/22H2/2023.03/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/22H2/2023.03/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/22H2/2023.03
/api/v1/windows/Win10/22H2
/api/v1/windows/Win10/21H2/2022.06/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.06/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/32%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.06/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/21H2/2022.06/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.06/%E5%95%86%E4%B8%9A%E7%89%88/32%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.06/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/21H2/2022.06
/api/v1/windows/Win10/21H2/2022.04/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.04/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/32%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.04/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/21H2/2022.04/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.04/%E5%95%86%E4%B8%9A%E7%89%88/32%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.04/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/21H2/2022.04
/api/v1/windows/Win10/21H2/2022.03/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.03/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/32%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.03/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/21H2/2022.03/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.03/%E5%95%86%E4%B8%9A%E7%89%88/32%E4%BD%8D
/api/v1/windows/Win10/21H2/2022.03/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/21H2/2022.03
/api/v1/windows/Win10/21H2/2021.11/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/21H2/2021.11/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/32%E4%BD%8D
/api/v1/windows/Win10/21H2/2021.11/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/21H2/2021.11/%E5%95%86%E4%B8%9A%E7%89%88/64%E4%BD%8D
/api/v1/windows/Win10/21H2/2021.11/%E5%95%86%E4%B8%9A%E7%89%88/32%E4%BD%8D
/api/v1/windows/Win10/21H2/2021.11/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/21H2/2021.11
/api/v1/windows/Win10/21H2
/api/v1/windows/Win10/21H1/7%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/21H1/7%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/21H1/7%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/21H1/7%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/21H1/7%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/21H1/7%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/21H1/7%E6%9C%88
/api/v1/windows/Win10/21H1/6%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/21H1/6%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/21H1/6%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/21H1/6%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/21H1/6%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/21H1/6%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/21H1/6%E6%9C%88
/api/v1/windows/Win10/21H1/5%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/21H1/5%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/21H1/5%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/21H1/5%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/21H1/5%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/21H1/5%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/21H1/5%E6%9C%88
/api/v1/windows/Win10/21H1
/api/v1/windows/Win10/LTSC/2021/x64
/api/v1/windows/Win10/LTSC/2021/x86
/api/v1/windows/Win10/LTSC/2021
/api/v1/windows/Win10/LTSC/2019/x64
/api/v1/windows/Win10/LTSC/2019/x86
/api/v1/windows/Win10/LTSC/2019
/api/v1/windows/Win10/LTSC
/api/v1/windows/Win10/20H2/3%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/20H2/3%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/20H2/3%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/20H2/3%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/20H2/3%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/20H2/3%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/20H2/3%E6%9C%88
/api/v1/windows/Win10/20H2/2%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/20H2/2%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/20H2/2%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/20H2/2%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/20H2/2%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/20H2/2%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/20H2/2%E6%9C%88/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/20H2/2%E6%9C%88/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/20H2/2%E6%9C%88
/api/v1/windows/Win10/20H2/1%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/20H2/1%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/20H2/1%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/20H2/1%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/20H2/1%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/20H2/1%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/20H2/1%E6%9C%88/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/20H2/1%E6%9C%88/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/20H2/1%E6%9C%88
/api/v1/windows/Win10/20H2/12%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/20H2/12%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/20H2/12%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/20H2/12%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/20H2/12%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/20H2/12%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/20H2/12%E6%9C%88/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/20H2/12%E6%9C%88/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/20H2/12%E6%9C%88
/api/v1/windows/Win10/20H2/11%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/20H2/11%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/20H2/11%E6%9C%88/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/20H2/11%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/20H2/11%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/20H2/11%E6%9C%88/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/20H2/11%E6%9C%88/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/20H2/11%E6%9C%88/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/20H2/11%E6%9C%88
/api/v1/windows/Win10/20H2
/api/v1/windows/Win10/2004/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/2004/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/2004/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/2004/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/2004/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/2004/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/2004
/api/v1/windows/Win10/1909/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/1909/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/1909/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/1909/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/1909/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/1909/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/1909
/api/v1/windows/Win10/1903/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/1903/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/1903/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/1903/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/1903/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/1903/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/1903
/api/v1/windows/Win10/1809/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/1809/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/1809/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/1809/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/1809/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/1809/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/1809
/api/v1/windows/Win10/1803/%E5%95%86%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win10/1803/%E5%95%86%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win10/1803/%E5%95%86%E4%B8%9A%E7%89%88
/api/v1/windows/Win10/1803/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x64
/api/v1/windows/Win10/1803/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/x86
/api/v1/windows/Win10/1803/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88
/api/v1/windows/Win10/1803
/api/v1/windows/Win10/LTSB/x64
/api/v1/windows/Win10/LTSB/x86
/api/v1/windows/Win10/LTSB
/api/v1/windows/Win10
/api/v1/windows/Win8/Win8.1/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win8/Win8.1/%E4%B8%93%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win8/Win8.1/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/windows/Win8/Win8.1/%E4%BC%81%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win8/Win8.1/%E4%BC%81%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win8/Win8.1/%E4%BC%81%E4%B8%9A%E7%89%88
/api/v1/windows/Win8/Win8.1
/api/v1/windows/Win8/Win8/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win8/Win8/%E4%B8%93%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win8/Win8/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/windows/Win8/Win8/%E4%BC%81%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win8/Win8/%E4%BC%81%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win8/Win8/%E4%BC%81%E4%B8%9A%E7%89%88
/api/v1/windows/Win8/Win8
/api/v1/windows/Win8
/api/v1/windows/Win7/%E6%97%97%E8%88%B0%E7%89%88/x64
/api/v1/windows/Win7/%E6%97%97%E8%88%B0%E7%89%88/x86
/api/v1/windows/Win7/%E6%97%97%E8%88%B0%E7%89%88
/api/v1/windows/Win7/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win7/%E4%B8%93%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win7/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/windows/Win7/%E4%BC%81%E4%B8%9A%E7%89%88/x64
/api/v1/windows/Win7/%E4%BC%81%E4%B8%9A%E7%89%88/x86
/api/v1/windows/Win7/%E4%BC%81%E4%B8%9A%E7%89%88
/api/v1/windows/Win7/%E5%AE%B6%E5%BA%AD%E7%89%88/x64
/api/v1/windows/Win7/%E5%AE%B6%E5%BA%AD%E7%89%88/x86
/api/v1/windows/Win7/%E5%AE%B6%E5%BA%AD%E7%89%88
/api/v1/windows/Win7/%E6%99%AE%E9%80%9A%E7%89%88/x86
/api/v1/windows/Win7/%E6%99%AE%E9%80%9A%E7%89%88
/api/v1/windows/Win7
/api/v1/windows/XP/SP3/x86
/api/v1/windows/XP/SP3
/api/v1/windows/XP
/api/v1/windows/Server/2022/%E6%A0%87%E5%87%86%E7%89%88/64%E4%BD%8D
/api/v1/windows/Server/2022/%E6%A0%87%E5%87%86%E7%89%88
/api/v1/windows/Server/2022
/api/v1/windows/Server/2019/%E6%A0%87%E5%87%86%E7%89%88/64%E4%BD%8D
/api/v1/windows/Server/2019/%E6%A0%87%E5%87%86%E7%89%88
/api/v1/windows/Server/2019/%E7%B2%BE%E5%8D%8E%E7%89%88/64%E4%BD%8D
/api/v1/windows/Server/2019/%E7%B2%BE%E5%8D%8E%E7%89%88
/api/v1/windows/Server/2019
/api/v1/windows/Server/2016/%E6%A0%87%E5%87%86%E7%89%88/64%E4%BD%8D
/api/v1/windows/Server/2016/%E6%A0%87%E5%87%86%E7%89%88
/api/v1/windows/Server/2016/%E7%B2%BE%E5%8D%8E%E7%89%88/64%E4%BD%8D
/api/v1/windows/Server/2016/%E7%B2%BE%E5%8D%8E%E7%89%88
/api/v1/windows/Server/2016
/api/v1/windows/Server
/api/v1/office/2024/ProPlus/x64
/api/v1/office/2024/ProPlus
/api/v1/office/2024
/api/v1/office/2021/ProPlus/x64
/api/v1/office/2021/ProPlus
/api/v1/office/2021/Pro/x64
/api/v1/office/2021/Pro
/api/v1/office/2021
/api/v1/office/2019/ProPlus/x64
/api/v1/office/2019/ProPlus
/api/v1/office/2019/Pro/x64
/api/v1/office/2019/Pro
/api/v1/office/2019
/api/v1/office/2016/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/office/2016/%E4%B8%93%E4%B8%9A%E7%89%88/x86
/api/v1/office/2016/%E4%B8%93%E4%B8%9A%E7%89%88/x86%EF%BC%86x64
/api/v1/office/2016/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/office/2016/Mac%E7%89%88/Mac
/api/v1/office/2016/Mac%E7%89%88
/api/v1/office/2016
/api/v1/office/2013/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/office/2013/%E4%B8%93%E4%B8%9A%E7%89%88/x86
/api/v1/office/2013/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/office/2013
/api/v1/office/2010/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/office/2010/%E4%B8%93%E4%B8%9A%E7%89%88/x86
/api/v1/office/2010/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/office/2010
/api/v1/office/2007/%E4%B8%93%E4%B8%9A%E7%89%88/x64
/api/v1/office/2007/%E4%B8%93%E4%B8%9A%E7%89%88/x86
/api/v1/office/2007/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/office/2007
/api/v1/office/2003/%E4%B8%93%E4%B8%9A%E7%89%88/x86
/api/v1/office/2003/%E4%B8%93%E4%B8%9A%E7%89%88
/api/v1/office/2003
```

</details>

### 使用方法

```
<script src="http://127.0.0.1:3000/msdn-images/docs/js/api.js"></script>
<script>
    // 创建 API 实例
    const msdnApi = new MSDNAPI();
    // 示例：获取 Windows 数据
    async function fetchWindowsData() {
        try {
            const data = await msdnApi.fetchData('windows');
            console.log('Fetched Windows Data:', data);
            document.getElementById('app').innerText = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error fetching Windows data:', error);
        }
    }
    // 示例：查找特定路径的项目(路径格式为 `/大版本/小版本/小版本/小版本/位数`)
    async function findItemExample() {
        try {
            // 查找 Windows 11 24H2 零售版，第二个参数为：/大版本/[小版本1]/[小版本2]/位数
            // const item = await msdnApi.findItem('windows', '/Win11/24H2');
            // const item = await msdnApi.findItem('windows', '/Win11/24H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88');
            const item = await msdnApi.findItem('windows', '/Win11/24H2/%E6%B6%88%E8%B4%B9%E8%80%85%E7%89%88/2024.10');
            console.log('Found Item:', item);
            document.getElementById('app').innerText = JSON.stringify(item, null, 2);
        } catch (error) {
            console.error('Error finding item:', error);
        }
    }
    // 调用示例函数
    // fetchWindowsData();
    findItemExample();
</script>
```

## 其他事项

### 清除CDN缓存

```
curl -X GET "https://purge.jsdelivr.net/gh/lopins/msdn-images/docs/js/common.js"

curl -X GET "https://purge.jsdelivr.net/gh/lopins/msdn-images/docs/data/windows.json"

curl -X GET "https://purge.jsdelivr.net/gh/lopins/msdn-images/docs/data/office.json"
```

### 同类站点

- <https://uupdump.net/>

- <https://www.uupdump.cn/>

- <https://uup.rg-adguard.net/index.php>

- <https://massgrave.dev/genuine-installation-media>

- <https://os.click/>

- <https://www.microsoft.com/zh-cn/software-download/windows11/>

- <https://www.microsoft.com/zh-cn/software-download/windows10/>

- <https://msdn.itellyou.cn/>

### 如何激活

- [Microsoft-Activation-Scripts](https://github.com/massgravel/Microsoft-Activation-Scripts?tab=readme-ov-file#download--how-to-use-it)

请参阅 [Microsoft Activation Scripts](https://github.com/massgravel/Microsoft-Activation-Scripts/blob/07ad5a208dbe0f4cb570c22a11b27d864c7905c6/README.md#L15-L47) 的相关部分。