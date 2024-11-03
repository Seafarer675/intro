import React from 'react'; // 引入 React，用於使用 JSX 語法

// 定義 `ListItem` 函式元件，接收 `text` 屬性作為參數
function ListItem({ text }) {
    // 返回一個列表項 `<li>`，顯示 `text` 的內容
    return <li>{text}</li>;
}

// 將 `ListItem` 元件設為預設導出，供其他文件導入使用
export default ListItem;
