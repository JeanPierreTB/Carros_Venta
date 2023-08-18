
import './App.css';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Main from './Pages/Main/Main';
import Perfil from './Pages/Perfil/Perfil';
import Transacciones from './Pages/Transacciones/Transacciones';
import { AuthProvider } from './AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className='w-screen h-screen bg-cover bg-center bg-inicio'>
      <AuthProvider>
        <BrowserRouter>
        
          <Routes>
            
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/transa' element={<Transacciones/>}/>
            
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
