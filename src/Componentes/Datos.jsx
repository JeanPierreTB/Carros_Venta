import React from 'react'

function Datos() {
  return (
    <div className="grid grid-cols-3 p-10">
        <div>
            <label className='text-white'>Usuario</label>
            <input type='text'></input>
            
        </div>

        <div>
            <label className='text-white'>Contraseña</label>
            <input type='password'></input>

        </div>

        <div>
            <label className='text-white'>Correo</label>
            <input type='email'></input>
        </div>

        <div>
            <label className='text-white'>Telefono</label>
            <input type='text'></input>
        </div>
        <div className='col-start-3'>
            <label className='text-white'>Direccion</label>
            <input type='text'></input>
        </div>
        
        
        
        
    </div>
  )
}

export default Datos