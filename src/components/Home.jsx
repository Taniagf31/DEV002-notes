import { useContext } from 'react';
import {context} from '../context/authContext'

export function Home (){

const authContext = useContext(context)


    return <h1>💗Home💗</h1>;
}



