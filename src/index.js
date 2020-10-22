import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

// 需要配置loader才可以导入css后缀名的文件
import '../public/index.less';


// webpack自动设置环境变量，development，production
if (process.env.NODE_ENV == 'production') {
    console.log('Looks like we are in production mode');
} else if (process.env.NODE_ENV == 'development') {
    console.log('Looks like we are in development mode');
}


// 路由器：HashRouter 和 BrowserRouter，BrowserRouter需要配置服务器
// 通常会将顶级<App>元素包装在路由器中
ReactDom.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById("root"));
