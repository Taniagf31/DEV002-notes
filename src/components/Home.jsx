import { useAuth } from "../context/authContext";
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';
import "./css-components/home.css";
import { app } from "../Firebase";


export function Home() {
    const { user, logout, loading } = useAuth()

    // Logueo---------------------------

    const handledLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <h2>Loading</h2>
    return <>
        <div className="dad-logout">
            <button onClick={handledLogout} className="btn-logout" >Logout</button>
        </div>

        <h1 className="title-page">💗✨Welcome to Journal Note✨💗
            <br />
            {user.displayName || user.email}
        </h1>

        <h2 className="subtitle-page">Remember this is important to you !</h2>

        <TaskForm />

        <div className="container-notes">
            <TaskList />
        </div>
    </>
}



    // function deleteNote(noteId) {
    //     deleteDoc(doc(db, "notes", noteId))
    //     setTasks()
    // }
    // console.log(deleteNote);


    // function deleteNote(taskId) {
    //     setTasks(tasks.filter(task => task.id !== taskId))
    // }
