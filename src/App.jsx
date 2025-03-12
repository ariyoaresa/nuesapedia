import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Course from './pages/Course'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />a
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/courses' element={<Course/>} />

        {/* Catch all Not found pages
        <Route path="*" element={<NotFound />} />
         */}
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
