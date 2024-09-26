import { useState } from 'react';
import { auth } from '../Firebase' // Checar más adelante...   -----------------------------------------------------
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



export const Login = () => {

    const [register, setRegister] = useState (false)

    const handlerSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (register) {
            await createUserWithEmailAndPassword(auth, email, password)
        }

        else {
            await signInWithEmailAndPassword(auth, email, password)
        }
    }

    return (

<div>
    {/* Sección de formulario */}
    <div className='container-container'>
        <div className='login-box'>
        <div className='container-info'>
            <h1 className='title-login'>{register ? 'Register' : 'L o g i n'}</h1>
            <form onSubmit={handlerSubmit}>
                <div className='container-inputs'>
                    <label>
                    </label>
                    <input type="email" className='inputs' placeholder='write your email' id='email' required />
               
                    <label>
                    </label>
                    <input type="password" className='inputs' placeholder='write your password' id='password' required />
                 </div>

                <button className='btn-login' type='submit' >
                    {register ? 'Register' : 'Login'}
                </button>

            </form>

        <div></div>
    <button className='btn-access' onClick={() => setRegister(!register)}>
    {register ? 'You have an account? Login' : 'You do not have an account? Register' }
    </button>
    </div>
        </div>
    </div>
</div>

    )


}











































// ---------------------

// import { useState } from 'react';
// import { useAuth } from '../context/authContext'
// import { useNavigate } from 'react-router-dom';
// import { Alert } from './Alert';
// import "./css-components/Login.css";

// export function Login() {

//     const [user, setUser] = useState({
//         email: '',
//         password: '',
//     });
//     const { login, loginWithGoogle } = useAuth()
//     const navigate = useNavigate()
//     const [error, setError] = useState();


//     const handleChange = ({ target: { name, value } }) =>
//         setUser({ ...user, [name]: value })


//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {

//             await login(user.email, user.password)
//             navigate("/");
//         } catch (error) {
//             console.log(error.code);
//             setError(error.message);
//         }
//     }

//     const handleGoogleSignIn = async () => {
//         try {
//             await loginWithGoogle();
//             navigate("/");
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <div className='login-body'>
//                <p className='jn-title'>Journal Note📝</p>
//             <div className="login-box">
//                 {error && < Alert message={error} />}

             


//                 <form onSubmit={handleSubmit}
//                     className="container-contact"
//                 >
//                     <div className="container-info">
//                         <div className='dad-login'>
//                         <h1 className='title-login'>L O G I N</h1>
//                         </div>
                        
//                         <div className='container-inputs'>
//                         <i className="material-icons">email</i>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 onChange={handleChange}
//                                 placeholder="Email"
//                                 className="inputs"
//                             />
//                             <i className="material-icons">person</i>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 id="password"
//                                 onChange={handleChange}
//                                 className="inputs"
//                                 placeholder="Password"
//                             />
//                         </div>
//                     </div>
//                     <div className="btn-container">
//                         <button className="btn-login">
//                             Login
//                         </button>
//                     </div>
//                 </form>

//             </div>
//             <div className='login-googleAccess'>
//                 <button onClick={handleGoogleSignIn} className="btn-access">Access</button>
//                 <p>You don't have an account yet?     Create Account</p>


//             </div> </div>
//     )

// }