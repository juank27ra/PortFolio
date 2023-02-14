
import arrow from '../assets/arrow_down.png'
import comics from '../assets/comics.webp'
import videogames from '../assets/Mario.webp'
import codigo from '../assets/cod.jpg'
import tareas from '../assets/tareas.jpg'

export default function Proyects() {

  const sccrollDown = (e) => {
    return window.scrollTo(0, 1940)
  }

  return (
     <div className='bg-slate-300 h-screen'>
      <div className='w-max mx-40 py-8 '>
       <h1 className='text-orange-700 text  font-serif text-4xl p-14 '>Proyectos</h1>
       </div>
       <div className='flex flex-row items-center justify-center gap-3'>
        <div className='flex items-center justify-center bg-slate-300'>
          <div className='group h-[32rem] w-60 [ perspective:1000ox]'>
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
        </div>
        <div className='flex  items-center justify-center bg-slate-300'>
          <div className='group h-[32rem] w-56 [ perspective:1000ox]'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <div className='absolute insert-0'>
                <img className='h-[450px] w-full rounded-xl object-cover shadow-xl shadow-black/40' src={videogames} alt='imagen' />
                <p className='text-center mt-2 text-xl font-bold text-blue-900'>Videogames</p>
              </div>
              <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <div className='flex h-min-full flex-col items-center justify-center my-16' >
                <h1 className='text-xl font-bold text-cyan-600'> Videogames</h1>
                <br/>
                <p className='text-sm '>Proyecto full Satck: </p>
                <p className='text-base'> muestra de videojuegos, filtrado, busqueda</p>
                <p> creacion y guardado en base de Datos</p>
                <a href='' target='_blank'><button className='mt-[7.5rem] rounded-md bg-cyan-600 py-1 px-3 text-sm hover:bg-slate-700'>En vivo </button></a>
                <a href='https://github.com/juank27ra/PI-VideoGames' target='_blank'><button className='mt-[0.5rem] rounded-md bg-orange-600 py-1 px-3 text-sm hover:bg-slate-700'>Código Fuente </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex  items-center justify-center bg-slate-300'>
          <div className='group h-[32rem] w-56 [ perspective:1000ox]'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <div className='absolute insert-0'>
                <img className='h-[450px] w-full rounded-xl object-cover shadow-xl shadow-black/40' src={tareas} alt='imagen' />
                <p className='text-center mt-2 text-xl font-bold text-blue-900'>Tareas</p>
              </div>
              <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <div className='flex h-min-full flex-col items-center justify-center my-16' >
                <h1 className='text-xl font-bold text-cyan-600 '> Tareas</h1>
                <br/>
                <p className='text-sm'>Proyecto full Satck: </p>
                <p className='text-base'> Crea, muestra, edita y elimina Tareas</p>
                <p> adicionalmente se le puede colocar un tiempo estimado para cumplir esa tarea</p>
                <a href='https://tasks-db68uv3on-juank27ra.vercel.app/' target='_blank'><button className='mt-[7.5rem] rounded-md bg-cyan-600 py-1 px-2 text-sm hover:bg-slate-700'>En vivo </button></a>
                <a href='https://github.com/juank27ra/tasks-modelo-empresarial' target='_blank'><button className='mt-[0.5rem] rounded-md bg-orange-600 py-1 px-2 text-sm hover:bg-slate-700'>Código Fuente </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex  items-center justify-center bg-slate-300'>
          <div className='group h-[32rem] w-56 [ perspective:1000ox]'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <div className='absolute insert-0'>
                <img className='h-[450px] w-full rounded-xl object-cover shadow-xl shadow-black/40' src={codigo} alt='imagen' />
                <p className='text-center mt-2 text-xl font-bold text-blue-900'>Otros Proyectos</p>
              </div>
              <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <div className='flex h-min-full flex-col items-center justify-center my-16' >
                <h1 className='text-xl font-bold text-cyan-600 '> Varios</h1>
                <br/>
                <p className='text-sm'>Proyectos full Stack, solo front y maquetado </p>
                <p className='text-base'>podrás ver en github el código y fotos de los mismos.</p>
                <a href='https://github.com/juank27ra?tab=repositories' target='_blank'>
                <button className='mt-[11.5rem] rounded-md bg-orange-600 py-1 px-4 w-40 text-sm hover:bg-slate-700'>Código Fuente </button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
                
       </div>
       <div className='flex items-center justify-center'>
          <button onClick={sccrollDown}><img className='flex justify-center mt-40 animate-bounce h-20' src={arrow} alt='flecha abajo para continuar'/></button>
       </div>
      </div>


)
}
