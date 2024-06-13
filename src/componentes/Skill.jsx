import html from "../assets/html-5.svg";
import js from "../assets/javascript.svg";
import mongodb from "../assets/mongodb-icon.svg";
import node from "../assets/nodejs.svg";
import express from "../assets/express.svg";
import typescript from "../assets/typescript-icon.svg";
import tailwindcss from "../assets/tailwindcss-icon.svg";
import git from "../assets/git-icon.svg";
import sequelize from "../assets/sequelize.svg";
import redux from "../assets/redux.svg";
import react from "../assets/react.svg";
import postgres from "../assets/postgresql.svg";
import github from "../assets/github.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

const Skill = () => {
  const imgs = [
    html,
    js,
    github,
    mongodb,
    postgres,
    node,
    express,
    typescript,
    tailwindcss,
    git,
    sequelize,
    redux,
    react,
  ];
  return (
    <>
      <div className="w-[80%] text-4xl text-center mx-auto font-bold text-[#39c8f7] py-20 ">
        HABILIDADES TÉCNICAS
      </div>
      <Swiper
        className=" w-auto mx-auto justify-center h-auto sm:w-[80%] md:w-5/6 mb-8 lg:w-5/6 xl:w-[80%] 2xl:w-[80%]"
        modules={[A11y, Autoplay]}
        spaceBetween={1}
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 400,
        }}
      >
        {imgs.map((e, i) => {
          return (
            <>
              <SwiperSlide>
                <section className="h-auto w-auto flex flex-row mx-auto">
                  <img
                    alt=""
                    src={e}
                    key={i}
                    className="object-fill rounded-full border-2 border-[#39c8f7] p-2 h-20 w-20 lg:w-16 lg:h-16 md:h-16 md:w-16 sm:h-10 sm:w-10 sm:p-0.5"
                  />
                </section>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <div className=" grid grid-cols-2 gap-4 py-20 mx-[16%] max-w-[120rem]">
        <section className="w-[40%] md:w-[60%] sm:w-[80%] mx-auto font-semibold text-2xl text-center text-[#39c8f7]">
          {" "}
          Backend
        </section>
        <section className="w-[40%] md:w-[60%] sm:w-[80%] mx-auto font-semibold text-2xl text-center text-[#39c8f7]">
          Frontend{" "}
        </section>
        <ul className=" font-light my-5 text-[#eff6e0] ">
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            Nodejs
          </li>
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            Express
          </li>
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            Postgresql
          </li>
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            Mongodb
          </li>
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            TypeScript
          </li>
        </ul>
        <ul className=" font-light my-5 text-[#eff6e0] ">
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            React
          </li>
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            Redux
          </li>
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            Css
          </li>
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            Tailwindcss
          </li>
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            TypeScript
          </li>
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            Vtex.Io
          </li>
          <li className="h-20 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase  border-2 border-t-white">
            Json
          </li>
        </ul>
      </div>
    </>
  );
};

export default Skill;
