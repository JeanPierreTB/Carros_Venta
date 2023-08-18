import React, { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuth } from '../../AuthContext'
import { format } from 'date-fns';

function Transacciones() {

    const [transa,settransa]=useState(null);

    const {nombre}=useAuth();

  

  useEffect(()=>{
    fetch(`http://localhost:3001/obtener-transa/${nombre}`)
        .then(response=>response.json())
        .then(data=>settransa(data))
        .catch(e=>console.error(`Ocurrio un error ${e}`))
  },[nombre])


  return (
    <div>
        <header className='text-white flex items-center text-2xl gap-5'>
            <Link to="/main"><FaHome></FaHome></Link>
            <h1 className=''>Transacciones</h1>
            
        </header>
        <hr className='border-2'/>
        <main className='mt-10 m-auto rounded-lg w-[650px] bg-red-400 px-10 py-10'>
            <table className='rounded-lg overflow-hidden'>
                <thead className='text-black font-bold'>
                    <tr className='[&>td]:border-2 [&>td]:border-black [&>td]:px-4 [&>td]:py-2 [&>td]:text-center'>
                        <td>Fecha_Inicio</td>
                        <td>Fecha_Fin</td>
                        <td>Nombre</td>
                        <td>Precio</td>
                    </tr>
                </thead>

                <tbody className='text-black'>
                    {transa?.map(tran => (
                        <tr className="[&>td]:border-2 [&>td]:border-black [&>td]:px-8 [&>td]:py-4 [&>td]:text-center" key={tran.id}>
                            <td>{format(new Date(tran.fecha_inicio), 'yyyy-MM-dd')}</td>
                            <td>{format(new Date(tran.fecha_fin), 'yyyy-MM-dd')}</td>
                            <td>{tran.nombre}</td>
                            <td>{tran.precio}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </main>
    </div>
  )
}

export default Transacciones