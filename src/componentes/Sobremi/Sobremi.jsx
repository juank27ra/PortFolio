import { useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { ImHeadphones } from "react-icons/im";
import { GiCampCookingPot, GiNotebook, GiWhiteBook } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa6";
import { IoMdBasketball } from "react-icons/io";
import CertColbAwaq from "../../assets/CertColbAwaq.pdf";

export default function () {
  const [activeTab, setactiveTab] = useState(0);
  const seleccionar = (index) => {
    setactiveTab(index);
  };

  return (
    <div className="pt-[8rem] bg-gradient-to-tl from-[#3b757f] to-[#01161E] min-h-[105rem] h-[100vh] 2xl:h-auto xl:h-auto lg:h-auto md:h-auto sm:h-auto">
      <div className="flex justify-between mx-5">
        <h1 className="TextDouble text-8xl sm:text-4xl font-extrabold underline p-4 text-[#eff6e0] mx-auto z-9">
          Sobre mí
        </h1>
      </div>
      <div className="flex justify-evenly pb-24">
        <section className=" md:mx-6 sm:mx-3 h-auto w-[80%]">
          <ul className="tabs flex text-2xl justify-center whitespace-nowrap gap-4 cursor-pointer w-[100%] md:whitespace-normal  md:text-sm md:text-center md:hover:text-sm sm:text-sm sm:w-auto sm:whitespace-normal ">
            <li
              className={
                activeTab == 0
                  ? "active md:whitespace-normal xl:whitespace-normal lg:whitespace-normal sm:md:whitespace-normal font-bold w-[20%] text-center justify-center"
                  : "w-[20%]  whitespace-pre-line text-center text-[#eff6e0]"
              }
              onClick={() => seleccionar(0)}
            >
              <p className="h-20 hover:font-bold text-center md:text-base sm:text-sm">
                Información Personal
              </p>
            </li>
            <li
              className={
                activeTab == 1
                  ? "active md:whitespace-normal sm:ml-2  lg:md:whitespace-normal sm:md:whitespace-normal font-bold w-[20%] text-center"
                  : " sm:ml-2 w-[20%] text-center whitespace-pre-line text-[#eff6e0]"
              }
              onClick={() => seleccionar(1)}
            >
              <p className="h-20 hover:font-bold text-center md:text-base sm:text-sm sm:ml-2  ">
                Servicios
              </p>
            </li>
            <li
              className={
                activeTab == 2
                  ? "active whitespace-normal md:whitespace-normal lg:md:whitespace-normal sm:md:whitespace-normal font-bold w-[20%] text-center"
                  : "w-[20%] text-center whitespace-pre-line text-[#eff6e0]"
              }
              onClick={() => seleccionar(2)}
            >
              <p className="h-20 hover:font-bold text-center md:text-base sm:text-sm hover:whitespace-normal">
                Educación Certificada
              </p>
            </li>
            <li
              className={
                activeTab == 3
                  ? "active md:whitespace-normal lg:md:whitespace-normal sm:md:whitespace-normal  font-bold w-[20%] text-center"
                  : "w-[20%] text-center whitespace-pre-line text-[#eff6e0]"
              }
              onClick={() => seleccionar(3)}
            >
              <p className="h-20 hover:font-bold text-center md:text-base sm:text-sm whitespace-pre-line">
                Experiencia IT
              </p>
            </li>
          </ul>
          <div className="flex flex-row w-[100%] h-auto mx-auto">
            <div className=" w-[60%] lg:w-[70%] md:w-[80%] sm:w-[90%] lg:h-auto md:h-auto sm:h-auto z-0 mx-auto">
              {activeTab === 0 && (
                <>
                  <div className="flex my-8 border-y-2 border-[#eff6e0] flex-col min-h-[35rem] h-auto w-auto rounded-xl  bg-[#01161E] py-16 px-10 sm:px-6 lg:h-auto md:h-auto sm:h-auto text-lg md:text-base sm:text-sm text-[#eff6e0]">
                    <p className="py-4 mb-10 text-2xl md:text-xl sm:text-lg text-center text-[#39c8f7]">
                      DATOS PERSONALES
                    </p>
                    Nombre:
                    <p className="py-4 text-2xl md:text-xl sm:text-lg ">
                      JUAN CARLOS RAMIREZ PINILLA
                    </p>
                    Nacionalidad:
                    <p className="py-4 text-2xl md:text-xl sm:text-lg ">
                      COLOMBIANO
                    </p>
                    Email:
                    <p className="py-4 text-2xl md:text-xl sm:text-lg ">
                      juank27ra@gmail.com
                    </p>
                  </div>

                  <div className="flex border-y-2 border-[#eff6e0] flex-col min-h-[35rem] h-auto w-auto rounded-xl  bg-[#01161E] py-16 px-10 sm:px-6 lg:h-auto md:h-auto sm:h-auto text-lg md:text-base sm:text-sm text-[#eff6e0]">
                    <p className="pb-4 mb-10 text-2xl md:text-xl sm:text-lg text-center text-[#39c8f7]">
                      COMPETENCIAS COMO DESARROLLADOR
                    </p>

                    <ul className="py-4 text-2xl md:text-xl sm:text-lg flex-col gap-10">
                      <li className="flex gap-8">
                        <IoCheckmarkDoneSharp className="text-[#39c8f7]" />
                        Trabajo individual y en equipo (Colaborativo).
                      </li>
                      <li className="flex gap-8">
                        <IoCheckmarkDoneSharp className="text-[#39c8f7]" />
                        Manejo de metodologías Ágiles (Scrum).
                      </li>
                      <li className="flex gap-8">
                        <IoCheckmarkDoneSharp className="text-[#39c8f7] h-14 w-14 2xl:h-10 2xl:w-10 2xl:max-h-10 2xl:max-w-10" />
                        Colaboración con diseñadores para traducir prototipos
                        (de Figma) en interfaces funcionales.
                      </li>
                      <li className="flex gap-8">
                        <IoCheckmarkDoneSharp className="text-[#39c8f7]" />
                        Desarrollo de interfaces interactivas.
                      </li>
                      <li className="flex gap-8">
                        <IoCheckmarkDoneSharp className="text-[#39c8f7]" />
                        Participación en el diseño técnico.
                      </li>
                      <li className="flex gap-8">
                        <IoCheckmarkDoneSharp className="text-[#39c8f7]" />
                        Automatización y mantenimiento.
                      </li>
                    </ul>
                  </div>
                  <div className="flex border-y-2 my-8 border-[#eff6e0] flex-col min-h-[20rem] h-auto w-auto rounded-xl  bg-[#01161E] py-16 px-10 sm:px-6 lg:h-auto md:h-auto sm:h-auto text-lg md:text-base sm:text-sm text-[#eff6e0]">
                    <p className="pb-8 mb-10 text-2xl md:text-xl sm:text-lg text-center uppercase text-[#39c8f7]">
                      Hobbies
                    </p>
                    <ul className="h-auto flex-wrap sm:justify-center md:justify-center items-center text-center flex flex-row gap-10 justify-evenly">
                      <li className=" ">
                        <GiWhiteBook className="h-14 w-14 mx-auto" />
                        Leer
                      </li>
                      <li className="">
                        <GiNotebook className="h-14 w-14 mx-auto" />
                        Aprender
                      </li>
                      <li className="">
                        <FaCarSide className="h-14 w-14 mx-auto" />
                        Conducir
                      </li>

                      <li className="">
                        <ImHeadphones className="h-12 w-12 mb-2 mx-auto" />
                        Escuchar musica
                        <br />
                        (Pop en Ingles)
                      </li>
                      <li className="">
                        <GiCampCookingPot className="h-14 w-14 mx-auto" />
                        Cocinar
                      </li>
                      <li className="">
                        <IoMdBasketball className="h-14 w-14 mx-auto" />
                        Basketball
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {activeTab === 1 && (
                <div className="h-[35rem] text-2xl text-[#eff6e0]">
                  <ul className=" font-light my-5 text-[#eff6e0] ">
                    <li className="h-24 sm:h-auto my-2 py-5 text-center rounded-xl bg-[#01161E] text-xl font-semibold uppercase">
                      <p className="relative hoverAfter">
                        Construcción de páginas web fullstack
                      </p>
                    </li>
                    <li className="h-24 sm:h-auto my-2 py-5 text-center rounded-xl bg-[#01161E] text-xl font-semibold uppercase">
                      <p className="relative hoverAfter">
                        Desarrollo Front-end
                      </p>
                    </li>
                    <li className="h-24 sm:h-auto my-2 py-5 text-center rounded-xl bg-[#01161E] text-xl font-semibold uppercase">
                      <p className="relative hoverAfter">
                        Construccion de landing page
                      </p>
                    </li>
                    <li className="h-24 sm:h-auto my-2 py-5 text-center rounded-xl bg-[#01161E] text-xl font-semibold uppercase">
                      <p className="relative hoverAfter">
                        Integración de API's y servicios externos
                      </p>
                    </li>
                    <li className="h-24 sm:h-auto my-2 py-5 text-center rounded-xl bg-[#01161E] text-xl font-semibold uppercase">
                      <p className="relative hoverAfter">
                        Soporte y mantenimiento
                      </p>
                    </li>
                    <li className="h-24 sm:h-auto my-2 py-5 text-center rounded-xl bg-[#01161E] text-xl font-semibold uppercase">
                      <p className="relative hoverAfter">Diseño Responsivo</p>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === 2 && (
                <div className="">
                  <div className="h-[100%] py-10 container mx-auto px-5">
                    <div className="relative">
                      <div
                        className="border-r-4 border-black absolute h-full top-0"
                        style={{ left: "9px" }}
                      ></div>
                      <ul className="list-none m-0 p-0">
                        <li className="mb-5  ">
                          <div className="flex group items-center ">
                            <div className="bg-[#01161E] group-hover:bg-[#39c8f7] z-10 rounded-full border-4 border-black  h-5 w-5">
                              <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                              <div className="order-1 space-y-2 bg-[#01161E] rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-2xl">
                                  Curso Práctico de React Native: Manejo de
                                  Listas y Consumo de APIs
                                </h3>
                                <time className="pb-4 text-sm text-gray-100">
                                  Platzi (Abr/2024)
                                </time>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                  <></>
                                </p>
                                <br />
                                <a
                                  href="https://platzi.com/p/juank27ra/curso/2557-react-native-listas-apis/diploma/detalle/"
                                  target="_blanck"
                                >
                                  <button className="text-lg text-[#39c8f7]">
                                    ver Certificado
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-5  ">
                          <div className="flex group items-center ">
                            <div className="bg-[#01161E] group-hover:bg-[#39c8f7] z-10 rounded-full border-4 border-black  h-5 w-5">
                              <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                              <div className="order-1 space-y-2 bg-[#01161E] rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-2xl">
                                  Curso de Introducción a Java SE
                                </h3>
                                <time className="pb-4 text-sm text-gray-100">
                                  Platzi (Abr/2024)
                                </time>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                  <></>
                                </p>
                                <br />
                                <a
                                  href="https://platzi.com/p/juank27ra/curso/1631-java-basico/diploma/detalle/"
                                  target="_blanck"
                                >
                                  <button className="text-lg text-[#39c8f7]">
                                    ver Certificado
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-5  ">
                          <div className="flex group items-center ">
                            <div className="bg-[#01161E] group-hover:bg-[#39c8f7] z-10 rounded-full border-4 border-black  h-5 w-5">
                              <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                              <div className="order-1 space-y-2 bg-[#01161E] rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-2xl">
                                  Curso de Introducción a React Native
                                </h3>
                                <time className="pb-4 text-sm text-gray-100">
                                  Platzi (Abr/2024)
                                </time>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                  <></>
                                </p>
                                <br />
                                <a
                                  href="https://platzi.com/p/juank27ra/curso/2556-react-native/diploma/detalle/"
                                  target="_blanck"
                                >
                                  <button className="text-lg text-[#39c8f7]">
                                    ver Certificado
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-5  ">
                          <div className="flex group items-center ">
                            <div className="bg-[#01161E] group-hover:bg-[#39c8f7] z-10 rounded-full border-4 border-black  h-5 w-5">
                              <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                              <div className="order-1 space-y-2 bg-[#01161E] rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-2xl">
                                  Ciberseguridad de Google
                                </h3>
                                <time className="pb-4 text-sm text-gray-100">
                                  Coursera and Colnodo (sep/2023 - marzo/2024)
                                </time>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                  Con el desglose de 8 cursos me introduje en la
                                  ciberseguridad, creando una mentalidad
                                  apropiada para hacer de nuestros proyectos un
                                  lugar más seguro en la web.{" "}
                                </p>
                                <br />
                                <a
                                  href="https://coursera.org/share/fa1e983af6f13c68eb973b09a21c3491"
                                  target="_blanck"
                                >
                                  <button className="text-lg text-[#39c8f7]">
                                    ver Certificado
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-5  ">
                          <div className="flex group items-center ">
                            <div className="bg-[#01161E] group-hover:bg-[#39c8f7] z-10 rounded-full border-4 border-black  h-5 w-5">
                              <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                              <div className="order-1 space-y-2 bg-[#01161E] rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-2xl">
                                  FRONTEND DEVELOPER
                                </h3>
                                <p className="pb-4 text-sm text-gray-100">
                                  Platzi (Dic/2023)
                                </p>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                  Curso Substancioso de Platzi en el que me
                                  oriento y quiero saber más de la experiencia
                                  de usuario.
                                </p>
                                <br />
                                <a
                                  href="https://platzi.com/p/juank27ra/curso/2467-frontend-developer/diploma/detalle/"
                                  target="_blanck"
                                >
                                  <button className="text-lg text-[#39c8f7]">
                                    ver Certificado
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-5  ">
                          <div className="flex group items-center ">
                            <div className="bg-[#01161E] group-hover:bg-[#39c8f7] z-10 rounded-full border-4 border-black  h-5 w-5">
                              <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                              <div className="order-1 space-y-2 bg-[#01161E] rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-2xl">
                                  Full Stack Web Developer
                                </h3>
                                <p className="pb-4 text-sm text-gray-100">
                                  Bootcamp Henry (Sep/2022)
                                </p>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                  Maravilloso Bootcamp para crear experiencia
                                  inmenrsiva en el desarrollo web. Más que
                                  aprender un stack de tecnologías, aprendí a
                                  ser equipo, a investigar y a utilizar la misma
                                  tecnología para plasmar la investigación.{" "}
                                </p>
                                <br />
                                <a
                                  href="https://certificates.soyhenry.com/cert?id=168723d4-b75d-40ac-8020-4f1f524f0b82"
                                  target="_blanck"
                                >
                                  <button className="text-lg text-[#39c8f7]">
                                    ver Certificado
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-5  ">
                          <div className="flex group items-center ">
                            <div className="bg-[#01161E] group-hover:bg-[#39c8f7] z-10 rounded-full border-4 border-black  h-5 w-5">
                              <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                              <div className="order-1 space-y-2 bg-[#01161E] rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-2xl">
                                  Compilaciones de aplicaciones Javascript con
                                  typescript
                                </h3>
                                <p className="pb-4 text-sm text-gray-100">
                                  Microsoft (2022)
                                </p>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                  Aprendí el surperSet de javascript para
                                  obtener a través del tipado, los datos
                                  esperados evitando errores en nuestras apps.
                                </p>
                                <br />
                                <a
                                  href="https://learn.microsoft.com/es-es/training/paths/build-javascript-applications-typescript/"
                                  target="_blanck"
                                >
                                  <button className="text-lg text-[#39c8f7]">
                                    ver Certificado
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-5  ">
                          <div className="flex group items-center ">
                            <div className="bg-[#01161E] group-hover:bg-[#39c8f7] z-10 rounded-full border-4 border-black  h-5 w-5">
                              <div className="bg-black h-1 w-6 items-center ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                              <div className="order-1 space-y-2 bg-[#01161E] rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-2xl">
                                  Scrum Fundamentals cetified
                                </h3>
                                <p className="pb-4 text-sm text-gray-100">
                                  SCRUMStudy (2022)
                                </p>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                                  Desarrollé una mentalidad más profunda de la
                                  metodología Scrum para aplicar tanto en
                                  trabajos individuales como en equipo, logrando
                                  así más productividad.
                                </p>
                                <br />
                                <a
                                  href="https://www.linkedin.com/feed/update/urn:li:activity:6983292878701666304/"
                                  target="_blanck"
                                >
                                  <button className="text-lg text-[#39c8f7]">
                                    ver Certificado
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="h-[40rem]  max-h-[50rem] text-2xl text-[#eff6e0] my-10">
                  <ul className=" font-light my-5 text-[#eff6e0] ">
                    <li className="h-auto my-2 py-5 px-10 text-center rounded-xl bg-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase ">
                      Awaq ONGD
                      <p className="normal-case py-5 text-base text-justify font-light">
                        Awaq, es una organización no gubernamental de desarrollo
                        en la cual, colaboré desde Julio 2023 hasta Agosto 2024
                        como desarrollador Frontend y Scrum Master. Aquí
                        participé en varios proyectos y tuve la oportunidad de
                        crecer en la práctica del código y en la lógica; como
                        Scrum Master lideré equipos de desarrollo para
                        implementación de mejoras; contribuí y asistí a
                        reuniones virtuales y pude participar en todo el ciclo
                        de vida de proyectos importantes hasta ser públicos;
                        Algunas de las tecnologías que utilizamos fueron: React,
                        tailwindcss, typescript, trello y otras tecnologías
                        secundarias junto con metodologías Agile para tener
                        entregables óptimos en las fechas establecidas.
                      </p>
                      <a target="_blanck" href={"https://somosawaq.org/"}>
                        <button className="transition-all duration-1000 snap-start flex justify-start p-2 rounded-xl border-y-2 border-[#eff6e0] text-[#39c8f7] hover:scale-95 hover:border-[#39c8f7] hover:text-[#eff6e0]">
                          Ver ONGD
                        </button>
                      </a>
                    </li>
                    <li className="h-auto my-2 py-5 px-10 text-center rounded-xl bg-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase ">
                      Ver certificados Obtenidos
                      <div className="flex justify-evenly mx-auto text-center gap-10 pt-16">
                        <a href={CertColbAwaq} target="_blanck">
                          <button className="h-auto hover:font-bold text-center md:text-base sm:text-sm hover:whitespace-normal text-[#39c8f7]">
                            Certificado de Colaboración
                          </button>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/juan-ramirez-p/details/certifications/1707151441864/single-media-viewer/?profileId=ACoAABA4igUBdT2W7uOAof_yrdUktyRAPwLpugY"
                          target="_blanck"
                        >
                          <button className="h-auto hover:font-bold text-center md:text-base sm:text-sm hover:whitespace-normal text-[#39c8f7]">
                            Certificado de Excelencia
                          </button>
                        </a>
                      </div>
                      <div className="flex gap-10 mx-auto mt-6 text-center justify-evenly">
                        <a
                          href="https://www.linkedin.com/in/juan-ramirez-p/details/certifications/1714409897221/single-media-viewer/?profileId=ACoAABA4igUBdT2W7uOAof_yrdUktyRAPwLpugY"
                          target="_blanck"
                        >
                          <button className="h-auto hover:font-bold text-center md:text-base sm:text-sm hover:whitespace-normal text-[#39c8f7]">
                            Scrum Master
                          </button>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/juan-ramirez-p/details/recommendations/"
                          target="_blanck"
                        >
                          <button className="h-auto hover:font-bold text-center md:text-base sm:text-sm hover:whitespace-normal text-[#39c8f7]">
                            Recomendación
                          </button>
                        </a>
                      </div>
                    </li>
                    {/* <li className="h-auto my-2 py-5 px-10  text-center rounded-xl bg-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase ">
                      Itglobers
                      <p className="normal-case py-5  text-base text-justify font-light">
                        Con una experiencia inmersiva totalmente en el mundo del
                        ecommerce con tecnología Vtex Io, desarrollé la réplica
                        del ecommerce NAPPA Colombia con todos sus componentes,
                        como pasarela de pago, carrito de compra, favoritos,
                        entre otros propios de un ecommerce. Trabajé con
                        metodologías ágiles y el proyecto además de la
                        tecnología de base, también, se realizó con Json, React,
                        BEM y Css
                      </p>
                      <a target="_blanck" href={"https://www.itglobers.com/"}>
                        <button className="transition-all duration-1000 snap-start flex justify-start p-2 rounded-xl border-y-2 border-[#eff6e0] text-[#39c8f7] hover:scale-95 hover:border-[#39c8f7] hover:text-[#eff6e0]">
                          Ver Empresa
                        </button>
                      </a>
                    </li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
