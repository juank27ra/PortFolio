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
    <div className='bg-gray-700 h-screen flex flex-row'>
      <div className=''>
        <section className='flex flex-col bg-cyan-900 items-center h-screen w-32 ml-20 gap-4'>
          <a href='https://www.linkedin.com/in/juan-carlos-ramirez-pinilla-a8518077/' target='_blanc'><img title='LinkedIn' className='h-12 w-12 mt-80 drop-shadow-2xl hover:shadow-blue-400 hover:h-20 hover:w-20' src={linkedIn} alt='imagen icono de linkedIn'/></a> 
          <a href='https://github.com/juank27ra' target='_blanc'><img title='Github' className='h-12 w-12  drop-shadow-lg hover:shadow-gray-300 hover:h-20 hover:w-20' src={github} alt='imagen icono de github'/></a> 
          <a href='mailto: juank27ra@gmail.com' target='_blanc'><img title='Gmail' className='h-12 w-12 drop-shadow-lg hover:shadow-red-600 hover:h-20 hover:w-20' src={mail} alt='imagen icono de mail'/></a> 
          <a href='https://wa.me/573224772180' target='_blanc'><img title='Whatsapp' className='  after: h-12 w-12 drop-shadow-lg hover:shadow-green-600 hover:h-20 hover:w-20' src={whatsapp} alt='imagen icono de whatsap'/></a>  
        </section>
      </div>
       <div className='flex flex-col mx-auto my-auto justify-center w-auto'>
          <h1 className='text-orange-500 text-center text-4xl font-semibold'>Contáctame Aqui</h1>
          <div className='border-2 border-solid border-orange-500 h-[31rem] w-[650px] mt-20 p-4'>
            <form ref={form} onSubmit={sendEmail}>
              <div >
              <div className='flex'>
                  <label className='text-orange-500 px-3'> Nombre </label>
                  <label className='text-orange-500 mx-60'>Email </label>
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
                  <label bel className='text-orange-500 px-3'> Mensaje </label>
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
                    value='Enviar'
                    className='text-xl my-4 mx-2 bg-cyan-800 p-2 text-orange-500 cursor-pointer font-semibold border-2 rounded-md hover:bg-gray-700 hover:text-cyan-500 hover:font-semibold px-20 duration-1000 snap-start border-black'
                  />
                </div>
              </div>
            </form> 
          </div>
         </div> 
        <div className='flex items-end mb-4 mr-4'>
        <button className=' animate-pulse' onClick={scrollZero}><img className='flex justify-center mt-32 h-20' src={arrow_up} alt='flecha abajo para continuar'/></button>
        </div>
      </div>

    
  )
}
