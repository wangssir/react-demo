import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './index.less';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';

ReactDOM.render(
    <App />
    , document.getElementById('container'))
