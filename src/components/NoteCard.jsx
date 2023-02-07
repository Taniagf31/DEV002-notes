export function NoteCard({ task, deleteNote }) {

    return (
        <div >
            <h1>{task.title} </h1>
            <p>{task.description} </p>
            <button onClick={() => deleteNote (task.id)}>
                Delete Note
            </button>
        </div>
    );
}
