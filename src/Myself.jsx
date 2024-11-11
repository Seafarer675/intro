import a from "./images/01.jpg"
function MySelf(){
    return <div className="myself" id="myself">
        <div className="left">
            <h2>基本資料</h2>
            <h3>Personal <br/>Information</h3>
        </div>
        <div className="right">
            <p className="text">姓名 | 蕭傳原 <br/>生日 | 2003/04/05 <br/>性別 | 男 <br/>
            婚姻狀況 | 未婚 <br/> 兵役狀況 | 未役 <br/>手機 | 0958385965 <br/>
            戶籍地址 | 臺中市沙鹿區自立路212號 <br/> 通訊地址 | 高雄市燕巢區深水里深中路62號燕窩236號 <br/>
            E-mail | willie77092@gmail.com <br/></p>
            <img src={a}></img>

        </div>
        
    </div>
}
export default MySelf;