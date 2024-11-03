import React, { useState } from 'react'; // 引入 React 和 `useState`，用於管理狀態
import ListItem from './ListItem'; // 引入 `ListItem` 子元件

// 定義 `App` 函式元件，作為應用的主組件
function App() {
    // 使用 useState Hook 來管理 `count` 狀態，預設值為 0
    const [count, setCount] = useState(0);

    // 定義按鈕的點擊事件處理函式，點擊時將 `count` 狀態增加 1
    const handleButtonClick = () => {
        setCount(count + 1); // 更新 `count` 的值
    };

    // JSX 返回的內容是渲染在頁面上的 HTML 結構和其他元件
    return (
        <div className="app-container"> {/* 容器元素，應用的主結構 */}
            <h1>React 基本應用示例</h1> {/* 主標題 */}
            <p>目前計數: {count}</p> {/* 顯示當前的 `count` 狀態 */}
            <button onClick={handleButtonClick}>增加計數</button> {/* 點擊按鈕觸發 `handleButtonClick` 函式 */}
            <h2>範例清單：</h2> {/* 子標題 */}
            <ul>
                {/* 使用 `ListItem` 子元件來顯示列表項，傳入 `text` 屬性 */}
                <ListItem text="第一項" />
                <ListItem text="第二項" />
                <ListItem text="第三項" />
            </ul>
        </div>
    );
}

// 將 `App` 元件設為預設導出，供其他文件導入使用
export default App;

