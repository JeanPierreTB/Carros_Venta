import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../../AuthContext'; 

function Login() {
  const navigate=useNavigate();
  const [user,setuser]=useState();
  const { setNombre, setContra } = useAuth(); 

  function HandleChange(e){
    e.preventDefault();
    const {name,value}=e.target;
    setuser({...user,[name]:value});
  }

  function HandleSubmit(){
    
      fetch(`http://localhost:3001/usuario-valido`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)

      })

      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          alert("Usuario no válido");
        } else {
          alert("Error al consultar la base de datos");
        }
      })
      .then(data => {
        if (data.message === "Usuario válido encontrado") {  
          alert("Usuario válido");
          console.log(user.nombre,user.contra);
          setNombre(user.nombre);
          setContra(user.contra);
          navigate("/main")
        }
      })
      
      .catch(e => console.error(`Ocurrió un error ${e}`));
  }

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className="bg-black p-8 rounded-2xl h-[350px] w-[350px] ">
            <h2 className='text-2xl text-white text-center'>Inicio de sesion</h2>
            <div className='mt-10 [&>label]:text-white'>
                <label>Usuario</label><br/>
                <input className='w-full h-8 border-2 border-orange-500 hover:border-red-500' name="nombre" type="text" onChange={HandleChange}></input><br/>
                <label>Contraseña</label><br/>
                <input className="w-full h-8 border-2 border-orange-500 hover:border-red-500" name="contra" type="password" onChange={HandleChange}></input><br/><br/>
                <div className='[&>p]:text-white flex gap-x-2 ml-2'>
                    <p className='rounded border-2 border-orange-500 px-3 py-2 hover:text-red-500 cursor-pointer' onClick={HandleSubmit}>Iniciar sesion</p>
                    <p className='rounded border-2 border-orange-500 px-3 py-2 hover:text-red-500'><Link to="/register">Registrarte aqui</Link></p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login