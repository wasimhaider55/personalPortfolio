import React from 'react';
import html from "../assets/html.png"
import css from "../assets/css.png"
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.png"
import javascript from "../assets/javascript.png"
import nextjs from "../assets/nextjs.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import github from "../assets/github.png"

const Experience = () => {
  const worked = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-600"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-600"
    },
    {
      id: 3,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-cyan-500"
    },
    {
      id: 4,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-violet-700"
    },
    {
      id: 5,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500"
    },
    {
      id: 6,
      src: react,
      title: "REACTJS",
      style: "shadow-cyan-500"
    },
    {
      id: 7,
      src: nextjs,
      title: "NEXTJS",
      style: "shadow-gray-400"
    },
    {
      id: 8,
      src: node,
      title: "NODEJS",
      style: "shadow-lime-600"
    },
    {
      id: 9,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-500"
    },
  ]
  return (
    <div
      id="experience"
      className=' bg-gradient-to-b from-gray-800 to-black w-full h-140 pt-48'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div className=' pb-8'>
          <p className=' text-4xl font-bold border-b-4 border-gray-500  p-2 inline'>Experience</p>
          <p className='py-6'>these are the technologies i've worked with</p>
        </div>

        <div className=' w-full grid grid-cols-2 sm:grid-cols-3  gap-8  text-center py-8 px-12 sm:px-0'>
          {
            worked.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style} `}>
                <img src={src} alt="" className=' w-20 mx-auto' />
                <p className=' mt-4'>{title}</p>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Experience