import { useContext } from "react";
import { NoteContext } from "../context/NoteContext"
import "./css-components/NoteCard.css";

export function NoteCard({ journal }) {

    const { deleteNote, setEditNote } = useContext(NoteContext)

    console.log (journal);

    return (

        <>
            <div className="container-all">
                <div className="container-note">
                    <h2 className="card-title">{journal.title} </h2>
                    <p className="nc-description">{journal.description} </p>
                    <div className="dad-delete">
                        <i onClick={() => setEditNote(journal.id)} className="material-icons">edit</i>
                        <i onClick={() => deleteNote(journal.id)} className="material-icons">delete</i>
                    </div>
                </div>
            </div>
        </>
    );
}
