import React from 'react'
import linkedIn from './assets/linkedin-icon.svg'
import github from './assets/github.svg'
import mail from './assets/google-gmail.svg'
import whatsapp from './assets/whatsapp-icon.svg'
import arrow_up from './assets/arrow_up.svg'


export default function Contact() {

  const scrollZero = (e) => {
    return window.scrollTo(0, 0)
  }

  return (
    <div className='bg-gray-700 h-screen flex'>
      <div className='flex'>
        <div className='flex flex-col bg-cyan-900 items-center h-screen w-32 ml-40 gap-4'>
          <a href='https://www.linkedin.com/in/juan-carlos-ramirez-pinilla-a8518077/' target='_blanc'><img className='h-12 w-12 mt-80 hover:shadow-lg hover:shadow-blue-400 hover:h-20 hover:w-20' src={linkedIn} alt='imagen icono de linkedIn'/></a> 
          <a href='https://github.com/juank27ra' target='_blanc'><img className='h-12 w-12 hover:shadow-lg hover:shadow-gray-300 hover:h-20 hover:w-20' src={github} alt='imagen icono de github'/></a> 
          <a href='https://mail.google.com/mail/u/0/#inbox' target='_blanc'><img className='h-12 w-12 hover:shadow-lg hover:shadow-red-600 hover:h-20 hover:w-20' src={mail} alt='imagen icono de mail'/></a> 
          <a href='https://web.whatsapp.com/' target='_blanc'><img className='  after: h-12 w-12 hover:shadow-lg hover:shadow-green-600 hover:h-20 hover:w-20' src={whatsapp} alt='imagen icono de whatsap'/></a>  
        </div>
      </div>
        <div className=' flex items-end'>
          <h1 className='text-white text-4xl font-semibold'>Contactame</h1>
          <h1 className='text-white text-4xl font-semibold'>Aqui</h1>
        </div>
          <form className='h-[46rem] w-[600px] bg-white'>
            <div className='flex justify-center'>
              <input
                type='text'
                value=''
                placeholder=''
                onChange=''
                className='h-[40rem] w-[300px] bg-white'
                required
              />
              <button  type='submit' className='text-3xl border border-black'>Enviar</button> 
            </div>
          </form>
        <div className='flex items-end mb-10 ml-[58rem] '>
        <button className='' onClick={scrollZero}><img className='flex justify-center mt-32 h-20' src={arrow_up} alt='flecha abajo para continuar'/></button>
        </div>
      </div>

    
  )
}

{/* <div className='bg-gray-700 h-screen'>
<div className='flex flex-auto '>
  <div className='flex flex-col bg-cyan-900 items-center h-screen w-20 ml-40 gap-4'>
    <a href='https://www.linkedin.com/in/juan-carlos-ramirez-pinilla-a8518077/' target='_blanc'><img className='h-12 w-12 mt-80 hover:shadow-lg hover:shadow-blue-400 hover:h-20 hover:w-20' src={linkedIn} alt='imagen icono de linkedIn'/></a> 
    <a href='https://github.com/juank27ra' target='_blanc'><img className='h-12 w-12 hover:shadow-lg hover:shadow-gray-300 hover:h-20 hover:w-20' src={github} alt='imagen icono de github'/></a> 
    <a href='https://mail.google.com/mail/u/0/#inbox' target='_blanc'><img className='h-12 w-12 hover:shadow-lg hover:shadow-red-600 hover:h-20 hover:w-20' src={mail} alt='imagen icono de mail'/></a> 
    <a href='https://web.whatsapp.com/' target='_blanc'><img className='  after: h-12 w-12 hover:shadow-lg hover:shadow-green-600 hover:h-20 hover:w-20' src={whatsapp} alt='imagen icono de whatsap'/></a>  
  </div>
  <div>
    <h1>Hola mundo</h1>
  </div>
  <div className='flex  items-end ml-[90rem]'>
  <button className=' bg-scroll scroll-mx-96' onClick={scrollZero}><img className='flex justify-center mt-32 h-20' src={arrow} alt='flecha abajo para continuar'/></button>
  </div>
</div>
</div> */}