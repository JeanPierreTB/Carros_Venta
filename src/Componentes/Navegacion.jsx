import React from 'react'

function Navegacion() {
  return (
    <header className="flex items-center justify-between">
 
        <nav className="ml-2 flex space-x-4">
            <p className='text-white text-[10px] cursor-pointer'>Inicio</p>
            <p className='text-white text-[10px] cursor-pointer'>Servicios</p>
            <p className='text-white text-[10px] cursor-pointer'>Productos</p>

        </nav>

        <img className="h-10" src="https://img.freepik.com/vector-premium/diseno-arte-vectorial-logotipo-hamburguesa_260747-237.jpg" alt="logo"></img>

        <nav className='flex space-x-4'>
            <img className="h-5 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="facebook"></img>
            <img className="h-5 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="twitter"></img>
            <img className="h-5 cursor-pointer" src="https://e7.pngegg.com/pngimages/16/46/png-clipart-made-in-kings-heath-instagram-facebook-female-graphy-instagram-logo-instagram-icon-text-trademark.png" alt="instagrama"></img>

        </nav>
    </header>
  )
}

export default Navegacion