import React from 'react'
import {
    FiFacebook,
    FiLinkedin,
    FiInstagram,
    FiGithub,
    FiTwitter
} from 'react-icons/fi';

const Footer = () => {
    const footer = [
        {
            id: 1,
            icon: <FiLinkedin />,
            href: "https://www.linkedin.com/in/hikmat-bangash-84415821a/",
        },
        {
            id: 2,
            icon: <FiGithub />,
            href: "https://github.com/Hikmat-Bangash",
        },
        {
            id: 3,
            icon: <FiInstagram />,
            href: "https://www.instagram.com/hikmatbangash88/",
        },
        {
            id: 4,
            icon: <FiFacebook />,
            href: "https://web.facebook.com/hikmatkhan.bangash/",
        },
        {
            id: 5,
            icon: <FiTwitter />,
            href: "https://twitter.com/HikmatkhanBang5",
        }
    ]
    return (
        <footer className='w-full bg-gradient-to-t from-gray-900 to-black pt-10'>
            <div className='container mx-auto pb-5'>
                <div className='flex items-center justify-around'>

                    <div class="md:text-3xl text-2xl font-bold -tracking-wide ">
                        <span class=" text-white from-white">
                            WMH
                        </span>
                    </div>

                    <div className='flex space-x-6 items-center justify-center'>
                        {
                            footer.map(({ id, icon, href }) => (
                                <a key={id} className=' text-white hover:text-cyan-500 hover:scale-125 duration-300' href={href} >
                                    {icon}
                                </a>

                            ))}
                    </div>

                    <p className=' hidden md:block text-white text-md'>
                        &copy;2023 Wasim Haider
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer