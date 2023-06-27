import React from 'react'
import adventure from "../assets/portfolio/adventure.png"
import navtec from "../assets/portfolio/navtec.png";
import codewithus from "../assets/portfolio/codewithus.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 0,
      image: adventure,
      lang: "HTMLCSS",
      title: "Adventure",
      code: "https://github.com/wasimhaider55/cssProjects/tree/main/web3/adventure",
      live: "https://css-projects-wasimhaider55.vercel.app/",
    },
    {
      id: 1,
      image: navtec,
      lang: "Bootstrap",
      title: "Navtec",
      code: "https://github.com/wasimhaider55/bootstrapCssProjects/tree/main/web1",
      live: "https://bootstrap-css-projects.vercel.app/",
    },
    {
      id: 2,
      image: codewithus,
      lang: "Bootstrap",
      title: "CodeWithUs",
      code: "https://github.com/wasimhaider55/bootstrapCssProjects",
      live: "https://bootstrap-css-henna.vercel.app/",
    },
    {
      id: 3,
      image: reactParallax
    },
    {
      id: 4,
      image: reactSmooth
    },
    {
      id: 5,
      image: reactWeather
    },
  ]
  return (
    <div
      id="portfolio"
      className=' bg-gradient-to-b  from-black to-gray-800 w-full text-white  pt-10'
    >
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=' pb-8' >
          <p className=' text-4xl font-bold  inline border-b-4 border-gray-500 '>Portfolio</p>
          <p className='py-6'>check out some  of my work right here </p>
        </div>

        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({ id, image, lang, title, code, live }) => (
              <div key={id} className=' shadow-md shadow-gray-600 rounded-lg '>
                <img src={image} alt="" className='p-3 rounded-3xl duration-200 hover:scale-105' />
                <h1 className='text-center py-2'>{lang}</h1>
                <h1 className='text-center text-2xl font-bold'>{title}</h1>
                <div className='flex items-center justify-center'>
                  <a href={code}><button className=' w-1/2 px-6  py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                  <a href={live}><button className='w-1/2 px-6  py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
                </div>
              </div>

            ))
          }

        </div>


      </div>
    </div>
  )
}

export default Portfolio