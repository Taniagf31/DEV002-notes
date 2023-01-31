
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import "./components/JournalNoteApp.css"

// import LoginBox from "./components/LoginBox";

function JournalNoteApp() {
    return (
        <Routes>
            <Route path= "/" element={<Home/>} />
            <Route path= "/" element={<Login/>} />
            <Route path= "/" element={<Register/>} />
            
            </Routes>
    )
}

export default JournalNoteApp;