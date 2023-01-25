import ReactDOM from "react-dom";
// import { createRoot } from 'react-dom/client';
import './index.css';

const LoginBox = ({ title, username, password, login }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <span>{username}</span>
                <span>{password}</span>
            </div>
            <button>{login}</button>
        </div>
    );
};

const JournalNoteApp = (
    <div>
        <h1>Landing Page Journal Note</h1>
        <LoginBox
            title='Login'
            username='username'
            password='password'
            login= 'login'
        ></LoginBox>
    </div>);

const container = document.getElementById("root");
ReactDOM.render(JournalNoteApp, container);





// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<JournalNoteApp />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();