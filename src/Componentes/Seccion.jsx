import React from 'react'

function Seccion() {
  return (
    <section className='flex justify-center items-center p-20'>
        <div>
            <h2 className='text-white font-bold'>Hamurguesa</h2>
            <p className='text-white text-[10px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime similique eligendi harum exercitationem accusantium minima accusamus voluptatibus, ratione minus fugit! Fuga accusantium quia fugiat neque doloribus recusandae asperiores eos voluptatem.</p>
            <div className='flex gap-4 justify-center mt-5'>
                <button className='text-white border-2 text-[10px] font-bold p-2 border-red-600 rounded-md'>COMPRAR</button>
                <button className='text-white border-2 text-[10px] font-bold p-2 border-red-600 rounded-md'>MENU</button>
            </div>
            
        </div>
        <div>
            <img className="h-[100px] w-[420px] -mt-10"src='https://assets.unileversolutions.com/recipes-v2/216850.jpg' alt="muestra"></img>
        </div>
        
    </section>
  )
}

export default Seccion