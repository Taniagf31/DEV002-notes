import { useAuth } from "../context/authContext";
import {TaskList} from './TaskList';
import {TaskForm} from './TaskForm';
import {tasks as data} from './tasks';
import {useState, useEffect} from 'react';
import "./css-components/home.css";

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
   
   function deleteNote (taskId) {
    setTasks (tasks.filter (task => task.id !== taskId))
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
        <div className="dad-logout">
        <button onClick={handledLogout} className="btn-logout" >Logout</button>
        </div>

        <h1 className="title-page">💗✨Welcome to Journal Note✨💗
        <br />
         {user.displayName||user.email}</h1>
        <h2 className="subtitle-page">Remember this is important to you !</h2>
        
       
           <TaskForm createNote = {createNote} />
           <div className="container-notes">
            <TaskList tasks = {tasks} deleteNote={deleteNote} />


       </div>
    </div>  
}



