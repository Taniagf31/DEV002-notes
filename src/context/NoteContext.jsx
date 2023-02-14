import { createContext, useState, useEffect } from "react";
import { getFirestore, collection, addDoc, onSnapshot, doc, getDoc, deleteDoc } from "firebase/firestore";


export const db = getFirestore();

export const NoteContext = createContext();

export function NoteContextProvider(props) {
    const [journal, setJournal] = useState([])

    useEffect(() => {
        onSnapshot(collection(db, "notes"), (querySnapshot) => { //ordenarle en fecha tal vez sort(...data)
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setJournal(docs);
            // console.log(doc.id);

        })

    }, []
    )

    // Función para Crear Nota-------------------------

    function createNote(journal) {
        
        try {
            addDoc(collection(db, "notes"), {
                title: journal.title,
                description: journal.description
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    // Función de borrado--------------------------------------------------------

    const deleteNote = async (id) => {
        const deleteId = id.toString()
        await deleteDoc(doc(db, "notes", deleteId));
    }

    // Función de Editar-----------------------------------------------------------

    const [editNote, setEditNote] = useState('')
    const getNote = async (journal) => {
        try {
            console.log(id)
            const docRef = doc(db, 'notes', journal.id)
            const docSnap = await getDoc(docRef)
            createNote(docSnap.data())
        } catch (error) {
            // console.log(error);
        }
    }

    console.log (journal)

    useEffect(() => {
        if (editNote !== '') {
            getNote(editNote)
        }
    }, [editNote])

    // Renderizado------------------------------

    return (
        <NoteContext.Provider
            value={{
                journal,
                deleteNote,
                createNote,
                editNote,
                setEditNote
            }}>
            {props.children}
        </NoteContext.Provider >
    );

}