import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

function Perfil() {

  const { nombre, contra } = useAuth();
  const [userdata, setuserdata] = useState(null);

  useEffect(() => {
    console.log(nombre, contra);
    fetch(`http://localhost:3001/datos-usuario/${nombre}/${contra}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.usuario[0]);
        setuserdata(data.usuario[0]);
      })
      .catch(e => console.error(`Ocurrió un error ${e}`));
  }, [nombre, contra]);

  function handleUpdate() {
    fetch(`http://localhost:3001/actualizar-perfil`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userdata)
    })
    .then(response => response.json())
    .then(data => {
      console.log(userdata); // Assuming your API returns a message
    })
    .catch(e => console.error(`Ocurrió un error ${e}`));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setuserdata(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <div>
      <header className='flex items-center gap-10 text-white'>
        <Link to="/main"><FaHome className='text-[20px]'></FaHome></Link>
        <h2 className='text-2xl'>Informacion de mi perfil</h2>
      </header>
      <hr className='border-2'/>
      <main className='bg-gray-600 w-[550px] p-10 m-auto mt-10 rounded-lg flex'>
        <div className='font-bold text-black'>
          <label>Usuario</label><br/>
          <input className='h-8 border-2 border-orange-500 hover:border-red-500' type="text" name="nombre" value={userdata?.nombre} onChange={handleChange}></input><br/>
          <label>Contraseña</label><br/>
          <input className='h-8 border-2 border-orange-500 hover:border-red-500' name='contra' type="text" value={userdata?.contra} onChange={handleChange}></input><br/>
          <label>Correo</label><br/>
          <input className='h-8 border-2 border-orange-500 hover:border-red-500' name="correo" type="email" value={userdata?.correo} onChange={handleChange}></input><br/>
          <label>Telefono</label><br/>
          <input className="h-8 border-2 border-orange-500 hover:border-red-500" name="telefono" type="text" value={userdata?.telefono} onChange={handleChange}></input><br/>
          <label>Monto</label><br/>
          <input className="h-8 border-2 border-orange-500 hover:border-red-500" name="monto" type="text" value={userdata?.monto} onChange={handleChange}></input><br/>
          <label>Direccion</label><br/>
          <input className="h-8 border-2 border-orange-500 hover:border-red-500" name="direccion" type="text" value={userdata?.direccion} onChange={handleChange}></input><br/>
          <button className='mt-5 ml-32 rounded-lg font-bold border-[2px] text-black border-orange-500 p-2 hover:text-red-400' onClick={handleUpdate}>Actualizar Datos</button>
        </div>
        <div className='mt-28 ml-5'>
          <img className="rounded-lg w-40 h-28" src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg" alt="Foto del usuario"></img>
         
        </div>
      </main>
    </div>
  );
}

export default Perfil;
