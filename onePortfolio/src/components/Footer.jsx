import React from 'react'
import {
    FiFacebook,
    FiLinkedin,
    FiInstagram,
    FiGithub,
    FiTwitter,
    FiYoutube
} from 'react-icons/fi';

const Footer = () => {
    const footer = [
        {
            id: 1,
            icon: <FiLinkedin size={25} />,
            href: "https://www.linkedin.com/in/wasim-haider-559721244/",
        },
        {
            id: 2,
            icon: <FiGithub size={25} />,
            href: "https://github.com/wasimhaider55",
        },
        {
            id: 3,
            icon: <FiInstagram size={25} />,
            href: "https://instagram.com/wasimhaider14379?igshid=ZGUzMzM3NWJiOQ==",
        },
        {
            id: 4,
            icon: <FiFacebook size={25} />,
            href: "https://www.facebook.com/engrWasimKhan55/",
        },
        {
            id: 5,
            icon: <FiTwitter size={25} />,
            href: "https://twitter.com/WasimHa35327652?t=41PKrWnQOYBWJVaPeseNOw&s=09",
        },
        {
            id: 6,
            icon: <FiYoutube size={25} />,
            href: "https://www.youtube.com/@wmhshorts4943",
        }
    ]
    return (
        <footer className='w-full bg-gradient-to-t from-gray-900 to-black pt-10'>
            <div className='container mx-auto pb-5'>
                <div className='flex items-center justify-around'>

                    <div class="md:text-3xl text-2xl font-bold -tracking-wide ">
                        <span class="text-white from-white">
                            WMH
                        </span>
                    </div>

                    <div className='flex space-x-6 items-center justify-center'>
                        {
                            footer.map(({ id, icon, href }) => (
                                <a 
                                key={id}
                                 className=' text-white hover:text-rose-600 hover:scale-125 duration-300' href={href} >
                                    {icon} 
                                </a>

                            ))}
                    </div>

                    <p className=' hidden md:block text-white text-md'>
                        &copy;2023 Engr Wasim Haider
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer