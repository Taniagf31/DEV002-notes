import { useAuth } from "../context/authContext";
import {TaskList} from './TaskList';
import {TaskForm} from './TaskForm';
import {tasks as data} from './tasks';
import {useState, useEffect} from 'react';

export function Home() {
    const { user, logout, loading } = useAuth()
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        setTasks(data)
    }, []
    )
   function createNote(task) {
    setTasks([...tasks, {
     title: task.title, 
     id: tasks.length,
     description: task.description  
    } ])
   }

    const handledLogout = async () => {
        try {
        await logout();
        } catch(error){
            console.error(error);
        }
    };
    if (loading) return <h2>Loading</h2>
    return <div>
        <h1>💗Welcome to Journal Note, {user.displayName||user.email}💗</h1>
        
        <button onClick={handledLogout}>Logout</button>
           <TaskForm createNote = {createNote} />
            <TaskList tasks = {tasks} />
    </div>  
}



