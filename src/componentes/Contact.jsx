import {useState, useRef} from 'react'
import linkedIn from '../assets/linkedin-icon.svg'
import github from '../assets/github.svg'
import mail from '../assets/google-gmail.svg'
import whatsapp from '../assets/whatsapp-icon.svg'
import arrow_up from '../assets/arrow_up.svg'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef();
    const [input, setInput] = useState({
    name: '',
    email: '',
    text: ''
  })

  const sendEmail = (e) => {
    e.preventDefault();

    setInput({
      name: '',
      email: '',
      text: ''
    })
    emailjs.sendForm('service_9wag25i', 'template_gun8396', form.current, '9o3nVGCqSxFDzrRZq')
      .then((result) => {
          alert(result.text = "El mensaje fue enviado con exito");
      }, (error) => {
          console.log(error.text = "El mensaje no pudo ser enviado vuelva a intentarlo");
      });
  };

  const scrollZero = (e) => {
    return window.scrollTo(0, 0)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setInput({
        ...input,
        [name] : value
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
            <form ref={form} onSubmit={sendEmail}>
              <div >
              <div className='flex'>
                  <label className='text-white px-3'> Nombre </label>
                  <label className='text-white mx-60'>Email </label>
                  </div>
              <div className='flex justify-around'>
                <input
                  type='text'
                  name="user_name"
                  onChange={handleChange}
                  className='h-10 bg-gray-100 w-72 px-1 my-4 '
                  required
                />
                <input
                  type='email'
                  name="user_email"
                  onChange={handleChange}
                  className='h-10 bg-gray-100 w-72 px-1 my-4 '
                  required
                />
                </div>
                  <div className='flex'>
                  <label className='text-white px-3'> Mensaje </label>
                  </div>
                  <div className='flex justify-center'>
                    <textarea
                      name='message'
                      onChange={handleChange}
                      className='h-64 w-[37rem] bg-gray-100 px-1 mt-2'
                      required
                    />
                  </div>
              <div className='flex justify-center'>
                    <input
                      type='submit'
                      value='Send'
                      className='text-xl my-4 mx-2 bg-cyan-600 p-2 text-white cursor-pointer font-semibold border-2 rounded-md hover:bg-gray-400 hover:text-black hover:font-semibold px-20 duration-1000 snap-start border-black'
                    />
              </div>
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
