import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: ""
        },
        onSubmit: (value) => {
            alert("successfully rigestered!!!")
        },
        validationSchema: Yup.object({
            name:
                Yup.string()
                    .required(),
            phone:
                Yup.number()
                    .required(),
            email:
                Yup.string()
                    .email()
                    .required(),
        })
    })
    return (
        <section id='contact'
            className='w-full h-140 bg-gradient-to-b from-black to-gray-800  p-4 text-white pt-10 '>
            <div className=' flex flex-col max-w-screen-lg justify-center mx-auto p-4 h-full'>
                <div className=' pb-8'>
                    <p className=' text-4xl font-bold border-b-4 border-gray-500 inline '>Contact</p>
                    <p className=' py-6'>Submit the form below to get in touch with me </p>
                </div>
                <div className='flex justify-center items-center'>
                    <form
                        action="https://getform.io/f/7f3af3e2-4f2b-45bf-9d0a-f3d2aca43886"
                        method='POST'
                        className=' flex flex-col w-full md:w-1/2 '>
                        <div className='flex justify-between gap-4'>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                required placeholder='Enter Your Name '
                                value={formik.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className=' p-2 w-full bg-transparent border-2 rounded-md  text-white focus:outline-none'
                            />
                            {formik.touched.name && formik.errors.name ? formik.errors.name : null}
                            <input
                                type='text'
                                name='phone'
                                id='phone'
                                required placeholder='Enter Phone Number'
                                value={formik.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className=' p-2 w-full bg-transparent border-2 rounded-md  text-white focus:outline-none'
                            />
                            {formik.touched.phone && formik.errors.phone ? formik.errors.name : null}
                        </div>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            required placeholder='Enter Your Email '
                            value={formik.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className=' my-4 p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none'
                        />
                        {formik.touched.email && formik.errors.email ? formik.errors.name : null}
                        <textarea
                            name="message"
                            rows="10"
                            placeholder='Enter your message here!!!'
                            className='p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none'>
                        </textarea>
                        <button
                            type="submit"
                            className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  my-8 
                                mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact