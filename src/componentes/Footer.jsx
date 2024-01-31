

export default function Footer() {


  return (
    <footer className='bg-[#01161E] h-14 flex justify-center w-auto sm:h-20 sm:items-center'>
      <div className="sm:w-1/3">
        <p className="text-[0.675rem] text-[#eff6e0] ml-4 p-4 sm:text-center flex sm:ml-0 sm:p-2 sm:w-auto">Copyright 2024 - Todos los derechos reservados </p>
      </div>
        <a target="_blank" href="https://www.linkedin.com/in/juan-carlos-ramirez-pinilla-a8518077/" className="text-sm text-[#eff6e0] p-4 ml-40 sm:ml-4 hover:text-blue-600 md:ml-20 hover:text-lg sm:hover:text-base">LinkedIn </a>
        <a target="_blank" href="https://github.com/juank27ra" className="text-sm text-[#eff6e0] ml-4 p-4 hover:text-gray-600 sm:ml-2 hover:text-lg sm:hover:text-base">Github </a>
        <a target="_blank" href="https://wa.me/573224772180" className="text-sm text-[#eff6e0] ml-4 p-4 hover:text-green-600 sm:ml-2 hover:text-lg sm:hover:text-base">whatsapp </a>
    </footer>
  )
}
