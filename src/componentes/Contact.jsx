import {useState, useRef} from 'react'
import linkedIn from '../assets/linkedin-icon.svg'
import Github from '../assets/github.svg'
import mail from '../assets/google-gmail.svg'
import whatsapp from '../assets/whatsapp-icon.svg'
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

  const handleChange = (e) => {
    const {name, value} = e.target
    setInput({
        ...input,
        [name] : value
    })
  }


  return (
    <div className='h-auto '>
    <div className='bg-gradient-to-tl from-[#3b757f] to-[#01161E] h-screen flex flex-row w-auto sm:flex-col sm:w-auto'>
        <section className=' absolut flex flex-col sm:flex-row sm:h-20 sm:w-[100%] sm:ml-0 justify-center bg-[#01161E] items-center h-full w-32 ml-20 gap-8 md:ml-14'>
          <a href='https://www.linkedin.com/in/juan-carlos-ramirez-pinilla-a8518077/' target='_blanc'><img title='LinkedIn' className='h-12 w-12 sm:h-9 sm:w-9 drop-shadow-2xl hover:shadow-blue-400 hover:h-20 hover:w-20 sm:hover:h-16 sm:hover:w-16' src={linkedIn} alt='icono de linkedIn'/></a> 
          <a href='https://github.com/juank27ra' target='_blanc'><img title='Github' className='h-12 w-12 sm:h-9 sm:w-9  drop-shadow-lg hover:shadow-gray-300 hover:h-20 hover:w-20 sm:hover:h-16 sm:hover:w-16' src={Github} alt='icono de github'/></a> 
          <a href='mailto: juank27ra@gmail.com' target='_blanc'><img title='Gmail' className='h-12 w-12 sm:h-9 sm:w-9 drop-shadow-lg hover:shadow-red-600 hover:h-20 hover:w-20 sm:hover:h-16 sm:hover:w-16' src={mail} alt='icono de mail'/></a> 
          <a href='https://wa.me/573224772180' target='_blanc'><img title='Whatsapp' className='h-12 w-12 sm:h-9 sm:w-9 drop-shadow-lg hover:shadow-green-600 hover:h-20 hover:w-20 sm:hover:h-16 sm:hover:w-16' src={whatsapp} alt='icono de whatsap'/></a>  
        </section>
        <div className='flex flex-col mx-auto w-[90%]'>
          <div className='flex justify-between mx-auto w-[100%]'>
            <h1 className='animate__animated animate__bounce TextDouble text-8xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold underline p-4 text-[#eff6e0] mx-auto z-9'>Contáctame</h1>
          </div>
          <div className='border-4 border-double border-[#eff6e0] h-auto max-w-[40rem] mx-auto mt-20 sm:m-auto p-4 lg:w-[32rem] md:w-[24rem] sm:w-[20rem] sm:max-w-[24rem] '>
             <form ref={form} onSubmit={sendEmail}>
              <div >
                <div className='flex flex-row w-auto object-fill gap-10 sm:gap-3'>
                  <label className='w-1/2 text-[#eff6e0] font-bold '>Nombre </label>
                  <label className='w-1/2 text-[#eff6e0] font-bold '>Email </label>
                </div>
             <div className='flex justify-around gap-10 sm:gap-3'>
                <input
                  id='imput'
                  type='text'
                  name="user_name"
                  onChange={handleChange}
                  input={input.user_name}
                  className={`h-10 bg-[#eff6e0] w-1/2 px-1 my-4 uppercase  ${input.user_name ? 'inputVacio': 'inputLleno'}  inputfocus`} //aqui hay tres estados del input 
                  required
                  placeholder='  Pepito Perez'
                />
                <input
                  id='imput'
                  type='email'
                  name="user_email"
                  onChange={handleChange}
                  input={input.user_email}
                  className={input.user_email ? 'focus:border-2 focus:blue-500 h-10 bg-[#eff6e0] w-1/2 px-1 my-4 uppercase inputVacio': 'h-10 bg-[#eff6e0] w-1/2 px-1 my-4 uppercase inputLleno'}
                  required
                  placeholder='  pepitopz2024@correo.com'
                />
                </div>

                <div className='flex'>
                  <label className='text-[#eff6e0] font-bold'> Mensaje </label>
                </div>
                <div className='flex justify-center'>
                  <textarea 
                    id='imput'
                    name='text'
                    onChange={handleChange}
                    input={input.text}
                    className={ input.text ? "h-64 w-[37rem] sm:h-52 bg-[#eff6e0] px-1 mt-2 text-2xl md:text-xl sm:text-lg uppercase inputborder inputVacio" : "h-64 w-[37rem] sm:h-52 bg-[#eff6e0] px-1 mt-2  text-2xl md:text-xl sm:text-lg uppercase inputLleno"}
                    required
                    placeholder='Mensaje.... '
                  />
                </div>
                <div className='flex justify-center'>
                  <button
                    type='submit'
                    value='Enviar'
                    className='text-xl h-10 my-4 mx-2 bg-[#124559] text-[#eff6e0] cursor-pointer font-semibold border-2 border-[#eff6e0] rounded-md hover:bg-[#eff6e0] hover:text-[#124559] hover:font-semibold px-20 duration-1000 snap-start hover:text-2xl sm:w-20 sm:justify-center sm:flex  '
                    >
                    Enviar
                  </button>
                </div>
              </div>
            </form>  
          </div>
        </div> 
      </div>
    </div>
    
  )
}
