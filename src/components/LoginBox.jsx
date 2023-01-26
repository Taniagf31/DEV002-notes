import "./LoginBox.css"

function LoginBox() {
    return (
        <div className="LoginBox_box">
            <div className="LoginBox_container"> <h2 className="LoginBox_title">L o g i n</h2></div>
            <div className="LoginBox_info" >
                <div className="LoginBox_line">
                    <div className="LoginBox-input">
                        <img src="./Resource/user-regular.svg" alt="user" />
                        <input type="text" className="LoginBox_username" />
                        {/* <h3 className="LoginBox_username">Username:</h3> */}
                    </div>
                    {/* </div>
            <div className="LoginBox_line"> */}
                    <div  className="LoginBox-input">
                        <img src="./Resource/key-solid.svg" alt="user" />
                        <input type="text" className="LoginBox_password" />
                        {/* <h3 className="LoginBox_password">Password</h3> */}
                    </div>
                </div>
            </div>
            <p>💗Login💗</p>
        </div>
    )
};

export default LoginBox;

