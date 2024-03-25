import React from 'react'
import img404 from '../assets/eror-404.jpg'

const Error404 = () => {

  return (
    <div className='h-[100%] w-[100%]'>
        <img src={img404} alt='imge 404' className=' grayscale object-fill w-[100vw]'/>
    </div>
  )
}
export default Error404