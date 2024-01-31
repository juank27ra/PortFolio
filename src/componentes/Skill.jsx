import html from '../assets/html-5.svg'
import js from '../assets/javascript.svg'
import mongodb from '../assets/mongodb-icon.svg'
import node from '../assets/nodejs.svg'
import express from '../assets/express.svg'
import typescript from '../assets/typescript-icon.svg'
import tailwindcss from '../assets/tailwindcss-icon.svg'
import git from '../assets/git-icon.svg'
import sequelize from '../assets/sequelize.svg'
import redux from '../assets/redux.svg'
import react from '../assets/react.svg'
import postgres from '../assets/postgresql.svg'
import github from '../assets/github.png'

import {Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

const Skill = () => {
  
  const imgs = [html, js, github, mongodb, postgres, node, express, typescript, tailwindcss, git, sequelize, redux, react,]
  return (
    <>
    <div className='text-4xl text-center font-bold text-[#01161E] pt-20 pb-5'>Tech skill</div>
      <Swiper
        className=' w-auto h-auto sm:w-[80%] md:w-5/6 mb-8 lg:w-5/6 xl:w-[80%] 2xl:w-[80%]'
        modules={[A11y, Autoplay]}        
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 200,
        }}
      >
        {
          imgs.map((e, i) => {
            return (
              <>
              <SwiperSlide  >
                <section className='h-auto w-auto flex flex-row' >
                  <img
                    alt=""
                    src={e}
                    key={i}
                    className='object-fill m-4 h-16 w-16 lg:md:24 lg:w-16 md:h-20 md:w-14 sm:h-16 sm:w-10 '
                  />
                </section>
              </SwiperSlide>
              </>
            )
          })
        }
      </Swiper>
    </>
  )
}

export default Skill