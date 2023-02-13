import { useState } from 'react'
import imagPerfil from '../assets/Juan.png'
import html from '../assets/html-5.svg'
import js from '../assets/javascript.svg'
import mongodb from '../assets/mongodb-icon.svg'
import node from '../assets/nodejs.svg'
import express from '../assets/express.svg'
import typescript from '../assets/typescript-icon.svg'
import tailwindcss from '../assets/tailwindcss-icon.svg'
import git from '../assets/git-icon.svg'
import sequelize from '../assets/sequelize.svg'
import redux from '../assets/redux.svg'
import react from '../assets/react.svg'
import postgres from '../assets/postgresql.svg'
import arrow from '../assets/downarrow_78496.svg'
import Proyects from './Proyects'
import Contacts from './Contact'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {

  const sccrollDown = (e) => {
    return window.scrollTo(0, 970)
  }

  return (
    <div >
    <div className='bg-slate-900 h-screen '>
    <div className='w-max p-8 '>
      <h3 className='text-6xl font-bold ml-60 text-cyan-600  shadow-md shadow-orange-400 py-2 px-4'> Portfolio </h3>
    </div>
      <div className='flex flex-row-2 gap-8 place-content-center justify-center items-center'>
        <img className='h-[600px] w-auto opacity- bg-transparent grayscale rounded-full hover:shadow-lg hover:shadow-blue-400 hover:grayscale-0' src={imagPerfil} alt='Imagen de perfil' />
          <div className='mt-20'>
            <h1 className=' text-xl text-white '>Hola!👋, Soy </h1>
            <h1 className=' text-6xl font-bold text-white '>Juan Carlos </h1>
            <h1 className=' text-6xl font-bold text-white mb-9'>Ramírez Pinilla</h1>
            <h3 className='text-4xl  ml-20 text-white'> Developer Full Stack </h3>
            <p className='text-xl mt-4 text-white'>Entusiasta de la tecnología y con disciplina en el aprendizaje me defino.</p>
            <p className='text-xl text-white '>Ver cómo se transforma el código visualmente y sentir la </p>
            <p className='text-xl text-white'> grandeza de lo que hago, me pone en una perspectiva de aprendizaje continuo </p>
            <p className='text-xl text-white'> para SER el mejor. </p>
            <p className='text-3xl font-semibold mt-10 text-white'>Bienvenidos. </p>
              <div className='flex items-start'>
                <Link to='about'><button className='flex duration-1000 snap-start border-gray-300 border-x-2 hover:border-cyan-400 mt-16 p-4 font-bold text-white hover:underline bg-orange-500 hover:bg-cyan-900 ' onClick=''>Más sobre mi</button></Link>
                <button className=' duration-1000 ' onClick={sccrollDown}> <img className='flex ml-[40px] animate-bounce  mt-60 h-20 scroll-smooth ' src={arrow} alt='ícono flecha abajo para continuar'/></button>
              </div>
          </div>
        <div className='flex flex-col ml-20 shadow-md shadow-orange-400 bg-gray-500 items-center w-24 gap-2'>
          <img className='h-12 w-14 mt-5' src={html} alt='icono html' />
          <img className='h-12 w-14' src={js} alt='icono js' />
          <img className='h-12 w-14' src={node} alt='icono node' />
          <img className='h-12 w-14' src={express} alt='icono express' />
          <img className='h-12 w-14' src={sequelize} alt='icono sequelize' />
          <img className='h-12 w-14' src={postgres} alt='icono postgres' />
          <img className='h-12 w-14' src={mongodb} alt='icono mongo' />
          <img className='h-12 w-14' src={typescript} alt='icono typescript' />
          <img className='h-12 w-14' src={react} alt='icono react' />
          <img className='h-12 w-14' src={redux} alt='icono redux' />
          <img className='h-12 w-14' src={tailwindcss} alt='icono tailwindcss' />
          <img className='h-12 w-14 mb-4' src={git} alt='icono postgres' />
        </div>
    </div>
        </div>
      <div className=''>
        <Proyects/>
      </div>
      <div className=''>
        <Contacts/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
