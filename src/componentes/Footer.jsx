import { useEffect, useState } from "react";

export default function Footer() {
  const date = (() => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
      const timer = setInterval(() => {
        const newYear = new Date().getFullYear();
        setYear(newYear);
      }, 1000 * 60 * 60 * 24); //verifica una vez al dia el cambio de año
      return () => clearInterval(timer);
    }, []);
    return year;
  })();

  console.log(date);

  return (
    <footer className="bg-[#01161E] z-50 border-t-2 rounded-xl fixed bottom-0  border-[#eff6e0] h-14 flex justify-center w-[100%] sm:h-20 sm:items-center">
      <div className="sm:w-1/3">
        <p className="text-[0.675rem] text-[#eff6e0] ml-4 p-4 sm:text-center flex sm:ml-0 sm:p-2 sm:w-auto">
          Copyright {date} - Todos los derechos reservados{" "}
        </p>
      </div>
      <a
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/juan-ramirez-p/"
        className="text-sm hover:text-[#eff6e0] p-4 ml-40 sm:ml-4 text-blue-600 md:ml-20 "
      >
        LinkedIn{" "}
      </a>
      <a
        target="_blank"
        rel="noopener"
        href="https://github.com/juank27ra"
        className="text-sm hover:text-[#eff6e0] ml-4 p-4 text-gray-600 sm:ml-2 "
      >
        Github{" "}
      </a>
      <a
        target="_blank"
        rel="noopener"
        href="https://wa.me/573224772180"
        className="text-sm hover:text-[#eff6e0] ml-4 p-4 text-green-600 sm:ml-2 "
      >
        whatsapp{" "}
      </a>
    </footer>
  );
}
