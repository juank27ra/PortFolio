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
          window.location.reload(false)
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
    <div className='bg-[#598392] h-screen flex flex-row w-auto'>
      <div className='h-auto'>
        <section className=' absolut flex flex-col justify-center bg-[#124559] items-center h-full w-32 ml-20 gap-8 sm:w-16 md:ml-14 sm:ml-[30%]'>
          <a href='https://www.linkedin.com/in/juan-carlos-ramirez-pinilla-a8518077/' target='_blanc'><img title='LinkedIn' className='h-12 w-12 sm:h-9 sm:w-9 drop-shadow-2xl hover:shadow-blue-400 hover:h-20 hover:w-20 sm:hover:h-16 sm:hover:w-16' src={linkedIn} alt='icono de linkedIn'/></a> 
          <a href='https://github.com/juank27ra' target='_blanc'><img title='Github' className='h-12 w-12 sm:h-9 sm:w-9  drop-shadow-lg hover:shadow-gray-300 hover:h-20 hover:w-20 sm:hover:h-16 sm:hover:w-16' src={github} alt='icono de github'/></a> 
          <a href='mailto: juank27ra@gmail.com' target='_blanc'><img title='Gmail' className='h-12 w-12 sm:h-9 sm:w-9 drop-shadow-lg hover:shadow-red-600 hover:h-20 hover:w-20 sm:hover:h-16 sm:hover:w-16' src={mail} alt='icono de mail'/></a> 
          <a href='https://wa.me/573224772180' target='_blanc'><img title='Whatsapp' className='h-12 w-12 sm:h-9 sm:w-9 drop-shadow-lg hover:shadow-green-600 hover:h-20 hover:w-20 sm:hover:h-16 sm:hover:w-16' src={whatsapp} alt='icono de whatsap'/></a>  
        </section>
      </div>

       <div className='flex flex-col m-auto w-auto'>
          <h1 className='text-[#eff6e0] text-center text-4xl font-semibold sm:text-2xl sm:flex sm:justify-center'>Contáctame Aquí</h1>
          <div className='border-4 border-double border-[#124559] h-auto max-w-[40rem] mx-auto mt-20 sm:mx-2 p-4 lg:w-[32rem] md:w-[24rem] sm:w-[12rem] '>
             <form ref={form} onSubmit={sendEmail}>
              <div >
                <div className='flex flex-row w-auto object-fill gap-10 sm:gap-3'>
                  <label className='w-1/2 text-[#eff6e0] '>Nombre </label>
                  <label className='w-1/2 text-[#eff6e0] '>Email </label>
                </div>
             <div className='flex justify-around gap-10 sm:gap-3'>
                <input
                  type='text'
                  name="user_name"
                  onChange={handleChange}
                  className='h-10 bg-gray-100 w-1/2 px-1 my-4 '
                  required
                  placeholder='  Pepito Perez'
                />
                <input
                  type='email'
                  name="user_email"
                  onChange={handleChange}
                  className='h-10 bg-gray-100 w-1/2 px-1 my-4 '
                  required
                  placeholder='  pepitoperez2024@correo.com'
                />
                </div>

                <div className='flex'>
                  <label className='text-[#eff6e0]'> Mensaje </label>
                </div>
                <div className='flex justify-center'>
                  <textarea
                    name='message'
                    onChange={handleChange}
                    className='h-64 w-[37rem] bg-gray-100 px-1 mt-2'
                    required
                    placeholder='Mensaje....'
                  />
                </div>
                <div className='flex justify-center'>
                  <button
                    type='submit'
                    value='Enviar'
                    className='text-xl h-10 my-4 mx-2 bg-[#124559] text-[#eff6e0] cursor-pointer font-semibold border-2 rounded-md hover:bg-gray-100 hover:text-[#124559] hover:font-semibold px-20 duration-1000 snap-start border-[#124559] hover:text-2xl sm:w-20 sm:justify-center sm:flex  '
                    >
                    Enviar
                  </button>
                </div>
              </div>
            </form>  
          </div>
         </div> 
        {/* <div className='flex items-end mb-4 mr-4'>
          <button className=' animate-pulse' onClick={scrollZero}><img className='flex justify-center mt-32 h-20 ' src={arrow_up} alt='flecha abajo para continuar'/></button>
        </div> */}
      </div>

    
  )
}
