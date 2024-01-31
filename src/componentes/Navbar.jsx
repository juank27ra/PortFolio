import React from 'react'
import pdfcv from '../assets/CV Juan Ramirez24.pdf'

const Navbar = () => {
  const scrollprojects = (e) => {
    return window.scrollTo(0, 800)
  }
  const scrollContact = (e) => {
    return window.scrollTo(976, 1752)
  }
  return (
    <div>
        <nav className='w-auto h-32 sm:h-auto bg-[#AEC3B0]  flex justify-between shadow-md shadow-[#01161E] p-10 md:w-auto lg:w-auto sm:flex sm:flex-col sm:gap-4 sm:items-center'>
          <a href={pdfcv} target='_blank'  className='text-xl font-bold  text-[#01161E] my-auto shadow-md p-4 shadow-[#01161E] hover:underline hover:text-[#598392] selection:text-[##598392] sm:w-[12rem] sm:flex sm:justify-end'> Ver/Descargar cv </a>
           <a className='text-xl font-bold  text-[#01161E] my-auto  hover:underline hover:text-[#598392] selection:text-[##598392]'> Sobre mí </a>  {/*href='/about'*/} 
          <button onClick={scrollprojects} className='text-xl font-bold  text-[#01161E] my-auto hover:underline hover:text-[#598392] selection:text-[##598392]'> Proyectos </button>
          <button onClick={scrollContact} className='text-xl font-bold  text-[#01161E] my-auto hover:underline hover:text-[#598392] selection:text-[##598392]'> Contácteme </button>
        </nav>
    </div>
  )
}

export default Navbar