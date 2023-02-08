import { useState } from "react";
import "./css-components/taskForm.css";

export function TaskForm({ createNote }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        createNote({
            title,
            description
        });
        setTitle("")
        setDescription("")
    };
    return (

        <form onSubmit={handleSubmit} className="box">
            <input placeholder="write your title note"
                onChange={(e) => setTitle(e.target.value)}
                value={title} className="container-title"
                autoFocus />
            <textarea placeholder="Describes your note"
                onChange={(e) => setDescription(e.target.value)}
                value={description} className="container-description"></textarea>
            <div className="dad-save">
                <button className="btn-save">
                    Save
                </button>
            </div>
        </form>

    );
}