import { useState } from 'react'
import imagPerfil from '../assets/Juan.jpg'
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
        <nav className='w-auto flex justify-between p-6 shadow-md mx-6 shadow-orange-400 py-2 px-4'>
          <h3 className='text-3xl font-bold  text-cyan-600  '> Portfolio </h3>
          <h3 className='text-xl font-bold  text-cyan-600 my-auto'> Descargar cv </h3>
          <h3 className='text-xl font-bold  text-cyan-600 my-auto'> Sobre mi </h3>
          <h3 className='text-xl font-bold  text-cyan-600 my-auto'> Contacteme </h3>
          <h3 className='text-xl font-bold  text-cyan-600 my-auto'> Proyectos </h3>
        </nav>
        <div className='flex flex-row-2 gap-8 place-content-center justify-center items-center'>
          <img className='h-[600px] w-auto opacity- bg-transparent grayscale rounded-xl hover:shadow-lg hover:shadow-blue-400 hover:grayscale-0' src={imagPerfil} alt='Imagen de perfil' />
            <div className='mt-20'>
              <p className=' text-xl text-white '>Hola!👋, Soy </p>
              <h1 className=' text-6xl font-bold text-white'>Juan Carlos </h1>
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
          <div className='flex flex-col relative top-16 ml-20 shadow-md shadow-orange-400 bg-gray-500 items-center w-24 gap-2'>
            <p className='text-cyan-400'>TECH SKILL</p>
            <img className='h-12 w-14 mt-5 hover:shadow-sm hover:shadow-white' src={html} alt='icono html'/><p className='text-cyan-400 hover:visible hover:text-3xl'>HTML</p>
            <img className='h-12 w-14' src={js} alt='icono js' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>JAVASCRIPT</p>
            <img className='h-12 w-14' src={node} alt='icono node' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>NODE</p>
            <img className='h-12 w-14' src={express} alt='icono express' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>EXPRESS</p>
            <img className='h-12 w-14' src={sequelize} alt='icono sequelize' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>SEQUELIZE</p>
            <img className='h-12 w-14' src={postgres} alt='icono postgres' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>POSTGRESQL</p>
            <img className='h-12 w-14' src={mongodb} alt='icono mongo' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>MONGODB</p>
            <img className='h-12 w-14' src={typescript} alt='icono typescript' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>TYPESCRIPT</p>
            <img className='h-12 w-14' src={react} alt='icono react' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>REACT</p>
            <img className='h-12 w-14' src={redux} alt='icono redux' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>REDUX</p>
            <img className='h-12 w-14' src={tailwindcss} alt='icono tailwindcss' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>TAILWINDCSS</p>
            <img className='h-12 w-14 mb-4' src={git} alt='icono GIT' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>GIT</p>
            <img className='h-12 w-14 mb-4' src={git} alt='icono vtec io' /> <p className='text-cyan-400 hover:visible hover:text-3xl'>VITEX IO</p>
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
