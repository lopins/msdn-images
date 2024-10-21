const express = require('express');
const axios = require('axios');
const path = require('path');
// const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// 远程JSON数据的URL
const urls = [
    { url: 'https://cdn.jsdelivr.net/gh/lopins/msdn-images/docs/data/windows.json', type: 'windows' },
    { url: 'https://cdn.jsdelivr.net/gh/lopins/msdn-images/docs/data/office.json', type: 'office' }
];

// 递归函数用于生成路径
function generatePaths(app, data, basePath) {
    data.forEach(item => {
        const path = `${basePath}/${encodeURIComponent(item.name)}`;
        app.get(path, (_, res) => res.json(item));
        if (Array.isArray(item.children) && item.children.length > 0) {
            generatePaths(app, item.children, path);
        }
    });
}

// 异步函数用于加载数据并生成路由
async function loadAndGenerateRoutes() {
    try {
        await Promise.all(urls.map(async ({ url, type }) => {
            const data = (await axios.get(url)).data;
            generatePaths(app, data, `/api/v1/${type}`); // 生成路由,定义API前缀 /api/v1
        }));

        // 配置静态文件中间件，但排除API路径
        app.use((req, res, next) => {
            if (req.path.startsWith('/api/v1')) {
                next(); // 如果是API路径，跳过静态文件处理
            } else {
                express.static(path.join(__dirname, 'docs'))(req, res, next);
            }
        });

        // 处理默认的根路径
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'docs', 'index.html'));
        });

        // // 全局错误处理中间件
        // app.use((err, req, res, next) => {
        //     res.status(500).send('Something broke!');
        // });

        app.listen(port, () => {
            console.log(`API server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error loading JSON data:', error);
        process.exit(1); // 终止进程
    }
}

// 启动服务器
loadAndGenerateRoutes();