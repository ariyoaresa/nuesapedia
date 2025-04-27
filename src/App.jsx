import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Suspense } from 'react'

import './App.css'
import './index.css'
const Navbar = React.lazy(() => import ('./components/Navbar'));
const Footer = React.lazy(() =>import ('./components/Footer'));
const Home = React.lazy(() =>import('./pages/Home'));
const Blog = React.lazy(() =>import('./pages/Blog'));
const Contact = React.lazy(() =>import('./pages/Contact'));
const Course = React.lazy(() =>import('./pages/Course'));
const Level100 = React.lazy(() =>import('./pages/Level100'));
const Level200 = React.lazy(() =>import('./pages/Level200'));
const Level300 = React.lazy(() =>import('./pages/Level300'));



function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/courses' element={<Course/>} />
        <Route path='/courses/100level' element={<Level100/>} />
        <Route path='/courses/200level' element={<Level200/>} />
        <Route path='/courses/300level' element={<Level300/>} />

        {/* Catch all Not found pages
        <Route path="*" element={<NotFound />} />
         */}
        </Routes>
        </Suspense>
      </Router>
      <Footer/>
    </>
  )
}

export default App
