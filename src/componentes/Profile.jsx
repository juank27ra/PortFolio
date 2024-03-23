import React from 'react'
import imagPerfil from '../assets/Juan.jpg'
import { Link } from 'react-router-dom'

const Profile = () => {

  return (
    <>
      <div className='flex gap-20 justify-center items-center mx-10 w-auto sm:mx-5 sm:gap-4 h-auto sm:flex sm:flex-col'>
        <img className=' h-[26rem] xl:h-[18rem] md:h-[12rem] sm:h-[12rem] 2xl:h-[28rem] rounded-full w-auto bg-transparent ' src={imagPerfil} alt='Imagen de perfil' />
        <div className='mt-40 w-auto sm:w-auto sm:mt-10 sm:text-center'>
          <p className=' text-xl text-[#eff6e0] sm:text-base'>Hola!👋, Soy </p>
          <h1 className=' text-4xl font-bold text-[#eff6e0]  sm:text-2xl'>Juan Carlos </h1>
          <h1 className=' text-4xl font-bold text-[#eff6e0]  mb-9 sm:text-2xl'>Ramírez Pinilla</h1>
          <h3 className=' text-3xl font-semibold ml-20 sm:ml-0 text-[#39c8f7] sm:text-xl '> Developer Full Stack </h3>
          <p className='text-xl mt-4 text-[#eff6e0]  w-auto sm:text-base text-justify mr-8 sm:w-5/6 sm:mx-auto 2xl:w-[80%]'>Entusiasta de la tecnología y con disciplina en el aprendizaje me defino. Ver cómo se transforma el código visualmente y sentir la grandeza de lo que hago, me pone en una perspectiva de aprendizaje continuo para SER el mejor. </p>
          <br/>
          <p className='text-xl mt-4 text-[#eff6e0]  w-auto sm:text-base text-justify mr-8 sm:w-5/6 sm:mx-auto 2xl:w-[80%]'>Busco oportunidades para aplicar mi experiencia y habilidades en proyectos desafiantes como Desarrollador Frontend, donde pueda seguir creciendo y contribuyendo al éxito del equipo.. </p>
          <p className='text-2xl font-semibold mt-10 text-[#eff6e0]  sm:text-lg sm:items-center'>Bienvenidos. </p>
            <div className='flex items-start sm:flex sm:justify-center mb-24'>
              <Link to='about'><button className='flex duration-1000 snap-start border-[#39c8f7] border-2 rounded-xl bg-transparent mt-16 p-4 font-bold text-[#eff6e0] hover:bg-[#39c8f7] hover:text-[#01161E] transition-all translate-x-16 hover:border-[#eff6e0] text-xl sm:text-base sm:mt-12 '>Más sobre mí</button></Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile