import { useState } from 'react';

export default function () {
  const [activeTab, setactiveTab] = useState(0);
  const seleccionar = (index) => {
    setactiveTab(index);
  };

  return (
    <div className='bg-gradient-to-tl from-[#3b757f] to-[#01161E] h-[100vh] 2xl:h-auto xl:h-auto lg:h-auto md:h-auto sm:h-auto'>
      <div className='flex justify-between mx-5'>
        <h1 className='TextDouble text-8xl sm:text-4xl font-extrabold p-4 text-[#eff6e0] mx-auto z-9'>Sobre mi</h1>
      </div>
      <div className='flex justify-evenly pb-24'>
      <section className=" md:mx-6 sm:mx-3 h-auto w-[80%]" >
          <ul className="tabs flex text-2xl justify-end whitespace-nowrap gap-4 cursor-pointer w-[100%] md:whitespace-normal  md:text-base md:text-center md:hover:text-base sm:text-base sm:w-auto sm:whitespace-normal ">
            <li className={activeTab == 0 ? "active md:whitespace-normal xl:whitespace-normal lg:whitespace-normal sm:md:whitespace-normal font-bold w-[20%] text-center justify-center" : "w-[20%]  whitespace-pre-line text-center text-[#eff6e0]"} onClick={() => seleccionar(0)}>
              <p className="h-20 hover:font-bold text-center sm:text-base ">Información Personal</p>
            </li>  
            <li className={activeTab == 1 ? "active md:whitespace-normal lg:md:whitespace-normal sm:md:whitespace-normal font-bold w-[20%] text-center" : "w-[20%] text-center whitespace-pre-line text-[#eff6e0]"} onClick={() => seleccionar(1)}>
              <p className="h-20 hover:font-bold text-center sm:text-base ">Servicios</p>
            </li>
            <li className={activeTab == 2 ? "active md:whitespace-normal lg:md:whitespace-normal sm:md:whitespace-normal font-bold w-[20%] text-center" : "w-[20%] text-center whitespace-pre-line text-[#eff6e0]"} onClick={() => seleccionar(2)}>
              <p className="h-20 hover:font-bold text-center sm:text-base hover:whitespace-pre">Educacion Certificada</p>
            </li>
            <li className={activeTab == 3 ? "active md:whitespace-normal lg:md:whitespace-normal sm:md:whitespace-normal  font-bold w-[20%] text-center" : "w-[20%] text-center whitespace-pre-line text-[#eff6e0]"} onClick={() => seleccionar(3)}>
              <p className="h-20 hover:font-bold text-center sm:text-base whitespace-pre-line">Experiencia It</p>
            </li>  
          </ul>
          <div className='flex flex-row w-[100%] h-auto  mx-auto'>
            <div className="tab-content w-[60%] lg:w-[70%] md:w-[80%] sm:w-[90%] lg:h-auto md:h-auto sm:h-auto z-0 mx-auto">
              {
              activeTab === 0 && 
              <div className='flex min-h-[35rem] h-auto  w-auto  bg-[#01161E] py-6 px-10 sm:px-6 lg:h-auto md:h-auto sm:h-auto text-2xl md:text-lg sm:text-base text-[#eff6e0]'>
                NOMBRE: Juan Carlos Ramirez<br/>
                NACIONALIDAD: Colombiano<br/>
                MOBIL: +573224772180<br/>
                <br/>
                CON DISCIPLINA Y MOTIVACIÓN<br/>
                <br/>
                Entregado a la lectura es una caracteristica, porque es allí donde puedo crecer en muchos aspectos de la vida como: el desarrollo personal, la tecnología, financieramente, la espiritualidad, y entre otros temas. En este sentido soy muy tradicional, prefiero hacerlo directamente de libros impresos teniendo contacto con el papel.
                <br/>
                <br/>
                Encantado de la tecnología y la imnovación por ello me gustaría estar inmerso en proyectos que propongan novedad, comodidad para las personas y sobre todo un servicio top Ten, para impactar a muchas personas y sobre todo contribuir a la felicidad.
              </div>
              }
              {
              activeTab === 1 && 
              <div className='h-[35rem] text-2xl text-[#eff6e0]'>
                <ul className=' font-light my-5 text-[#eff6e0] '>
                  <li className='h-24 sm:h-auto my-2 py-5 text-center bg-[#01161E] text-xl font-semibold uppercase '>Construccion de páginas web fullstack</li>
                  <li className='h-24 sm:h-auto my-2 py-5 text-center bg-[#01161E] text-xl font-semibold uppercase '>Desarrollo de Interfaz gráfica</li>
                  <li className='h-24 sm:h-auto my-2 py-5 text-center bg-[#01161E] text-xl font-semibold uppercase '>Construccion de landing page</li>
                  <li className='h-24 sm:h-auto my-2 py-5 text-center bg-[#01161E] text-xl font-semibold uppercase '>Integración de API's y servicios externos</li>
                  <li className='h-24 sm:h-auto my-2 py-5 text-center bg-[#01161E] text-xl font-semibold uppercase '>Diseño Responsivo</li>
                </ul>
              </div>
              }
              {
              activeTab === 2 && 
              <div className=''>                        
                <div className="h-[100%] py-10 container mx-auto px-5">
                  <div className="relative">
                    <div className="border-r-4 border-black absolute h-full top-0" style={{ 'left': '9px' }}></div>
                      <ul className="list-none m-0 p-0">
                        <li className="mb-5  ">
                          <div className="flex group items-center ">
                            <div className="bg-[#01161E] group-hover:bg-[#39c8f7] z-10 rounded-full border-4 border-black  h-5 w-5">
                              <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                            </div>
                            <div className="flex-1 ml-4 z-10 font-medium">
                              <div className="order-1 space-y-2 bg-[#01161E] rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-2xl">Ciberseguridad de Google</h3>
                                <time className="pb-4 text-sm text-gray-100">Coursera and Colnodo (sep/2023 - marzo/2024)</time>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">The education should be very </p>
                                <br />
                                <a href='https://coursera.org/share/fa1e983af6f13c68eb973b09a21c3491' target='_blanck'><button className='text-lg text-[#39c8f7]'>ver Certificado</button></a>
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
                                <h3 className="mb-3 font-bold text-white text-2xl">FRONTEND DEVELOPER</h3>
                                <p className="pb-4 text-sm text-gray-100">Platzi (2023)</p>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                <br/>
                                <a href='https://platzi.com/p/juank27ra/curso/2467-frontend-developer/diploma/detalle/' target='_blanck'><button className='text-lg text-[#39c8f7]'>ver Certificado</button></a>
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
                                <h3 className="mb-3 font-bold text-white text-2xl">Full Stack Web Developer</h3>
                                <p className="pb-4 text-sm text-gray-100">Bootcamp Henry (2022)</p>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                <br/>
                                <a href='https://certificates.soyhenry.com/cert?id=168723d4-b75d-40ac-8020-4f1f524f0b82' target='_blanck'><button className='text-lg text-[#39c8f7]'>ver Certificado</button></a>
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
                                <h3 className="mb-3 font-bold text-white text-2xl">Compilaciones de aplicaciones Javascript con typescript</h3>
                                <p className="pb-4 text-sm text-gray-100">Microsoft (2022)</p>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                <br/>
                                <a href='https://learn.microsoft.com/es-es/training/paths/build-javascript-applications-typescript/' target='_blanck'><button className='text-lg text-[#39c8f7]'>ver Certificado</button></a>
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
                                <h3 className="mb-3 font-bold text-white text-2xl">Scrum Fundamentals cetified</h3>
                                <p className="pb-4 text-sm text-gray-100">SCRUMStudy (2022)</p>
                                <hr />
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                                <br/>
                                <a href='https://www.linkedin.com/feed/update/urn:li:activity:6983292878701666304/' target='_blanck'><button className='text-lg text-[#39c8f7]'>ver Certificado</button></a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                  </div>
              </div>
              </div>
              }
              {
              activeTab === 3 && 
              <div className='h-[40rem]  max-h-[50rem] text-2xl text-[#eff6e0] my-10'>
              <ul className=' font-light my-5 text-[#eff6e0] '>
                <li className='h-auto my-2 py-5 px-10  text-center bg-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase '>
                  Itglobers
                  <p className='normal-case py-5  text-base text-justify'>Aquí tuve una experiencia inmersiva totalmente en el mundo del icommerce con tecnología Vtex Io; desarrollé la replica del ecommerce NAPPA colombia con todos sus componentes como pasarela de pago, carrito de compra, favoritos, entre otros componentes propios de un ecommerce. Trabajé con metodologías ágiles y el proyecto además de la tecnología de base tambien se realizó con Json, React, BEM y css puro</p>
                  <a target='_blanck' href={'https://www.itglobers.com/'}><button  className='flex justify-start p-2 border-2 border-[#39c8f7] text-[#39c8f7]'>Ver Empresa</button></a>
                </li>
                <li className='h-auto my-2 py-5 px-10 text-center bg-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase '>
                  Awaq ONGD
                  <p className='normal-case py-5 text-base text-justify'>Awaq, es una organización no gubernamental de desarrollo en la cual, colaboro actualmente como desarrollador Frontend. Aquí he tenido la oportunidad de crecer en la práctica de código y lógica, he participado en dos proyectos y estaré liderando dos equipos de desarrollo para implementar mejoras; he contribuido y asistido a reuniones virtuales y he podido participar en todo el ciclo de vida de proyectos importantes hasta ser públicos; finalmente adicionar que manejamos metodología Agiles, utilizamos React, tailwindcss, typescript, trello y otras tecnologias secundarias.</p>
                  <a target='_blanck' href={'https://www.somosawaq.org/'}><button  className='flex justify-start p-2 border-2 border-[#39c8f7] text-[#39c8f7]'>Ver Empresa</button></a>
                </li>
              </ul>                
              </div>
              }
            </div>
          </div>
      </section>
      </div>
    </div>
  )
}
