import { useState, useContext } from "react";
import "./css-components/taskForm.css";
import { NoteContext } from "../context/NoteContext";

export function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const {createNote} = useContext(NoteContext)

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
            <input type='text' name="Write your title note" placeholder="Write your title note"
                onChange={(e) => setTitle(e.target.value)}
                value={title} className="container-title"
                autoFocus
            />
            <div className="text-description">
                <textarea type='text' name="Describes your note" placeholder="Describes your note"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} className="container-description"></textarea>
                <div className="dad-save">
                    <i className="material-icons">add</i>
                    <button className="btn-save">
                        Save
                    </button>
                </div>
            </div>
        </form>

    );
}