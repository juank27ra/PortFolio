import React from 'react'
import { useState } from 'react'
import imagPerfil from '../assets/Juan.jpg'
import { Link } from 'react-router-dom'
import arrow from '../assets/downarrow_78496.svg'

const Profile = () => {

  const sccrollDown = (e) => {
    return window.scrollTo(0, 970)
  }
  return (
    <div className='flex gap-20 my-auto justify-center items-center mx-10 w-auto sm:mx-5 sm:gap-4 h-auto sm:flex sm:flex-col sm:my-10'>
      <img className='h-[24rem] xl:h-[18rem] md:h-[12rem] sm:h-[12rem] 2xl:h-[28rem] rounded-full w-auto bg-transparent grayscale hover:shadow-lg hover:shadow-[#01161E] hover:grayscale-0' src={imagPerfil} alt='Imagen de perfil' />
      <div className='mt-20 w-auto sm:w-auto sm:mt-10 sm:text-center'>
        <p className=' text-xl text-[#01161E] sm:text-base'>Hola!👋, Soy </p>
        <h1 className=' text-4xl font-bold text-[#01161E] sm:text-2xl'>Juan Carlos </h1>
        <h1 className=' text-4xl font-bold text-[#01161E] mb-9 sm:text-2xl'>Ramírez Pinilla</h1>
        <h3 className='text-3xl font-semibold ml-20 sm:ml-0 text-[#598392] sm:text-xl '> Developer Full Stack </h3>
        <p className='text-xl mt-4 text-[#01161E] w-auto sm:text-base text-justify mr-8 sm:w-5/6 sm:mx-auto 2xl:w-[80%]'>Entusiasta de la tecnología y con disciplina en el aprendizaje me defino. Ver cómo se transforma el código visualmente y sentir la grandeza de lo que hago, me pone en una perspectiva de aprendizaje continuo para SER el mejor. </p>
        <p className='text-2xl font-semibold mt-10 text-[#01161E] sm:text-lg sm:items-center'>Bienvenidos. </p>
          <div className='flex items-start sm:flex sm:justify-center mb-24'>
            <Link to='about'><button className='flex duration-1000 snap-start border-gray-300 border-2 hover:border-[#124559] hover:text-[#eff6e0] bg-[#AEC3B0] mt-16 p-4 font-bold text-#01161E hover:underline hover:bg-cyan-900 text-xl sm:text-base sm:mt-12 '>Más sobre mí</button></Link>
            {/* <button className=' duration-1000 ' onClick={sccrollDown}> <img className='flex ml-[40px] animate-bounce  mt-60 h-20 scroll-smooth ' src={arrow} alt='ícono flecha abajo para continuar'/></button> */}
          </div>
      </div>
    </div>
  )
}

export default Profile