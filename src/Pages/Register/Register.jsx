import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
   const [user,setuser]=useState(null);

   function HandleChange(e){
        e.preventDefault();
        const {name,value}=e.target;
        setuser({...user,[name]:value});
   }

   function HandleSubmit(){
    console.log(user);
        fetch(`http://localhost:3001/insertar-usuario`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
        })

            .then(response=>response.json())
            .then(data=>{
                alert("Usuario registrado");
                window.location="/";

            })

            .catch(e=>console.error(`Ocurrio un error ${e}`))

   }


  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-black p-10 rounded-2xl'>
        <div className='grid grid-cols-2 gap-4'>
            <div className='[&>label]:text-white'>
                <label>Usuario</label><br/>
                <input className='h-8 border-2 border-orange-500 hover:border-red-500' name="nombre" type="text" onChange={HandleChange}></input><br/>
                <label>Contraseña</label><br/>
                <input className='h-8 border-2 border-orange-500 hover:border-red-500' name="contra" type="text" onChange={HandleChange}></input><br/>
                <label>Correo</label><br/>
                <input className='h-8 border-2 border-orange-500 hover:border-red-500' name="correo" type="email" onChange={HandleChange}></input>
            </div>

            <div className='[&>label]:text-white'>
                
                <label>Telefono</label><br/>
                <input className="h-8 border-2 border-orange-500 hover:border-red-500" name="telefono" type="text" onChange={HandleChange}></input><br/>
                <label>Monto</label><br/>
                <input className="h-8 border-2 border-orange-500 hover:border-red-500" name="monto" type="text" onChange={HandleChange}></input><br/>
                <label>Direccion</label><br/>
                <input className="h-8 border-2 border-orange-500 hover:border-red-500" name="direccion" type="text" onChange={HandleChange}></input>
            </div>
            
            

        </div>

        <div className='flex justify-center gap-3'>
            <p className='rounded text-white border-2 border-orange-500 hover:border-red-500 p-2 mt-5 cursor-pointer' onClick={HandleSubmit}>Registrar</p>
            <p className=' rounded text-white border-2 border-orange-500 hover:border-red-500 p-2 mt-5'><Link to="/">Regresar</Link></p>
        </div>
        

        </div>
    </div>
    
  )
}

export default Register