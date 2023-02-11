import "./css-components/NoteCard.css";
// import { deleteDoc, doc, setDoc } from "firebase/firestore";
// import { db } from "./Home";

// Función de borrado--------------------------------------------------------

// const deleteNote = async (id) => {
//         await deleteDoc(doc(db, "notes", id))
//     }

export function NoteCard({ task, deleteNote }) {

    // const deleteNote = async (id) => {
    //     await deleteDoc(doc(db, "notes", id))
    // }

    // function deleteNote () {
    //    async (id) => {
    //         await deleteDoc(db, "notes", id)
    //     }
    // }

    return (

        <>
            <div className="container-all">
                <div className="container-note">
                    <h2 className="card-title">{task.title} </h2>
                    <p className="nc-description">{task.description} </p>
                    <div className="dad-delete">
                        <i onClick={() => deleteNote(task.id)} className="material-icons">favorite</i>
                        <i onClick={() => deleteNote(task.id)} className="material-icons">edit</i>
                        <i onClick={() => deleteNote(task.id)} className="material-icons">delete</i>
                    </div>
                </div>
            </div>
        </>
    );
}
