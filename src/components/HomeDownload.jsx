import React from 'react'
import { Link } from 'react-router-dom'

const HomeDownload = () => {
  return (
    <section className='text-center p-14'>
        <h2 className='font-bold'>Start Downloading Now!</h2>
        <p className='mb-3'>Click on the button below to start downloading your preferred PDF files.</p>
        <Link to="./courses" className='bg-green-800 text-white font-bold inline-block rounded-md px-6 py-3'>Download Now</Link>
    </section>
  )
}

export default HomeDownload