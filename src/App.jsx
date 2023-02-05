import { useState } from 'react'
import imagPerfil from './assets/juan (1).png'
import html from './assets/html-5.svg'
import js from './assets/javascript.svg'
import mongodb from './assets/mongodb-icon.svg'
import node from './assets/nodejs.svg'
import express from './assets/express.svg'
import typescript from './assets/typescript-icon.svg'
import tailwindcss from './assets/tailwindcss-icon.svg'
import git from './assets/git-icon.svg'
import sequelize from './assets/sequelize.svg'
import redux from './assets/redux.svg'
import react from './assets/react (1).svg'
import postgres from './assets/postgresql.svg'
import arrow from './assets/downarrow_78496.svg'
import App2 from './App2'
import App3 from './App3'
import Footer from './Footer'
import './App.css'

function App() {


  return (
    //staá centrada la barra porque está dentro de un contenedor centrado
    <div >
    <div className='bg-slate-900 h-screen '>
    <div className='w-max '>
      <h3 className='text-6xl font-bold ml-40 text-white'> Developer Full Stack. </h3>
    </div>
      <div className='flex flex-row-2 gap-8 place-content-center justify-center items-center'>

        <img className='h-96 w-auto opacity- bg-transparent grayscale rounded-full hover:shadow-lg hover:shadow-blue-400 hover:grayscale-0' src={imagPerfil} alt='Imagen de perfil' />
          <div >
            <h1 className=' text-xl  text-white '>Hola!, Soy </h1>
            <h1 className=' text-6xl font-bold text-white '>Juan Carlos </h1>
            <h1 className=' text-6xl font-bold text-white mb-9'>Ramirez Pinilla</h1>
            {/* <h3 className='text-4xl  ml-20 text-white'> Developer Full Stack </h3> */}
            <p className='text-xl   mt-4 text-white'>Poca experienca pero mucho entusiasmo </p>
            <p className='text-xl   text-white'>pasos agigantados se demuestran </p>
            <p className='text-xl   text-white'>los resultados son mas que los esperados </p>
            <p className='text-xl   text-white'>bienvenido </p>
            <img className='flex justify-center mt-20 ml-32 h-20' src={arrow} alt='flecha abajo para continuar'/>
          </div>
        <div className='flex flex-col bg-gray-500 items-center w-20 gap-2'>
          <img className='h-10 w-10 mt-5' src={html} alt='icono html' />
          <img className='h-10 w-10' src={js} alt='icono js' />
          <img className='h-10 w-10' src={node} alt='icono js' />
          <img className='h-10 w-10' src={express} alt='icono js' />
          <img className='h-10 w-10' src={sequelize} alt='icono tailwindcss' />
          <img className='h-10 w-10' src={postgres} alt='icono postgres' />
          <img className='h-10 w-10' src={mongodb} alt='icono mongo' />
          <img className='h-10 w-10' src={typescript} alt='icono typescript' />
          <img className='h-10 w-10' src={react} alt='icono react' />
          <img className='h-10 w-10' src={redux} alt='icono redux' />
          <img className='h-10 w-10' src={tailwindcss} alt='icono tailwindcss' />
          <img className='h-10 w-10 mb-4' src={git} alt='icono postgres' />
        </div>
    </div>
        </div>
      <div className=''>
        <App3/>
      </div>
      <div className=''>
        <App2/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
