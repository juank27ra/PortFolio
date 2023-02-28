import { Link } from 'react-router-dom'
import back from '../assets/back.svg'

export default function 
() {
  return (
    <div className='bg-slate-900 h-screen'>
    <h1 className='text-4xl font-bold p-10 text-orange-400'>Mas sobre mi...</h1>
    <Link to={'/'}  className='flex justify-end mr-4 mb-4'><img src={back} alt='simbolo de regresar'/></Link> 
      <div className='flex justify-evenly py-24 bg-slate-800'>
        <div className=' bg-slate-400/60  rounded-lg hover:shadow-xl hover:shadow-cyan-500  h-[34rem] w-96 border-double border-4 border-cyan-400 text-center'>
        <h1 className='text-4xl text-cyan-500 font-semibold uppercase mt-8 p-4'>Certificaciones</h1>
          <div className='my-16 mx-4  text-white text-xl'>
          <div><p className='m-4 p-2'>✔️ Desarrollador full stack</p> <p></p></div> 
            <p className='m-4 p-2'>✔️ Scrum Fundamental Certified</p>
            <p className='m-4 p-2'> ✔️ Y un logro de Microsoft:Compilaciones de aplicaciones Javascript con typescript</p>
          </div>
        </div>
        <div className=' bg-slate-400/60 rounded-lg hover:shadow-xl hover:shadow-orange-500   h-[34rem] w-96 border-double border-4 border-orange-400 text-center'>
        <h1 className='text-4xl text-orange-500 font-semibold uppercase mt-10 px-4'>Aficciones</h1>
          <div className='my-24 mx-4  text-white text-xl p-3 '>
            <p className=''>Lo que me apasionan y puedo decir que se me pasa el tiempo volando </p>
            <p className=''>es Programando y leyendo libros de crecimiento personal, y por supuesto aprendiendo nuevas cosas en un campo tan grande como lo es el desarrollo web. </p>
            <p clasname=''>Me gusta y en la medida que puedo práctico el deporte y la musica</p>
          </div>
        </div>
        <div className=' bg-slate-400/60 rounded-lg hover:shadow-xl hover:shadow-cyan-500  h-[34rem] w-96 border-double border-4 border-cyan-400 text-center'>
        <h1 className='text-4xl text-cyan-500 font-semibold uppercase mt-8 px-4'>Experiencia Laboral</h1>
          <div className='my-12 mx-4  text-white text-xl'>
            <p className=''> Toda mi experiencia laboral fue entorno a ventas y servicio al cliente. He trabajo en equipo y de forma individual respondiendo siempre de manera eficaz</p>
            <p>En el Campo de la tecnología llevo Año y medio donde pude certificarme como developer full stack y donde he realizado proyectos individuales y uno grupal utilizando metodología scrum y aspirando a encontrar mi primera experiencia laboral IT</p>
          </div>
        </div>
        {/* <div className=' bg-slate-400/60 rounded-lg hover:shadow-xl hover:shadow-orange-500  h-[34rem] w-96 border-double border-4 border-orange-400 text-center'>
        <h1 className='text-4xl text-orange-500 font-semibold uppercase mt-8 px-4'>porqué contratarme?</h1>
          <div className='my-20 mx-4  text-white text-xl'>
            <p className='m-4 p-2'> ✔️ Me gusta aprender</p>
            <p className='m-4 p-2'> ✔️ Los propósitos del lugar donde trabajo también son los míos</p>
            <p className='m-4 p-2'> ✔️ Aprecio trabajar tanto individual como grupalmente donde lograr los objetivos es lo máximo</p>
            {/* <p className='m-4 p-2'> ✔️ </p> 
          </div>
        </div> */}
      </div>
    </div>
  )
}
