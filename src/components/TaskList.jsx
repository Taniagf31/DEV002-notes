import { NoteCard } from './NoteCard'
export function TaskList({ tasks }) {

    if (tasks.length === 0) {
        return <h1>NO HAY TAREAS AUN</h1>
    }
    return (
        <div>{
            tasks.map((task) => (
                <NoteCard key={task.id} task={task} />
            ))}
        </div>
    );
}