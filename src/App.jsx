import {useState} from "react";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { appFirebase } from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(appFirebase);

export function App () {

const [user, setUser] = useState (null)

onAuthStateChanged(auth, (usuarioFirebase) => {
  if (usuarioFirebase) {
    setUser(usuarioFirebase)
  }
  else {
    setUser(null)
  }
})

return (

  <div className=''>
    {user ? <Home emailUser={user.email} /> : <Login />}
  </div>

)

}


















































// import { Routes, Route } from 'react-router-dom';
// import { Home } from './components/Home';
// import { Login } from './components/Login';
// import { ProtectedRoute } from './components/ProtectedRoute';
// import { Register } from './components/Register';
// import { AuthProvider } from './context/authContext';
// // import { NoteContextProvider } from './context/NoteContext';

// function App() {
//   return (
//     <div className='page'>

//       <AuthProvider>
        
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <ProtectedRoute>
//                   <Home />
//                 </ProtectedRoute>

//               } />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
      
//       </AuthProvider>
//     </div>
//   )
// }

// export default App;
