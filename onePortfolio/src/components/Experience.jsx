import React from 'react';
import css from "../assets/css.png"
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import nextjs from "../assets/nextjs.png"
import node from "../assets/css.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"

const Experience = () => {
  return (
    <div
     name="experience"
     className=' bg-gradient-to-b from-gray-800 to-black w-full h-140'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div className=' pb-8'>
          <p className=' text-4xl font-bold border-b-4 border-gray-500  p-2 inline'>Experience</p>
          <p className='py-6'>these are the technologies i've worked with</p>
        </div>

        <div className=' w-full grid grid-cols-2 sm:grid-cols-3  gap-8  text-center py-8 px-12 sm:px-0'>
          <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={html} alt="" className=' w-20 mx-auto' />
            <p className=' mt-4'>HTML</p>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience