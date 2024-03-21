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
import Skill from './Skill'

export default function Proyects() {


  const projectsJson = [
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
      img: comics,
      alt: "Image of comics",
      title: "Ecomics",
      description: "Ecomerce de comics incluye autenticación pasarela de pago, creacion y guardado en base de datos etc...",
      metodology: "Metodología scrum",
      wayOfWorking: "Proyecto grupal full Stack",
      codigo: "https://github.com/Dagoav/e-comics",
      deploy: "https://e-comics.vercel.app/",
      tecnologías: "Node, Express, Postgressql, TypeScript, React, Redux, Bootstrap,"
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
    <div className='bg-gradient-to-tl from-[#3b757f] to-[#01161E] h-auto mb-10'>
      <div className='flex justify-between mx-5 '>
        <h1 className='TextDouble text-8xl sm:text-4xl underline font-extrabold p-4 text-[#39c8f7] mx-auto z-9'>Proyectos</h1>
      </div>
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
        className="mySwiper w-[90%] max-w-5xl h-[32rem] mt-20 sm:mt-12 border-4 border-double border-[#eff6e0] bg-gradient-to-tl from-[#3b757f] to-[#01161E]"
      >
      {
        projectsJson.map((element, index) => {
          return (
            <SwiperSlide>
            <div className=' flex flex-row h-auto w-full object-fill p-8 items-center sm:px-2'>
              <div className='flex flex-col h-auto w-1/2 overflow-hidden'>
                <img className=' w-auto h-[25rem] md:h-[22rem] sm:h-[14rem] max-w-xs py-6 flex justify-center mx-auto rounded-lg object-fill px-10 md:px-5 sm:px-2' src={element.img} key={index + 1} alt={element.alt}/>
              </div>
              <div key={index + 1009 } className='flex flex-col w-1/2 px-10 lg:px-0 md:px-0 sm:px-0 mx-20 lg:mx-10 md:mx-5 sm:mx-2 text-justify align-middle justify-center h-auto sm:scroll-my-4'>
                <h3 className='text-center py-6 mb-2 text-xl font-bold text-[#eff6e0]'>{element.title}</h3>
                <p className='mb-2 text-[#eff6e0] text-base md:text-sm sm:text-xs'>{element.description}</p>
                <p className='mb-2 text-[#eff6e0] text-base md:text-sm sm:text-xs'>{element.tecnologías}</p>
                <p className='mb-2 text-[#eff6e0] text-base md:text-sm sm:text-xs'>{element.wayOfWorking}</p>
                <p className='mb-2 text-[#eff6e0] text-base md:text-sm sm:text-xs'>{element.metodology}</p>
                <div className='flex gap-6'>
                <a className=' justify-center' href={element.codigo} target='_blank'><button className='  mt-12 rounded-md bg-[#eff6e0] py-1 px-2 hover:bg-[#598392] border-collapse border-2 hover:text-[#eff6e0] text-base md:text-sm sm:text-xs sm:mt-4'>Código Fuente</button> </a>  
                <a className=' justify-center' href={element.deploy} target='_blank'><button className=' flex mt-12 rounded-md bg-[#eff6e0] py-1 px-2 hover:bg-[#598392] border-collapse border-2 hover:text-[#eff6e0] text-base md:text-sm sm:text-xs sm:mt-4'>{element.deploy? "En vivo" : "Disebled"}</button> </a>
                </div>
              </div>
            </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    <div >
      <Skill/>
    </div>
  </div>
  )
}


