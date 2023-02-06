import { useState } from "react";

export function TaskForm({ createNote }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
             
       createNote({
         title,
         description
       });
    };
    return (

        <form onSubmit={handleSubmit}>
            <input placeholder="write your title note"
                onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="write your note" 
                onChange={(e) => setDescription(e.target.value)}></textarea>
            <button>
                Save
            </button>
        </form>

    );
}