import { useAuth } from "../context/authContext";

export function Home() {
    const { user, logout, loading } = useAuth()
    
    console.log(user);
    const handledLogout = async () => {
        try {
        await logout();
        } catch(error){
            console.error(error);
        }
    };
    if (loading) return <h2>Loading</h2>
    return <div>
        <h1>💗Welcome, {user.displayName||user.email}💗</h1>

        <button onClick={handledLogout}>Logout</button>
    </div>
}



