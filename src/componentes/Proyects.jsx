import comics from "../assets/comics.webp";
import videogames from "../assets/Mario.webp";
import codigo from "../assets/cod.jpg";
import tareas from "../assets/tareas.jpg";
import nappa from "../assets/plp en mobile.png";
import awaq from "../assets/awaq.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Skill from "./Skill";

export default function Proyects() {
  const projectsJson = [
    {
      img: awaq,
      alt: "",
      title: "AWAQ ONGD",
      description:
        "Estos proyectos responsivos fueron realizados para AWAQ ONGD, en calidad de colaborador como Desarrollador frontend y scrum Master. Mi participación estuvo enfocada en el desarrollo de la página principal o de inicio, el Footer, la implelmentacion de la API de google Maps entre otros. Como Scrum realizamos mejoras y nuevas implementaciones",
      metodology: "Metodología scrum",
      wayOfWorking: "Proyecto grupal front-end",
      codigo:
        "https://github.com/Awaq-Estaciones-Biologicas/somosawaq/tree/juandev",
      deploy: "https://www.somosawaq.org/",
      tecnologías: "React, Redux, Tailwindcss, Typescript",
    },
    {
      img: comics,
      alt: "Image of comics",
      title: "Ecomics",
      description:
        "Un Ecomerce de comics totalmente funcional con todos sus componente, incluye: autenticación, carrito de compras, pasarela de pago, creación y guardado en base de datos etc...",
      metodology: "Metodología scrum",
      wayOfWorking: "Proyecto grupal full Stack",
      codigo: "https://github.com/Dagoav/e-comics",
      deploy: "https://e-comics.vercel.app/",
      tecnologías:
        "Node, Express, Postgresql, Typescript, React, Redux, Bootstrap,",
    },
    // {
    //   img: nappa,
    //   alt: "",
    //   title: "Ecommerce Nappa",
    //   description:
    //     "Este proyecto fue realizado para itglobers, un ecommerce resposnsivo con su respectiva lista de productos, carrito de compras, pasarela de pagos, favoritos y otros componentes propios de un ecommerce.",
    //   metodology: "Metodología scrum",
    //   wayOfWorking: "Proyecto front-end",
    //   codigo: "https://github.com/juank27ra/store-theme-nappa",
    //   deploy: "",
    //   tecnologías: "Vtex.Io, React, Json, Css, Html, Md",
    // },
    {
      img: tareas,
      alt: "Image of todoList",
      title: "Tareas",
      description:
        "Crea, muestra, edita y elimina Tareas. adicionalmente se le puede colocar un tiempo estimado individual para cumplir cada tarea",
      metodology: "",
      wayOfWorking: "Proyecto Individual full Stack",
      codigo: "https://github.com/juank27ra/tasks-modelo-empresarial",
      deploy: "https://tasks-db68uv3on-juank27ra.vercel.app/",
      tecnologías: "Node, Express, MongoDb, React, Redux, css",
    },
    {
      img: videogames,
      alt: "Image of superMario",
      title: "Videogames",
      description:
        "Muestra de videojuegos, filtrado, busqueda, creación y guardado en base de Datos",
      metodology: "Metodología scrum",
      wayOfWorking: "Proyecto full Satck: ",
      codigo: "https://github.com/juank27ra/PI-VideoGames",
      deploy: "",
      tecnologías: "Node, Postgresql, Express, React, Redux, Css",
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
      tecnologías: "Node, Express, MongoDb, React, Redux, tailwindcss, Css.",
    },
  ];

  return (
    <div className="pt-[8rem] bg-gradient-to-tl from-[#3b757f] to-[#01161E] h-auto mb-10">
      <div className="flex justify-between mx-5 ">
        <h1 className="TextDouble text-8xl sm:text-4xl underline font-extrabold p-4 text-[#39c8f7] mx-auto z-9">
          Proyectos
        </h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[90%] max-w-5xl h-[32rem] mt-20 sm:mt-12 border-y-2 rounded-xl border-[#eff6e0] bg-gradient-to-tl from-[#3b757f] to-[#01161E]"
      >
        {projectsJson.map((element, index) => {
          return (
            <SwiperSlide key={index + "111a"}>
              <div className=" flex flex-row h-auto w-full object-fill p-8 items-center sm:px-2 -z-10">
                <div className="flex flex-col h-auto w-[43%] overflow-hidden">
                  <img
                    className=" w-auto rounded-2xl h-[25rem] md:h-[22rem] sm:h-[14rem] max-w-xs py-6 flex justify-center mx-auto object-fill px-10 md:px-5 sm:px-2"
                    src={element.img}
                    alt={element.alt}
                  />
                </div>
                <div
                  key={index + 1009}
                  className="flex flex-col w-[57%] px-10 lg:px-0 md:px-0 sm:px-0 mx-20 lg:mx-10 md:mx-5 sm:mx-2 text-justify align-middle justify-center h-auto sm:scroll-my-4"
                >
                  <h3 className="text-center py-6 mb-2 text-xl font-bold text-[#eff6e0]">
                    {element.title}
                  </h3>
                  <p className="mb-2 text-[#eff6e0] text-base md:text-sm sm:text-xs">
                    {element.description}
                  </p>
                  <p className="mb-2 text-[#eff6e0] text-base md:text-sm sm:text-xs">
                    {element.tecnologías}
                  </p>
                  <p className="mb-2 text-[#eff6e0] text-base md:text-sm sm:text-xs">
                    {element.wayOfWorking}
                  </p>
                  <p className="mb-2 text-[#eff6e0] text-base md:text-sm sm:text-xs">
                    {element.metodology}
                  </p>
                  <div className="flex gap-6">
                    <a
                      className=" justify-center"
                      href={element.codigo}
                      rel="noopener"
                      target="_blank"
                    >
                      <button className="duration-1000 snap-start transition-all mt-12 border-[#eff6e0] hover:border-[#39c8f7] rounded-xl text-[#39c8f7] hover:text-[#eff6e0] py-1 px-2 border-collapse border-y-2 text-base md:text-sm sm:text-xs sm:mt-4">
                        Código Fuente
                      </button>{" "}
                    </a>
                    <a
                      className=" justify-center"
                      href={element.deploy}
                      rel="noopener"
                      target="_blank"
                    >
                      <button className="duration-1000 snap-start transition-all  flex mt-12 py-1 px-2 border-[#eff6e0] hover:border-[#39c8f7] rounded-xl text-[#39c8f7] hover:text-[#eff6e0] border-collapse border-y-2 text-base md:text-sm sm:text-xs sm:mt-4">
                        {element.deploy ? "En vivo" : "Disebled"}
                      </button>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <Skill />
      </div>
    </div>
  );
}
