import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Register } from './components/Register';
import { AuthProvider } from './context/authContext';
import { NoteContextProvider } from './context/NoteContext';

function App() {
  return (
    <div className='page'>

      <AuthProvider>
        <NoteContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>

              } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </NoteContextProvider>
      </AuthProvider>
    </div>
  )
}

export default App;
