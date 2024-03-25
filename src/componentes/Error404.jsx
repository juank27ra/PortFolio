import React from 'react'
import img404 from '../assets/eror-404.jpg'

const Error404 = () => {

  return (
    <div className='h-[100vh] w-[100%] bg-gradient-to-tl from-[#3b757f] to-[#01161E]'>
        <img src={img404} alt='imge 404' className=' object-scale-down mx-auto grayscale 2xl:object-fill w-[100vw] h-[100vh]'/>
    </div>
  )
}
export default Error404