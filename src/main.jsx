import ReactDOM from 'react-dom/client';
import './index.css';
import JournalNoteApp from './JournalNoteApp';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

// ReactDOM.render (
//     <React.StrictMode>
//         <BrowserRouter>
//             <JournalNoteApp />
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>♥ Journal Note ♥</h1>);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <JournalNoteApp />
        </BrowserRouter>
    </React.StrictMode>

)
