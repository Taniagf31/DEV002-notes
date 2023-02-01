import {useAuth} from '../context/authContext'

export function Home (){

const authContext = useAuth()

console.log(authContext);

    return <h1>💗Home💗</h1>;
}



