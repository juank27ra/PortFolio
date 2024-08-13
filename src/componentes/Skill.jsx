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
                    className="object-fill rounded-xl border-y-2 border-[#eff6e0] p-2 h-20 w-20 lg:w-16 lg:h-16 md:h-16 md:w-16 sm:h-10 sm:w-10 sm:p-0.5"
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
          Back-end
        </section>
        <section className="w-[40%] md:w-[60%] sm:w-[80%] mx-auto font-semibold text-2xl text-center text-[#39c8f7]">
          Front-end{" "}
        </section>
        <ul className=" font-light my-5  text-[#eff6e0] ">
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            Nodejs
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            Express
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            Postgresql
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            Mongodb
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            TypeScript
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-t from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            Postman
          </li>
        </ul>
        <ul className=" font-light my-5 text-[#eff6e0] ">
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            React
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            Redux
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            Css
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            Tailwindcss
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            TypeScript
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            Vtex.Io
          </li>
          <li className="h-20 rounded-xl border-y-2 my-2 py-5 text-center bg-gradient-to-tl from-[#3b757f] to-[#01161E] text-xl lg:text-lg md:text-base sm:text-base font-semibold uppercase border-[#eff6e0]">
            Json
          </li>
        </ul>
      </div>
    </>
  );
};

export default Skill;
