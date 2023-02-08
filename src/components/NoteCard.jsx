import "./css-components/NoteCard.css";
export function NoteCard({ task, deleteNote }) {

    return (
        <>
            <div className="container-all">
            <div className="container-note">
            <h2 className="card-title">{task.title} </h2>
            <p className="nc-description">{task.description} </p>
            <div className="dad-delete">
            <button onClick={() => deleteNote (task.id)} className= "btn-delete">
                Delete
            </button></div>
            </div>
            </div>
        </>
    );
}
