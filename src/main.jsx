import ReactDOM from 'react-dom/client'
import './index.css'
import JournalNoteApp from './JournalNoteApp'

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>♥ Journal Note ♥</h1>);
root.render(
<JournalNoteApp></JournalNoteApp>
)

// const JournalNoteApp = (
//     <div>
//     <h1>Journal Note</h1>
//     <LoginBox
//     title = "Login"
//     username = ""
//     password= ""
//     login = "Login"
//     ></LoginBox>
//     </div>);
