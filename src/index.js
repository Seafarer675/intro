import React from 'react'; // 引入 React，用於使用 JSX 語法和 React 功能
import ReactDOM from 'react-dom/client'; // 引入 ReactDOM，用於將 React 元件渲染到 DOM 中
import App from './App'; // 引入主元件 `App`，是應用的根元件
import './styles.css'; // 引入應用的樣式表

// 創建一個 React 根容器，並將 `App` 元件渲染到位於 public/index.html 中的 #root DOM 節點
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // 使用 JSX 語法將 `App` 元件渲染到頁面上