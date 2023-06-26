import React from 'react'

const Contact = () => {
    return (
        <section id='contact'
            className='w-full h-140 bg-gradient-to-b from-black to-gray-800  p-4 text-white pt-32'>
            <div className=' flex flex-col max-w-screen-lg justify-center mx-auto p-4 h-full'>
                <div className=' pb-8'>
                    <p className=' text-4xl font-bold border-b-4 border-gray-500 inline '>Contact</p>
                    <p className=' py-6'>Submit the form below to get in touch with me </p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/7f3af3e2-4f2b-45bf-9d0a-f3d2aca43886" method='POST' className=' flex flex-col w-full md:w-1/2 '>
                        <input type="text" name='name' placeholder='Enter Your Name '
                            className=' p-2  bg-transparent border-2 rounded-md  text-white focus:outline-none'
                        />
                        <input type="text" name='name' placeholder='Enter Phone Number'
                            className=' mt-4 p-2  bg-transparent border-2 rounded-md  text-white focus:outline-none'
                        />
                        <input type="text" name='email' placeholder='Enter Your Email '
                            className=' my-4 p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none'
                        />
                        <textarea name="message" rows="10" placeholder='Enter your message here!!!' className='p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none'></textarea>
                        <button className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  my-8 
                      mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact