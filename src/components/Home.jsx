import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import "./css-components/home.css";
import { deleteDoc, doc, setDoc, collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../Firebase"

export const Home = () => {
    const { user, logout, loading } = useAuth()

    const valorInicial = {
        nombre: '',
        profesion: ''
    }

    // variables de estado

    const [noteUser, setNoteUser] = useState(valorInicial)
    const [lista, setLista] = useState([])
    const [subId, setSubId] = useState('')

    const capturarInputs = (e) => {
        const { name, value } = e.target;
        setNoteUser({ ...noteUser, [name]: value })
    }

    // funcion para actualizar y guardar los datos 

    const guardarDatos = async (e) => {
        e.preventDefault();

        if (subId === '') {
            try {
                await addDoc(collection(db, 'notes'), {
                    ...noteUser
                })
            } catch (error) {
                console.log(error)
            }
        }

        else {
            await setDoc(doc(db, 'notes', subId), {
                ...noteUser
            })
        }

        setNoteUser({ ...valorInicial })
        setSubId('')
    }

    // funciones para renderizar la lista

    useEffect(() => {
        const getLista = async () => {

            try {
                const querySnapShot = await getDocs(collection(db, 'notes'))
                const docs = []
                querySnapShot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setLista(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getLista()
    }, [lista])

    // funcion para eliminar el usuario

    const deleteUser = async (id) => {
        await deleteDoc(doc(db, 'notes', id))
    }

    // funcion para actualizar el usuario

    const getOne = async (id) => {
        try {
            const docRef = doc(db, 'notes', id)
            const docSnap = await getDoc(docRef)
            setNoteUser(docSnap.data())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (subId !== '') {
            getOne(subId)
        }
    }, [subId])

    // Logueo---------------------------

    const handledLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <h2>Loading</h2>

    return (
    <>
        < div >
            <div className="dad-logout">
                <button onClick={handledLogout} className="btn-logout" >Logout</button>
            </div>

            <h1 className="title-page">💗✨Welcome to Journal Note✨💗
                <br />
                {user.displayName || user.email}
            </h1>
            <h2 className="subtitle-page">Remember this is important to you !</h2>
            <div className="row">
                {/* sección de formulario */}
                <div className="col-md-4">
                    <h3>Add note</h3>
                    <form onSubmit={guardarDatos}>
                        <div className="card card-body">
                            <div className="form-group">
                                <input type="text" name="nombre" className="form-control" placeholder="ingresa nombre de usuario" onChange={capturarInputs} value={noteUser.nombre} />
                                <input type="text" name="profesión" className="form-control" placeholder="ingresa profesión" onChange={capturarInputs} value={noteUser.profesion} />
                            </div>
                            <button className="btn btn-primary">
                                {subId === '' ? 'Guardar' : 'Actualizar'}
                            </button>

                        </div>
                    </form>
                </div>
                {/* esta sección será la lista de nuestros usuarios */}
                <div className="col-md-8">
                    <h2 className="text-center-mb-3">Lista de usuarios</h2>
                    <div className="container card">
                        <div className="card-body">
                            {
                                lista.map(list => (
                                    <div key={list.id}>
                                        <p>nombre:{list.nombre}</p>
                                        <p>profesión:{list.profesion}</p>

                                        <button className="btn btn-danger" onClick={() => deleteUser(list.id)}>
                                            <i className="material-icons">delete</i>
                                        </button>

                                        <button className="btn btn-success" onClick={() => setSubId(list.id)}>
                                            <i className="material-icons">edit</i>
                                        </button>
                                        <br />

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
    )
}



// import React, { useState } from "react";

// import { TaskList } from './TaskList';
// import { TaskForm } from './TaskForm';

// // import { app } from "../Firebase";


// export function Home() {
//     const { noteUser, logout, loading } = useAuth()

//     const createNote = {
//         title: '',
//         description: ''
//     };

//     const [note, setNote] = useState(createNote);

//     const noteForm = (e) =>{
//         const {name, value} = e.target;
//         setNote({...note [name]:value})
//     }

//     const saveNote = async(e)=>{
//         e.preventDefault();
//         setNote({...createNote})
//     }

//     const [description, setDescription] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         createNote({
//             title,
//             description
//         });

//         saveNotes(title, description, id)
//         console.log(saveNotes(title, description));

//         setTitle("")
//         setDescription("")
//     };

//     // Logueo---------------------------

//     const handledLogout = async () => {
//         try {
//             await logout();
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     if (loading) return <h2>Loading</h2>


//     return <>
//         <div className="dad-logout">
//             <button onClick={handledLogout} className="btn-logout" >Logout</button>
//         </div>

//         <h1 className="title-page">💗✨Welcome to Journal Note✨💗
//             <br />
//             {noteUser.displayName || noteUser.email}
//         </h1>

//         <h2 className="subtitle-page">Remember this is important to you !</h2>

//         <TaskForm />

//         <div className="container-notes">
//             <TaskList />
//         </div>
//     </>
// }}


