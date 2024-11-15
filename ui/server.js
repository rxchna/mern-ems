const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const PROXY_TARGET = 'http://localhost:3000/graphql';

// Function to start application and initialize database client
function startApp() {
    try {
        const app = express();
        app.use(express.static('public'));

        app.use('/graphql', createProxyMiddleware({ target: PROXY_TARGET, changeOrigin: true }));

        const PORT = 8000;

        app.listen(8000, () => {
            console.log(`UI server started on port ${PORT}`);
        });
    } catch (error) {
        console.log('Error starting application: ', error);
    }
}

startApp();
