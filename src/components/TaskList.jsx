import { useContext } from 'react';
import { NoteCard } from './NoteCard'
import { NoteContext } from '../context/NoteContext';

export function TaskList() {

    const { journal } = useContext(NoteContext)

    if (journal.length === 0) {
        return <h1>NO HAY TAREAS AUN</h1>
    }

    return (
        <>{
            journal.map((journal) => (
                <NoteCard key={journal.id} journal={journal} />
            ))}
        </>
    );
}