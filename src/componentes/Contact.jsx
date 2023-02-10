import {useState} from 'react'
import linkedIn from '../assets/linkedin-icon.svg'
import github from '../assets/github.svg'
import mail from '../assets/google-gmail.svg'
import whatsapp from '../assets/whatsapp-icon.svg'
import arrow_up from '../assets/arrow_up.svg'
// import { SMTPClient } from 'emailjs';

  // const client = new SMTPClient({
  //   user: 'user',
  //   password: 'password',
  //   host: 'smtp.your-email.com',
  //   ssl: true,
  // });
  
  // client.send(
  //   {
  //     text: 'i hope this works',
  //     from: 'you <username@your-email.com>',
  //     to: 'someone <someone@your-email.com>, another <another@your-email.com>',
  //     cc: 'else <else@your-email.com>',
  //     subject: 'testing emailjs',
  //   },
  //   (err, message) => {
  //     console.log(err || message);
  //   }
  // );

export default function Contact() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    text: ''
  })

  const scrollZero = (e) => {
    return window.scrollTo(0, 0)
  }
  const handleInput = (e) => {
    const {value, name} = e.target
    setInput({
      ...input, 
      [name] : value
    })
  }
  const handleSubmit = () => {
    e.preventDefault()
    client()
    alert('Mensaje enviado con exito')
    setInput({
      name: '',
      email: '',
      text: ''
    })
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
        <div >
        <div className='ml-[98%] mt-20 flex justify-center'>
          <h1 className='text-white text-center text-4xl font-semibold'>Contactame Aqui</h1>
          {/* <h1 className='text-white text-4xl font-semibold'>Aqui</h1> */}
        </div>
            <div className='border-2 ml-[50%] border-solid h-[31rem] w-[650px] mt-20 p-4'>
            <form >
              <div >
              <div className='flex'>
                  <p className='text-white px-3'> Nombre </p>
                  <p className='text-white mx-60'>Email </p>
                  </div>
              <div className='flex justify-around'>
                <input
                  type='text'
                  value={input.name}
                  name='name'
                  onChange={handleInput}
                  className='h-10 bg-gray-100 w-72 px-1 my-4 '
                  required
                />
                <input
                  type='email'
                  value={input.email}
                  name='email'
                  onChange={handleInput}
                  className='h-10 bg-gray-100 w-72 px-1 my-4 '
                  required
                />
                </div>
                  <div className='flex'>
                  <p className='text-white px-3'>  Mensaje </p>
                  </div>
                  <div className='flex justify-center'>
                    <input
                      type='textarea'
                      value={input.text}
                      name='text'
                      onChange={handleInput}
                      className='h-64 w-[37rem] bg-gray-100 px-1 mt-2'
                      required
                    />
                  </div>
              </div>
              <div className='flex justify-center'>
                <button type='submit' onClick={handleSubmit} className='text-xl my-4 mx-2 bg-cyan-600 p-2 text-white font-semibold border-2 rounded-md hover:bg-gray-400 hover:text-black hover:font-semibold px-20 duration-1000 snap-start border-black'>Enviar</button> 
              </div>
            </form> 
          </div>
         </div> 
        <div className='flex items-end ml-[45%] mb-4 '>
        <button className=' animate-pulse' onClick={scrollZero}><img className='flex justify-center mt-32 h-20' src={arrow_up} alt='flecha abajo para continuar'/></button>
        </div>
      </div>

    
  )
}
