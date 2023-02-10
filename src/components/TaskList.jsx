import { NoteCard } from './NoteCard'
export function TaskList({ tasks, deleteNote }) {

    if (tasks.length === 0) {
        return <h1>NO HAY TAREAS AUN</h1>
    }
    return (
        <>{
            tasks.map((task) => (
                <NoteCard key={task.id} task={task} deleteNote={deleteNote} />
            ))}
        </>
    );
}

// Icarito
// getDocs
// onSnapshot
// getDocs ( query, ()=>{} )
// (data)=>{}
// Sebastian Silva (él/him)  to  Everyone 8:08 AM
// querySnapshot
// Sebastian Silva (él/him) 8:18 AM
// key="..."