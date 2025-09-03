import imagPerfil from "../assets/Juan.jpg";
import { Link } from "react-router-dom";
import Servises from "./Servises";

const Profile = () => {
  return (
    <>
      <div className="flex gap-20 justify-center items-center mx-10 w-auto sm:mx-5 sm:gap-4 h-auto sm:flex sm:flex-col ">
        {/* <span className="borderImagPerfil absolute inset-0 rounded-full border-2 border-blue-500 -z-10 shadow-lg shadow-blue-500/50"></span> */}
        <img
          className=" sm:mt-24 h-[26rem] xl:h-[18rem] md:h-[12rem] sm:h-[12rem] 2xl:h-[28rem] rounded-2xl w-auto bg-transparent z-50 "
          src={imagPerfil}
          alt="Imagen de perfil"
        />
        <section className="mt-40 w-auto sm:w-auto sm:mt-10 sm:text-center">
          <p className=" text-xl text-[#eff6e0] sm:text-base">Hola!👋, Soy </p>
          <h1 className=" text-6xl lg:text-4xl md:text-3xl font-bold text-[#eff6e0]  sm:text-2xl py-6">
            Juan Ramírez
          </h1>
          <h2 className=" text-3xl font-semibold ml-20 sm:ml-0 text-[#39c8f7] sm:text-xl ">
            Developer Full Stack
          </h2>
          {/* <div className="text-xl font-semibold text-[#39c8f7] sm:text-lg uppercase">
            <Servises />
          </div> */}
          <p className="text-xl mt-4 text-[#eff6e0] w-auto sm:text-base text-justify mr-8 sm:w-5/6 sm:mx-auto 2xl:w-[80%]">
            Con más de 2 años de trayectoria como desarrollador, disfruto crear
            experiencias e interacciones fluidas y amigables para el usuario. Mi
            enfoque está en ofrecer soluciones prácticas y convertir desafíos en
            logros concretos. Mi experiencia previa como Scrum Master y
            developer front-end me ha dado una comprensión única del trabajo
            colaborativo, permitiéndome contribuir de manera eficaz y positiva
            en cualquier entorno.
          </p>
          <br />
          <p className="text-xl mt-4 text-[#eff6e0]  w-auto sm:text-base text-justify mr-8 sm:w-5/6 sm:mx-auto 2xl:w-[80%]">
            {/* Quieres agregarme a tu equipo o tener presencia en la red, escalar tu
            negocio, dar confianza a tus clientes y/o que te conozcan desde
            cualquier lugar... */}
            Impulsa tu presencia online y conecta con tus clientes de forma
            efectiva, Si buscas un desarrollador web para tu proyecto o quieres
            sumar un Developer a tu equipo
            <Link
              to={"/contact"}
              className="visited:text-[#CF9DF0]  text-[#39c8f7] hover:scale-95 hover:border-[#39c8f7] p-1 hover:text-[#eff6e0] transition-all duration-1000 snap-start"
            >
              Contáctame
            </Link>
          </p>
          <p className="text-2xl font-semibold mt-10 text-[#eff6e0]  sm:text-lg sm:items-center">
            Bienvenidos
          </p>
          <div className="flex items-start sm:flex sm:justify-center mb-24">
            <Link to="about">
              <button className="flex duration-1000 snap-start border-[#eff6e0] hover:border-[#39c8f7] border-y-2 rounded-xl bg-transparent mt-16 p-4 font-bold text-[#39c8f7] hover:text-[#eff6e0] transition-all translate-x-16 text-xl sm:text-base sm:mt-12  sm:translate-x-0">
                Más sobre mí
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
