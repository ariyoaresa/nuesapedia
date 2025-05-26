import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex bg-green-800 p-4 z-10 justify-between align-middle text-white sticky top-0 shadow-xl">
        <span className='text-white text-lg font-bold'>Logoipsum</span>
        <div className='hidden gap-2 list-none md:flex'>
            <li className='hover:underline'><Link to="/">Home</Link></li>
            <li className='hover:underline'><Link to="/courses">Courses</Link></li>
            <li className='hover:underline'><Link to="/contact">Contact</Link></li>
            <li className='hover:underline'><Link to="/blog">Blog</Link></li>
            <li className='hover:underline'><a href="https://github.com/ariyoaresa/nuesapedia">Contribute</a></li>
            <li className='hover:underline'><Link to="#">Add a PDF</Link></li>
        </div>
        <details  className='md:hidden'>
            <summary className='list-none cursor-pointer'>&#9776;</summary>
            <div className='flex flex-col justify-center items-center gap-2 list-none absolute right-2 bg-green-800 rounded-lg p-6 w-5/6'>
                <li className='hover:underline'><Link to="/">Home</Link></li>
                <li className='hover:underline'><Link to="/courses">Courses</Link></li>
                <li className='hover:underline'><Link to="/contact">Contact</Link></li>
                <li className='hover:underline'><Link to="/blog">Blog</Link></li>
                <li className='hover:underline'><a href="https://github.com/ariyoaresa/nuesapedia">Contribute</a></li>
                <li className='hover:underline'><Link to="#">Add a PDF</Link></li>
            </div>
        </details>
    </nav>
  )
}

export default Navbar