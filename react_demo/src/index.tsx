import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // 设置路由模式
  <BrowserRouter>
    <React.StrictMode>
      {/* 主题设置 */}
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
          // 或者单独设置组件样式
          // components: {
          //   Radio: {
          //     colorPrimary: '#00b96b',
          //   },
          // },
        }}
      >
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
