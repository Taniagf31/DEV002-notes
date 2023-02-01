import { createContext, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../Firebase"
import { async } from "@firebase/util";
import { useEffect } from "react";
import { useState } from "react";


export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    return context

}
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const login = async (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    // const logout = () => signOut(auth);
    const logout = () => signOut(auth);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe ();
    }, []);

    return (
        <authContext.Provider value={{ signup, login, user, logout, loading }}>
            {children}
        </authContext.Provider>
    );
}

