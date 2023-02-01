import { useAuth } from "../context/authContext";

export function Home() {

    const { user, logout, loading } = useAuth()
    
    const handledLogout = async () => {
        await logout();
    };
    if (loading) return <h2>Loading</h2>
    return <div>
        <h1>💗Welcome {user.email}💗</h1>

        <button onClick={handledLogout}>Logout</button>
    </div>
}



