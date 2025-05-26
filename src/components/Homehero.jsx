import React from 'react'
import { Link } from 'react-router-dom'
import Herobanner from '../assets/images/hero-banner.svg'


const Homehero = () => {
  return (
    <section className='md:p-10 p-6 flex flex-col md:flex-row justify-center items-center'>
    <div className='flex flex-col justify-center items-start gap-4 md:w-2/3 w-full p-4'>
        <h1 className='text-2xl font-bold'>Welcome to NuesaPedia!</h1>
        <p>Your one-stop resource for FUOYE engineering courses and study materials. We believe that access to information should be free and easy, and we strive to make it possible for students to access the resources they need without any hassle.</p><br />
        <div className='grid md:flex gap-2 w-full'>
            <Link to="/courses" className='bg-green-700 text-white p-2 rounded-lg w-full md:w-1/3 text-center'>Download PDF</Link>
            <Link to="#" className='bg-green-700 text-white p-2 rounded-lg w-full md:w-1/3 text-center'>Add a PDF</Link>
        </div>
    </div>
    <div className='md:w-1/3 w-full flex justify-center items-center p-4'>
      <img src={Herobanner} alt="Hero Banner" className='w-2/3 h-auto' />
    </div>
    </section>
  )
}

export default Homehero