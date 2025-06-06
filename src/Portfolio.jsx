import b from './images/02.png'
import c from './images/03.png'
import d from './images/04.png'
import e from './images/05.png'
import f from './images/06.png'
import g from './images/07.png'
import h from './images/08.png'
import i from './images/09.png'
import j from './images/10.png'
import k from './images/11.png'
import l from './images/12.png'
import m from './images/13.png'
import n from './images/14.png'
import o from './images/15.png'
import p from './images/16.png'
import q from './images/17.png'
import r from './images/18.png'
import s from './images/19.png'
import t from './images/20.png'


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
                還有觀看youtube上的教學影片而製作出本小遊戲。過程中，我了解了如何使用類別來定義遊戲中的角色。除此之外，為了能夠理解每段程式碼的功能，我在大部分代碼後加上註解，
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
                <hr/>
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
                
                <br/>
                <br/>
                <hr/>
                <strong>3. Pet Diary | 網頁</strong>
                <br/>
                <br/>
                <b>3.1 摘要</b>
                <br/>
                這是一個寵物日記網頁，在主頁面有6種常見寵物的介紹，可以讓想要飼養寵物的人有些基本的了解。有註冊及登入的功能，
                使用者可以透過登入來新增、修改、查看與刪除日記。
                <br/>
                <br/>
                <b>3.2 問題與解決方法</b>
                <br/>
                開發過程中，我將登入、登出、登入狀態、新增日記、查看及修改日記，各寫一支php檔，為了能讓資料在這些php檔之間傳遞，由於需要較高的安全性與容量，故我選擇用session的方式，
                來儲存與傳遞使用者資料。而持續監控使用者的登入狀態則是透過javascript的setInterval()來達成，讓其在每秒都執行登入狀態的php檔，來查看使用者是否登入。

                <br/>
                <br/>
                <b>3.3 成果</b>
                <br/>
                <div className='image'>
                    <p><strong>3.3.1</strong> 右圖是網頁的主畫面，有6種常見寵物的間單介紹，可透過下方兩個滑動按鈕來選擇欲察看的動物品種。右上角有登入/登出的按鈕，
                    右下角則有新增與編輯日記的按鈕可供點選。</p>
                    <img src={j}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>3.3.2</strong> 右圖為按下簡介中的read more按鈕後，所跳轉的頁面，可供查看更多該品種的飼養須知。</p>
                    <img src={k}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>3.3.3</strong> 右圖為登入畫面，會根據使用者輸入的帳號密碼資訊來給予不同的回覆，若帳號密碼正確則顯示登入成功，密碼輸入錯誤則顯示密碼錯誤，
                    找不到使用者會顯示使用者不存在，並跳轉置註冊頁面。</p>
                    <img src={l}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>3.3.4</strong> 右圖為註冊頁面，自行輸入帳號與密碼即可使用本網頁。</p>
                    <img src={m}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>3.3.5</strong> 右圖為新增日記頁面，透過選取日期，即可在當日新增日記。</p>
                    <img src={n}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>3.3.6</strong> 右圖為修改日記頁面，可以透過選擇日期來查看、修改或刪除該日期的日記。</p>
                    <img src={o}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>3.3.7</strong> 右圖為登入狀態的監控，透過setInterval()方法來實作每秒監控登入狀態。</p>
                    <img src={p}></img>
                </div>
                <br/>
                
                <p>完整程式碼請按此(Github):<a href='https://github.com/Seafarer675/pet_diary.git'>網頁程式碼</a></p>
                <br/>
                <br/>
                <b>3.4 經驗</b>
                <br/>
                這是我第一次獨立開發包含前端、後端及資料庫操作的專案。在開發過程中，我實現了資料庫的新增、查看、修改、刪除操作。登入功能則簡單地將使用者輸入的資料與資料庫中的資料進行比對，來確認用戶身份。
                在設計介面時，我強化了對 CSS 的運用，包括頁面布局、按鈕的互動設計等。這次專案也使我學習到 PHP 的 session 管理，特別是對安全性和資料存取的考量。
                還有如何運用 JavaScript 的 setInterval() 方法來檢查登入狀態，保證了用戶體驗的流暢度。這次的開發經驗，使我對全端開發有了初步的認識，為日後的全端開發工作奠定基礎。
                
                <br/>
                <br/>
                <hr/>
                <strong>4. LSTM實作 | Python </strong>
                <br/>
                <br/>
                <b>4.1 摘要</b>
                <br/>
                這是我與專題組員一起進行的專題題目，主要是實作RNN的LSTM模型，該模型是用於時序數據的預測，目前採用加州房價資料集進行測試。
                <br/>
                <br/>
                <b>4.2 問題與解決方法</b>
                <br/>
                為了提高模型的準確性和加速其收斂，我們選擇在訓練前對資料進行標準化，其能使數據分佈在同一範圍內，避免因特徵值的數量級差異而造成的學習速度不一致，以及某些特徵因數值範圍較大而對模型造成過度影響，
                從而加快模型訓練的收斂速度與提高預測的準確度。我們還進行批次化的訓練，用以縮短訓練的時間以及穩定模型。目前我的模型遇到準確度不夠的問題，在透過查詢資料與詢問教授後，發現有過擬合的問題，
                故我們選擇用L2正規化與早停機制來解決此問題，最後我們與TensorFlow的LSTM來做比較，準確度約為1.07倍，但訓練時間高出了1.5倍。
                <br/>
                <br/>
                <b>4.3 成果</b>
                <br/>
                <div className='image'>
                    <p><strong>4.3.1</strong> 右圖為LSTM主要兩要件，前向傳播與後向傳播的程式碼</p>
                    <img src={q}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>4.3.2</strong> 右圖是預測值與真實值的比較，可以發現僅有一些資料的預測值較接近真實值，大部分都沒成功預測。</p>
                    <img src={s}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>4.3.3</strong> 右圖是進行訓練時的損失值，看起來沒有什麼問題，但預測時的準確度卻不高，從此即可判斷出發生過擬合的情況。</p>
                    <img src={r}></img>
                </div>
                <br/>
                <div className='image'>
                    <p><strong>4.3.4</strong> 右圖上方是訓練時與預測時的平均損失函數，下方為預測值與真實值的數字，只取前面10筆，可見現在該模型的確度還有待加強。</p>
                    <img src={t}></img>
                </div>
                <br/>
                
                <p>完整專題介紹:<a href='https://sites.google.com/mail.nknu.edu.tw/projects/%E6%AD%B7%E5%B1%86%E5%B0%88%E9%A1%8C/113%E5%B9%B4/%E5%BE%9E%E5%BA%95%E5%B1%A4%E5%AF%A6%E4%BD%9C%E9%95%B7%E7%9F%AD%E6%9C%9F%E8%A8%98%E6%86%B6%E6%A8%A1%E5%9E%8B?authuser=0'>專題報告</a></p>
                <br/>
                <p>完整程式碼請按此(Github):<a href = 'https://github.com/Seafarer675/LSTM.git'>專題程式碼</a></p>
                <br/>
                <b>4.4 經驗</b>
                <br/>
                在這個 LSTM 實作專案中，我了解到並學會使用數據標準化和批次化訓練的技巧，這有助於提高模型的準確度並縮短訓練時間。過程中，我遇到了過擬合問題，並計劃通過加入早停機制來改善模型表現。
                與專題組員的合作讓我深入了解了深度學習框架的使用，同時增強了解決問題和團隊協作的能力。
            </p>
        </div>
        
    </div>
}
export default Portfolio;





