import React from 'react'
import linkedIn from './assets/linkedin-icon.svg'
import github from './assets/github.svg'
import mail from './assets/google-gmail.svg'
import whatsapp from './assets/whatsapp-icon.svg'


export default function App2() {


  return (
    <div className='bg-gray-700 h-screen'>
      <div className='flex flex-col bg-cyan-900 items-center h-screen w-20 ml-40 gap-4'>
        <a href='https://www.linkedin.com/in/juan-carlos-ramirez-pinilla-a8518077/' target='_blanc'><img className='h-12 w-12 mt-56 hover:shadow-lg hover:shadow-blue-600' src={linkedIn} alt='imagen icono de linkedIn'/></a> 
        <a href='https://github.com/juank27ra' target='_blanc'><img className='h-12 w-12 hover:shadow-lg hover:shadow-gray-600' src={github} alt='imagen icono de github'/></a> 
        <a href='https://mail.google.com/mail/u/0/#inbox' target='_blanc'><img className='h-12 w-12 hover:shadow-lg hover:shadow-red-600' src={mail} alt='imagen icono de mail'/></a> 
        <a href='https://web.whatsapp.com/' target='_blanc'><img className='  after: h-12 w-12 hover:shadow-lg hover:shadow-green-600' src={whatsapp} alt='imagen icono de whatsap'/></a>  
      </div>
      <div>

      </div>
    </div>
  )
}
