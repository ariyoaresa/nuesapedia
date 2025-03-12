import React from 'react'

const Footer = () => {
  return (
    <section className='bg-green-800 text-center text-white p-4'>
        <p>&copy; {new Date().getFullYear()} NuesaPedia</p>
        <p>Created with ❤ by Ariyo Aresa</p>
    </section>
  )
}

export default Footer