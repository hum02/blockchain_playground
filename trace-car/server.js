const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// API 요청을 위한 프록시 설정
app.use('/api', createProxyMiddleware({
    target: 'https://api.luniverse.io/svc/v2',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // 경로 재작성
    },
}));

// Vite 서버에 연결
const { createServer: createViteServer } = require('vite');

async function createServer() {
    const vite = await createViteServer({
        server: { middlewareMode: 'html' },
    });
    app.use(vite.middlewares);

    const port = 3000;
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
    });
}

createServer();
