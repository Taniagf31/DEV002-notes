import "./LoginBox.css"

function LoginBox(){
    return (
        <div className="LoginBox_box">
            <div className="LoginBox_container"> <h2 className="LoginBox_title">L o g i n</h2></div>
            <div className="LoginBox_info" >
            <div className="LoginBox_line">
            <img src="./Resource/user-regular.svg" alt="user" />
            <input type="text" className="LoginBox_username"/>
            
            </div>
            <div className="LoginBox_line">
            <img src="./Resource/key-solid.svg" alt="user" />
            <input type="text" className="LoginBox_password"/>
            
            </div>
            </div>
            <button>💗Login💗</button>
        </div>
    )
};

export default LoginBox;

