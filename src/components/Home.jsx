import React, { useEffect, useState } from "react";
import "./css-components/home.css";
import { deleteDoc, doc, setDoc, collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { db, auth } from "../Firebase"
import {signOut, getAuth} from 'firebase/auth'
// import { async } from "@firebase/util";



export const Home = ({emailUser}) => {
    
      // const { user, logout, loading } = useAuth()
      
    const estadoInicial = {
        title: '',
        description: ''       
    };

    // variables de estado

    const [noteUser, setNoteUser] = useState(estadoInicial)
    const [noteData, setNoteData] = useState([])
    const [noteId, setNoteId] = useState('')
    const [actualizar, setActualizar] = useState(false)

    const capturarInputs = (e) => {
        const { name, value } = e.target;
        setNoteUser({ ...noteUser, [name]: value })
    }

    // funcion para actualizar y guardar los datos 

    const guardarDatos = async (e) => {
        e.preventDefault();

        if (!noteId) {
            try {
                await addDoc(collection(db, 'notes'), {
                    ...noteUser
                })
                setActualizar(true)

            } catch (error) {
                console.log(error)
            }
        }

        else {
            await setDoc(doc(db, 'notes', noteId), {
                ...noteUser
            })
            setActualizar(true)

        }

        setNoteUser({ ...estadoInicial })
        setNoteId('')
    }
     
    // funcion para eliminar el Nota

     const deleteNote = async (id) => {
        await deleteDoc(doc(db, 'notes', id))
        setActualizar(true)
    }

    // funciones para renderizar la noteData

    useEffect(() => {
        console.log('se ejecutó')
        setActualizar(false)
        const getNoteData = async () => {

            try {
                const querySnapShot = await getDocs(collection(db, 'notes'))
                const docs = []
                querySnapShot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setNoteData(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getNoteData()
    }, [actualizar]) // Se quitó noteData para no hacer una solicitud con useState


    // funcion para actualizar el Nota

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
        if (noteId !== '') {
            getOne(noteId)
        }
    }, [noteId])

    // Logueo---------------------------

    // const handledLogout = async () => {
    //     try {
    //         await logout();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // if (loading) return <h2>Loading</h2>

    return (
        <>
            < div >
                <div className="dad-logout">
                    <button onClick={()=> signOut (auth) } className="btn-logout" >Logout</button>
                </div>

                <h1 className="title-page">💗✨Welcome to Journal Note✨💗
                    <br />
                    {emailUser.displayName || emailUser.email}
                </h1>
                <h2 className="subtitle-page">Remember this is important to you !</h2>
                <div>
                    {/* sección de formulario */}
                    <div className="box">
                        <h3>Add note...🌸</h3>
                        <form onSubmit={guardarDatos}>
                            <div className="box">
                            
                                    <input type="text" name="title" className="container-title" placeholder="Title Note" onChange={capturarInputs} value={noteUser.title} />
                                    <textarea type="text" name="description" className="text-description" placeholder="Description Note" onChange={capturarInputs} value={noteUser.description} cols="30" rows="10"></textarea>
                                
                                <div className="dad-save">
                                <button className="btn-save">
                                    {noteId === '' ? 'Save' : 'Actualize'}
                                </button></div>

                            </div>
                        </form>
                    </div>
                    {/* esta sección será la noteData de nuestras Notas */}
                    <div className="container-body">
                    {/* <div className="container-all"> */}
                        <div className="container-card">
                                {
                                    noteData.map(noteDat => (
                                        <div className="card" key={noteDat.id}>
                                            <p className="card-title">{noteDat.title}</p>
                                            <p className="nc-description">{noteDat.description}</p>

                                            <button onClick={() => deleteNote(noteDat.id)}>
                                                <i className="material-icons">delete</i>
                                            </button>

                                            <button className="" onClick={() => setNoteId(noteDat.id)}>
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
        
        </>
    )
}



// import React, { useState } from "react";

// import { TasknoteDat } from './TasknoteDat';
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
//             <TasknoteDat />
//         </div>
//     </>
// }}


 // Pasar la información de User al estado para saludo y tal vez más.

//     import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

  // Fin de firebase auth copia pastel...
    
    // const auth = useAuth()

    // if (!auth?.user) {
    //     return <div>Hola</div>
    // }