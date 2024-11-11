import b from './images/02.png'
import c from './images/03.png'
import d from './images/04.png'
import e from './images/05.png'
import f from './images/06.png'
import g from './images/07.png'
import h from './images/08.png'
import i from './images/09.png'


function Portfolio(){
    return <div className="portfolio" id="portfolio">
        <div className="left">
            <h2>作品集</h2>
            <h3>Portfolio</h3>
        </div>
        <div className="right">
            <p className="text">
                <strong>1. Monkey king | Python小遊戲</strong>
                <br/>
                <br/>
                <b>1.1 摘要</b>
                <br/>
                此遊戲是用Python的Pygame所開發的，在大學一年級時，因為想多多練習Python，故選擇製作此遊戲來加深自己對Python的熟悉度。
                本遊戲是基於西遊記的背景，用鍵盤A與D操控悟空左右移動，撞擊八戒得一分，撞擊三藏則扣20%的血量，是一個簡單的小遊戲
                <br/>
                <br/>
                <b>1.2 問題與解決方法</b>
                <br/>
                在開發前先去看了Pygame的介紹，發現在使用中需要用到物件導向的概念，以及物件的移動與碰撞檢測，然而大一時並未學到相關的概念，因此自行上網找資料，
                還有觀看youtube上的教學影片而製作出本小遊戲。過程中，我了解了如何使用類別來定義遊戲中的角色。除此之外，為了能夠理解每段程式碼的功能，我在每行代碼後加上註解，
                這不僅幫助我自己學習，也使得後續程式碼的維護變得更加容易。
                <br/>
                <br/>
                <b>1.3 成果</b>
                <br/>
                <div className='image'>
                    <p><strong>1.3.1</strong> 右圖是遊戲的主畫面，寫著遊玩方式與遊戲規則，以及按下任意鍵即可開始遊玩。</p>
                    <img src={b}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>1.3.2</strong> 右圖是遊戲的遊玩畫面，左上角的綠色長條是血量，中間上方的數字是分數。畫面會隨機出現八戒與三藏，
                        會依撞擊到的角色來判定是加分或扣血。</p>
                    <img src={c}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>1.3.3</strong> 右圖是遊戲的結算畫面，會有該局遊戲所得的分數，及提示玩家按下滑鼠可回到主畫面，或是按下右上角的叉叉關閉視窗。</p>
                    <img src={d}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>1.3.4</strong> 右圖是遊戲片段程式碼，是遊戲的主要迴圈，包含了初始化界面、取得輸入、更新遊戲等重要功能。</p>
                    <img src={e}></img>
                </div>
                <br/>
                <p>完整程式碼請按此(Github):<a href='https://github.com/Seafarer675/monkey_king.git'>遊戲程式碼</a></p>
                <br/>
                <br/>
                <b>1.4 經驗</b>
                <br/>
                開發過程讓我接觸到物件導向設計的基本概念，這對我後來的學習和課程理解有了很大幫助。不僅學會了如何用 Python 設計遊戲邏輯，還鍛鍊自己在解決問題時的分析能力。
                在實現碰撞檢測和分數計算的過程中，逐漸了解如何將抽象的概念轉化為具體的程式。雖然這是一個簡單的小遊戲，
                由於是初學者的關係，在過程中遇到了許多基本的錯誤，而這些經驗恰好成為提升自己coding能力的養分。
                
                <br/>
                <br/>
                <strong>2. 台中市各區里人口組成 | 網頁</strong>
                <br/>
                <br/>
                <b>2.1 摘要</b>
                <br/>
                這是一個兩人協作並結合數據分析製作的網頁，使用xampp的apache做為開發的伺服器。分析台中市各區各里的人口組成，結果會以Echart的圓餅圖顯示。使用者能在主頁面看到台中市的各種人口統計，
                也能透過選單選取想查看的區里，會顯示該里的人口年齡組成，也能按下 查看更多 按鈕查看更多內容。
                <br/>
                <br/>
                <b>2.2 個人貢獻</b>
                <br/>
                在開發網頁的過程中我負責開發前端、尋找與整理資料、資料請求以及協助串接API的部分
                <br/>
                <br/>
                <b>2.3 問題與解決方法</b>
                <br/>
                在開發關聯選單時，由於當時不熟悉xampp的規則，並未將資料檔案放到指定的資料夾中，而導致觸發CORS問題，為了解決這個問題，我選擇將資料檔案用github pages佈署到網路上。
                當前後端與API差不多完成時，前端請求API時卻出現404，當時我們檢查了所有流程與程式碼，都沒發現問題在哪。上網搜尋資料時，雖然沒找到原因，但有發現解決方法，
                即新增一個虛擬主機專門給該API使用。
                <br/>
                <br/>
                <b>2.4 成果</b>
                <br/>
                <div className='image'>
                    <p><strong>2.4.1</strong> 右圖是網頁的主畫面，左半部為查詢的關聯選單，右半部為人口統計的比較，有各齡層與性別，最多和最少人的區域</p>
                    <img src={f}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>2.4.2</strong> 右圖為可供查詢的關聯選單，當在上方選擇特定的行政區後，下方選單內容會變為該行政區所管轄的里</p>
                    <img src={g}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>2.4.3</strong> 按下查詢後會顯示用Echart繪製的圓餅圖，用以簡略顯示該區的人口組成。按下read_more按鈕可以查看更多統計結果。</p>
                    <img src={h}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>2.4.4</strong> 右圖為查看更多內容的頁面，內容有該區的兩性年齡組成、性別比以及各年齡層的性別比。</p>
                    <img src={i}></img>
                </div>
                <br/>
                <p>完整程式碼請按此(Github):<a href='https://github.com/Seafarer675/Demographic_analysis.git'>網頁程式碼</a></p>
                <br/>
                <br/>
                <b>2.5 經驗</b>
                <br/>
                開發過程中，我有機會首次接觸到 AJAX 技術。透過 AJAX，實現了動態資料請求，使網頁可以即時載入並顯示不同區域的統計資訊，增強了用戶的互動體驗。
                這次經驗使我了解到如何利用 AJAX 在前端和後端之間進行非同步通訊，並讓網頁無需重新載入即可更新內容，還讓我學習了如何在 XAMPP 上運行 Apache 並進行前後端整合。
                過程中遇到的 CORS 問題及 404 錯誤，雖然感覺繞了一大圈透過將資料佈署到 GitHub Pages 及設置虛擬主機來解決，但也讓我學到了排除問題不一定只有一種固定的方法。
                這次與團員開發的經驗教會我如何分工與有效溝通，以確保整體開發流程順暢。從資料整理、API 串接，到使用 Echart 圓餅圖進行視覺化呈現，這些經歷讓我更有信心應對未來類似的挑戰。
                
            </p>
        </div>
        
    </div>
}
export default Portfolio;