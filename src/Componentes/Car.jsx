import React, { useState } from 'react'
import { useAuth } from '../AuthContext';

function Car({img,marca,nombre,des,precio}) {

  const [buttoname,setbuttoname]=useState("Reservar");
  const { nombre:nombreContext } = useAuth();

  
  function handleclik(){
    fetch(`http://localhost:3001/reservar-auto`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({nombrec:nombre,nombreu:nombreContext})
    })
      .then(response=>response.json())
      .then(data=>{
        console.log(data.message);
        if(data.message==="Auto reservado exitosamente"){
          alert("El auto esta reservado");
          setbuttoname("Devolver");
        }
        else{
          alert("Ocurrio un error al reservar el auto")
        }
      })

      .catch(e=>console.error(`Ocurrio un error ${e}`))
  }

  return (
    <div>
        <img className="w-30 h-20" src={img} alt={des}></img>
        <h2 className='text-white'>Marca:{marca}</h2> 
        <h3 className='text-white'>Nombre:{nombre}</h3>
        <p className='text-white'>{des}</p>
        <p className='text-white'>Precio:{precio}</p>
        {buttoname && (
          <button onClick={handleclik} className='rounded-2xl text-white border-2 border-orange-500 p-2 hover:text-red-500'>{buttoname}</button>
        )}
        
    </div>
  )
}

export default Car