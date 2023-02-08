import React from 'react'

export default function 
() {
  return (
    <div className='bg-slate-900 h-screen'>
    <h1 className='text-4xl font-bold p-8 text-orange-400'>Mas sobre mi...</h1>
      <div className='flex justify-evenly py-24 bg-slate-800'>
        <div className=' bg-slate-400/60  rounded-lg hover:shadow-xl hover:shadow-orange-500  h-[34rem] w-96 border-double border-4 border-orange-400 text-center'>
        <h1 className='text-4xl text-cyan-600 font-semibold uppercase mt-8 px-4'>Experiencia</h1>
        

        </div>
        <div className=' bg-slate-400/60 rounded-lg hover:shadow-xl hover:shadow-orange-500   h-[34rem] w-96 border-double border-4 border-orange-400 text-center'>
        <h1 className='text-4xl text-cyan-600 font-semibold uppercase mt-8 px-4'>Hobbies</h1>


        </div>
        <div className=' bg-slate-400/60 rounded-lg hover:shadow-xl hover:shadow-orange-500  h-[34rem] w-96 border-double border-4 border-orange-400 text-center'>
        <h1 className='text-4xl text-cyan-600 font-semibold uppercase mt-8 px-4'>Aprendizaje ahora</h1>


        </div>
      </div>
    </div>
  )
}
