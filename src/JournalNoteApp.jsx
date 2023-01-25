import "./components/JournalNoteApp.css"
import LoginBox from "./components/LoginBox";

function JournalNoteApp () {
    return (
    <div className="JournalNote_logo">
        <img src="./Resource/Logo-JN.png" alt="logo" />
        <LoginBox></LoginBox>
        </div>
    )
}
export default JournalNoteApp;