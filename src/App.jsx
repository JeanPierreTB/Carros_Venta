
import './App.css';
/*import Navegacion from "./Componentes/Navegacion";
import Seccion from './Componentes/Seccion';
import Datos from './Componentes/Datos';*/
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Main from './Pages/Main/Main';
import Perfil from './Pages/Perfil/Perfil';
import Transacciones from './Pages/Transacciones/Transacciones';
import { AuthProvider } from './AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  /* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button className='bg-blue-500 mt-5 hover:bg-blue-700 px-5 py-1 text-white font-bold rounded'>Enviar</button>

      <div className='grid grid-cols-3 mt-5 gap-4 my-2'>
        <p className='bg-red-400'>A</p>
        <p className='bg-red-400'>B</p>
        <p className='bg-red-400'>C</p>
        <p className='bg-red-400 col-span-3'>C</p>

      </div>


      <div className='grid grid-cols-12 mt-10 gap-4'>
          <p className='bg-orange-500 col-span-4'>A</p>
          <p className='bg-orange-500 col-span-4' >b</p>
          <p className='bg-orange-500 col-span-4'>c</p>
          <p className='bg-orange-500 col-span-8'>d</p>
          <p className='bg-orange-500 col-span-4'>E</p>
          <p className='bg-orange-500'>F</p>
          <p className='bg-orange-500'>G</p>
          <p className='bg-orange-500'>H</p>
          <p className='bg-orange-500'>I</p>
          <p className='bg-orange-500'>J</p>
          <p className='bg-orange-500'>K</p>
          <p className='bg-orange-500'>L</p>
      </div>

      <div className='grid grid-cols-3 mt-20'>
        <div className='mb-2'>
          <label className="text-yellow-400">Nombre</label>
          <input className='border border-red-500 boder-red-2 w-21'></input>
        </div>

        <div className='mb-2'>
          <label className="text-yellow-400">Apellido</label>
          <input className='border border-red-500 boder-red-2'></input>
        </div>

        <div className='mb-2'>
          <label className="text-yellow-400">Correo</label>
          <input className='border border-red-500 boder-red-2'></input>
        </div>

        <div className='mt-2'>
          <label className="text-yellow-400">Correo</label>
          <input className='border border-red-500 boder-red-2'></input>
        </div>

        <div className='col-start-3 mt-2'>
          <label className="text-yellow-400">Rol</label>
          <input className='border border-red-500 boder-red-2'></input>
        </div>

        
      </div>

      <div className='grid grid-cols-3 grid-rows-2 mt-5 gap-4'>
          <div className='bg-pink-800'>A</div>
          <div className='bg-pink-800'>B</div>
          <div className='bg-pink-800 row-span-2 flex justify-center items-center'>C</div>
          <div className='bg-pink-800'>D</div>
          <div className='bg-pink-800'>E</div>

      </div>

      <div className='bg-pink-800 p-10 rounded mt-5 flex flex-wrap justify-center gap-2'>
        <p className='bg-lime-500 p-4 '>1</p>
        <p className='bg-lime-500 p-4'>2</p>
        <p className='bg-lime-500 p-4'>3</p>

      </div>

      <div className='bg-orange-800 mt-5 flex justify-center items-center gap-10'>
          <p>A</p>
          <p>A</p>

      </div>*/
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
