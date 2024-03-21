import React from 'react'
import pdfcv from '../assets/CV Juan Ramirez24.pdf'
import { FaHouse } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='w-[100%] h-24 sm:h-auto bg-[#01161E] border-b-2 border-[#eff6e0] flex justify-between shadow-md shadow-[#eff6e0] px-10 sm:py-10 sm:px-0 md:w-auto lg:w-auto sm:flex sm:flex-col sm:gap-4 sm:items-center'>
        <Link to={'/'}  className=' p-4'>{<FaHouse className='h-12 w-12 fill-[#eff6e0] my-auto hover:scale-125 hover:fill-[#39c8f7]'/>}</Link> 
          <a href='/about' className=' z-10 text-xl md:text-lg font-bold  text-[#eff6e0] my-auto  hover:underline hover:text-[#39c8f7] hover:scale-125 md:hover:scale-110 selection:text-[##39c8f7]'> Sobre mí </a>  
          <a href='/proyects' className=' z-10 text-xl md:text-lg font-bold  text-[#eff6e0] my-auto  hover:underline hover:text-[#39c8f7] hover:scale-125 md:hover:scale-110 selection:text-[##39c8f7]'> Proyectos </a>  
          <a href='/contact' className=' z-10 text-xl md:text-lg font-bold  text-[#eff6e0] my-auto  hover:underline hover:text-[#39c8f7] hover:scale-125 md:hover:scale-110 selection:text-[##39c8f7]'> Contácteme </a>  
        <a href={pdfcv} target='_blank'  className=' z-10 text-xl md:text-lg font-bold  text-[#eff6e0] my-auto shadow-md p-4 shadow-[#eff6e0] hover:underline hover:text-[#39c8f7] selection:text-[##39c8f7] sm:w-[12rem] sm:flex sm:justify-end'> Ver/Descargar cv </a>
      </nav>
    </div>
  )
}

export default Navbar