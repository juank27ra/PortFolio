
import arrow from '../assets/arrow_down.png'
import comics from '../assets/comics.webp'
import videogames from '../assets/Mario.webp'
import codigo from '../assets/cod.jpg'
import tareas from '../assets/tareas.jpg'
import nappa from '../assets/plp en mobile.png'
import awaq from '../assets/awaq.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Proyects() {

  const sccrollDown = (e) => {
    return window.scrollTo(0, 1940)
  }

  const projectsJson = [
    {
      img: comics,
      alt: "Image of comics",
      title: "Ecomics",
      description: "Ecomerce de comics incluye autenticación pasarela de pago creacion y guardado en base de datos etc...",
      metodology: "Metodología scrum",
      wayOfWorking: "Proyecto grupal full Stack",
      codigo: "https://github.com/Dagoav/e-comics",
      deploy: "https://e-comics.vercel.app/",
      tecnologías: "Node, Express, Postgressql, TypeScript, React, Redux, Bootstrap,"
    },
    {
      img: tareas,
      alt: "Image of todoList",
      title: "Tareas",
      description: "Crea, muestra, edita y elimina Tareas. adicionalmente se le puede colocar un tiempo estimado individual para cumplir cada tarea",
      metodology: "",
      wayOfWorking: "Proyecto Individual full Stack",
      codigo: "https://github.com/juank27ra/tasks-modelo-empresarial",
      deploy: "https://tasks-db68uv3on-juank27ra.vercel.app/",
      tecnologías: "Node, Express, MongoDb, React, Redux, css"
    },
    {
      img: videogames,
      alt: "Image of superMario",
      title: "Videogames",
      description: "Muestra de videojuegos, filtrado, busqueda, creacion y guardado en base de Datos",
      metodology: "Metodología scrum",
      wayOfWorking: "Proyecto full Satck: ",
      codigo: "https://github.com/juank27ra/PI-VideoGames",
      deploy: "",
      tecnologías: "Node, Postgressql, Express, React, Redux, Css"
    },
    {
      img: nappa,
      alt: "",
      title: "Ecommerce Nappa",
      description: "Este proyecto fue realizado para itglobers, un ecommerce resposnsivo con su respectiva lista de productos, carrito de compras, pasarela de pagos, favoritos y otros componentes propios de un ecommerce.",
      metodology: "Metodología scrum",
      wayOfWorking: "Proyecto front-end",
      codigo: "https://github.com/juank27ra/store-theme-nappa",
      deploy: "",
      tecnologías: "Vtex.Io, React, Json, Css, Html, Md"
    },
    {
      img: awaq,
      alt: "",
      title: "AWAQ ONGD",
      description: "Este proyecto responsivo fue realizado para AWAQ ONGD, en calidad de colaborador como Desarrollador fronted. Mi participacion estuvo enfocada en el Home y el Footer",
      metodology: "Metodología scrum",
      wayOfWorking: "Proyecto grupal front-end",
      codigo: "https://github.com/Awaq-Estaciones-Biologicas/somosawaq/tree/juandev",
      deploy: "https://www.somosawaq.org/",
      tecnologías: "React, Redux, Tailwindcss, Typescript"
    },
    {
      img: codigo,
      alt: "",
      title: "Otros Proyectos",
      description: "Proyectos full Stack, solo front y maquetado",
      metodology: "",
      wayOfWorking: "Proyectos individuales",
      codigo: "https://github.com/juank27ra?tab=repositories",
      deploy: "",
      tecnologías: "Node, Express, MongoDb, React, Redux, tailwindcss, Css."
    },
  ]

  return (
    <>
    <div className='text-[#01161E] mySwiper text-4xl text-center mt-10 font-bold '>Proyectos</div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper  w-[90%] max-w-5xl h-[32rem] mt-20 sm:mt-12 border-4 border-double border-[#01161e]"
      >
      {
        projectsJson.map((element, index) => {
          return (
            <SwiperSlide>
            <div className='flex flex-row h-auto w-full bg-[#AEC3B0] object-fill p-8 items-center'>
              <div className='flex flex-col h-auto w-1/2 overflow-hidden'>
                {/* <h1 className='text-center py-6 text-xl font-bold text-[#01161E]'>{element.title}</h1> */}
                <img className=' w-auto h-[25rem] md:h-[22rem] sm:h-[18rem] max-w-xs py-6 flex justify-center mx-auto rounded-lg object-fill px-10 md:px-5 sm:px-2' src={element.img} key={index + 1} alt={element.alt}/>
              </div>
              <div className='flex flex-col w-1/2 px-10 lg:px-0 md:px-0 sm:px-0 mx-20 lg:mx-10 md:mx-5 sm:mx-2 text-justify align-middle justify-center h-auto'>
                <h1 className='text-center py-6 mb-2 text-xl font-bold text-[#01161E]'>{element.title}</h1>
                <p className='mb-2 text-base md:text-sm sm:text-xs'>{element.description}</p>
                <p className='mb-2 text-base md:text-sm sm:text-xs'>{element.tecnologías}</p>
                <p className='mb-2 text-base md:text-sm sm:text-xs'>{element.wayOfWorking}</p>
                <p className='mb-2 text-base md:text-sm sm:text-xs'>{element.metodology}</p>
                <a className='flex justify-center' href={element.codigo} target='_blank'><button className=' flex mt-12 rounded-md bg-[#eff6e0] py-1 px-2 hover:bg-[#598392] border-collapse border-2 hover:text-[#eff6e0] text-base md:text-sm sm:text-xs'>Código Fuente</button> </a>  
                <a className='flex justify-center' href={element.deploy} target='_blank'><button className=' flex mt-4 rounded-md bg-[#eff6e0] py-1 px-2 hover:bg-[#598392] border-collapse border-2 hover:text-[#eff6e0] text-base md:text-sm sm:text-xs'>{element.deploy? "En vivo" : "Disebled"}</button> </a>
              </div>
            </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  </>
  )
}


{/* <div className='bg-white h-auto shadow-md shadow-[#01161E] py-20'>
<div className='w-auto py-8'>
 <h1 className='text-[#01161E] font-serif text-4xl p-14 w-auto text-center font-bold'>Proyectos</h1>
</div>
 <div className='flex flex-row justify-between overflow-hidden items-center w-auto mx-10 gap-3'>
  <div className='flex items-center justify-center bg-slate-300'>
    <div className='group h-[32rem] w-56 [perspective:1000ox]'>
      <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        <div className='absolute insert-0'>
          <img className='h-[450px] w-full rounded-xl object-cover shadow-xl shadow-black/40' src={comics} alt='imagen' />
            <p className='text-center mt-2 text-xl font-bold text-blue-900'>Ecomics</p>
        </div>
        <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <div className='flex h-min-full flex-col items-center justify-center ' >
          <h1 className='text-xl font-bold my-8 text-cyan-600'> Proyecto grupal full Satck:</h1>
          <br/>
          <p className='text-sm'>metodología scrum </p>
          <p className='text-base'> Ecomerce de comics incluye autenticación pasarela de pago creacion y guardado en base de datos etc</p>
          <a href='https://e-comics.vercel.app/' target='_blank'><button className='mt-16 rounded-md bg-cyan-600 py-1 px-2 text-sm hover:bg-slate-800'>En vivo</button> </a>
          <a href='https://github.com/Dagoav/e-comics' target='_blank'><button className='mt-2 rounded-md bg-orange-600 py-1 px-2 text-sm hover:bg-slate-800'>Código Fuente</button> </a> 
          </div>
        </div>
      </div>
    </div>
  </div> */}
          
 {/*</div>
  <div className='flex items-center justify-center'>
    <button onClick={sccrollDown}><img className='flex justify-center mt-40 animate-bounce h-20' src={arrow} alt='flecha abajo para continuar'/></button>
 </div> 
</div>*/}