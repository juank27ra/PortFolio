import React from "react";
import imagPerfil from "../assets/Juan.jpg";
import { Link } from "react-router-dom";
import Servises from "./Servises";

const Profile = () => {
  return (
    <>
      <div className="flex gap-20 justify-center items-center mx-10 w-auto sm:mx-5 sm:gap-4 h-auto sm:flex sm:flex-col ">
        <img
          className="sm:mt-24 h-[26rem] xl:h-[18rem] md:h-[12rem] sm:h-[12rem] 2xl:h-[28rem] rounded-full w-auto bg-transparent "
          src={imagPerfil}
          alt="Imagen de perfil"
        />
        <div className="mt-40 w-auto sm:w-auto sm:mt-10 sm:text-center">
          <p className=" text-xl text-[#eff6e0] sm:text-base">Hola!👋, Soy </p>
          <h1 className=" text-6xl lg:text-4xl md:text-3xl font-bold text-[#eff6e0]  sm:text-2xl py-6">
            Juan Ramírez
          </h1>
          <h3 className=" text-3xl font-semibold ml-20 sm:ml-0 text-[#39c8f7] sm:text-xl ">
            Developer Full Stack
          </h3>
          {/* <div className="text-xl font-semibold text-[#39c8f7] sm:text-lg uppercase">
            <Servises />
          </div> */}
          <p className="text-xl mt-4 text-[#eff6e0] w-auto sm:text-base text-justify mr-8 sm:w-5/6 sm:mx-auto 2xl:w-[80%]">
            Con casi 2 años de trayectoria como desarrollador, disfruto crear
            experiencias e interacciones fluidas y amigables para el usuario. Mi
            enfoque está en ofrecer soluciones prácticas y convertir desafíos en
            logros concretos. Mi experiencia previa como Scrum Master y
            developer front-end me ha dado una comprensión única del trabajo en
            equipo, permitiéndome contribuir de manera eficaz y positiva en
            cualquier entorno.
            {/* Entusiasta de la tecnología y con disciplina en
            el aprendizaje me defino. Ver cómo se transforma el código
            visualmente y sentir la grandeza de lo que hago, me pone en una
            perspectiva de aprendizaje continuo para SER el mejor. */}
          </p>
          <br />
          <p className="text-xl mt-4 text-[#eff6e0]  w-auto sm:text-base text-justify mr-8 sm:w-5/6 sm:mx-auto 2xl:w-[80%]">
            Quieres tener presencia en la red, escalar tu negocio, dar confianza
            a tus clientes y/o que te conozcan desde cualquier lugar...
            <Link
              to={"/contact"}
              className="text-[#39c8f7] hover:scale-95 hover:border-[#39c8f7] p-1 hover:text-[#eff6e0] transition-all duration-1000 snap-start"
            >
              Contáctame
            </Link>
          </p>
          {/* <br />
          <p className="text-xl mt-4 text-[#eff6e0]  w-auto sm:text-base text-justify mr-8 sm:w-5/6 sm:mx-auto 2xl:w-[80%]">
            Diseño y construyo productos digitales que entregan experiencias
            únicas para tus usuarios y/o clientes que visitan tu web.
          </p> */}
          <p className="text-2xl font-semibold mt-10 text-[#eff6e0]  sm:text-lg sm:items-center">
            Bienvenidos.
          </p>
          <div className="flex items-start sm:flex sm:justify-center mb-24">
            <Link to="about">
              <button className="flex duration-1000 snap-start border-[#eff6e0] hover:border-[#39c8f7] border-y-2 rounded-xl bg-transparent mt-16 p-4 font-bold text-[#39c8f7] hover:text-[#eff6e0] transition-all translate-x-16 text-xl sm:text-base sm:mt-12  sm:translate-x-0">
                Más sobre mí
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
