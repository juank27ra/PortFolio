import pdfcv from "../assets/CV JCRP.pdf";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SiAboutdotme } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { RiMailSendFill } from "react-icons/ri";
import { HiPlusSmall } from "react-icons/hi2";
import { PiFilePdfBold } from "react-icons/pi";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import favicon from "../assets/favicon.png";

const Navbar = () => {
  return (
    <div>
      <nav className=" z-50 fixed w-[97%] h-24 bg-[#01161E] border-2 rounded-xl border-[#eff6e0] top-6 left-[2%] right-[2%] flex justify-between px-10 md:px-0 md:w-[97%] sm:hidden">
        <Link to={"/"} className=" p-3 m-2">
          {/* {
            <FaHouse className="h-12 w-12 fill-[#eff6e0] my-auto hover:scale-125 hover:fill-[#39c8f7]" />
          } */}
          <img alt="favicon-ico" className="  h-14 w-14 " src={favicon} />
        </Link>
        <Link
          to="/about"
          className=" z-10 text-xl md:text-lg font-bold  text-[#eff6e0] my-auto  hover:text-[#39c8f7] hover:scale-125 md:hover:scale-110 selection:text-[##39c8f7] relative hoverAfterNav"
        >
          {" "}
          Sobre mí{" "}
        </Link>
        <Link
          to="/proyects"
          className=" z-10 text-xl md:text-lg font-bold  text-[#eff6e0] my-auto  hover:text-[#39c8f7] hover:scale-125 md:hover:scale-110 selection:text-[##39c8f7] relative hoverAfterNav"
        >
          {" "}
          Proyectos{" "}
        </Link>
        <Link
          to="/contact"
          className=" z-10 text-xl md:text-lg font-bold  text-[#eff6e0] my-auto  hover:text-[#39c8f7] hover:scale-125 md:hover:scale-110 selection:text-[##39c8f7] relative hoverAfterNav"
        >
          {" "}
          Contácteme{" "}
        </Link>
        <a
          href={pdfcv}
          target="_blank"
          className=" z-10 text-xl rounded-xl md:text-lg font-bold text-[#eff6e0] my-auto mx-4 p-4 md:p-2 shadow-md shadow-[#eff6e0] hover:text-[#39c8f7] selection:text-[#39c8f7] hover:shadow-md hover:shadow-[#39c8f7]"
        >
          {" "}
          Ver/Descargar cv{" "}
        </a>
      </nav>
      <nav className=" fixed z-50 w-[100%] h-24 sm:h-24 bg-[#01161E] rounded-xl border-b-2 border-[#eff6e0] px-10 2xl:hidden xl:hidden lg:hidden md:hidden">
        <div className="absolute top-5 left-6 ">
          <SpeedDial placement="right">
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full bg-[#eff6e0]">
                <HiPlusSmall className="h-8 w-8 transition-transform group-hover:rotate-45 fill-[#01161E] hover:fill-[#39c8f7]" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent className="flex-row">
              <SpeedDialAction className="bg-[#eff6e0]">
                <Link to="/">
                  {" "}
                  <FaHouse className="h-5 w-5 fill-[#01161E] my-auto hover:scale-125 hover:fill-[#39c8f7]" />
                </Link>
              </SpeedDialAction>
              <SpeedDialAction className="bg-[#eff6e0]">
                <Link to="/about">
                  {" "}
                  <SiAboutdotme className="h-5 w-5 fill-[#01161E] my-auto hover:scale-150 hover:fill-[#39c8f7]" />
                </Link>
              </SpeedDialAction>
              <SpeedDialAction className="bg-[#eff6e0]">
                <Link to="/proyects">
                  <GrProjects className="h-5 w-5 fill-[#01161E] my-auto hover:scale-125 hover:stroke-[#39c8f7]" />
                </Link>
              </SpeedDialAction>
              <SpeedDialAction className="bg-[#eff6e0]">
                <Link to="/contact">
                  <RiMailSendFill className="h-5 w-5 fill-[#01161E] my-auto hover:scale-125 hover:fill-[#39c8f7]" />
                </Link>
              </SpeedDialAction>
              <SpeedDialAction className="bg-[#eff6e0]">
                <a href={pdfcv} target="_blank">
                  <PiFilePdfBold className="h-5 w-5 fill-[#01161E] my-auto hover:scale-125 hover:fill-[#39c8f7]" />
                </a>
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
