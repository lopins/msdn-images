class MSDNAPI {
    constructor() {
        this.urls = [
            { url: 'https://cdn.jsdelivr.net/gh/lopins/msdn-images/docs/data/windows.json', type: 'windows' },
            { url: 'https://cdn.jsdelivr.net/gh/lopins/msdn-images/docs/data/office.json', type: 'office' }
        ];
        this.dataCache = {}; // 用于缓存已加载的数据
    }

    async fetchData(type) {
        if (this.dataCache[type]) {
            return this.dataCache[type];
        }

        const urlData = this.urls.find(u => u.type === type);
        if (!urlData) {
            throw new Error(`No URL found for type ${type}`);
        }

        try {
            const response = await fetch(urlData.url);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from ${urlData.url}: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            if (typeof data !== 'object') {
                throw new Error(`Invalid JSON data received from ${urlData.url}`);
            }
            this.dataCache[type] = data;
            return data;
        } catch (error) {
            console.error('Error fetching JSON data:', error);
            throw error;
        }
    }

    async findItem(type, path) {
        if (typeof type !== 'string' || typeof path !== 'string') {
            throw new TypeError('Type and path must be strings');
        }

        const data = await this.fetchData(type);

        const pathParts = path.split('/').filter(Boolean); // 移除空字符串

        let current = data;
        for (const part of pathParts) {
            current = current.find(item => item.name === decodeURIComponent(part));
            if (!current || !current.children) {
                throw new Error(`Path not found: ${path}`);
            }
            current = current.children;
        }

        return current;
    }

    clearCache(type) {
        if (type) {
            delete this.dataCache[type];
        } else {
            this.dataCache = {};
        }
    }
}

// 导出库以便于模块化使用
// export { MSDNAPI };

// 如果是通过<script>标签直接使用，则暴露全局对象
if (typeof window !== 'undefined') {
    window.MSDNAPI = MSDNAPI;
}

/**
 * 使用示例
    <script src="http://127.0.0.1:3000/msdn-images/docs/js/api.js"></script>
    <script>
        // 创建 MSDNAPI 实例
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
 */