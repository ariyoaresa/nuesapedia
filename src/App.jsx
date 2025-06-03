import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop'

import './index.css';

const Navbar = React.lazy(() => import('./components/Navbar'));
const Footer = React.lazy(() => import('./components/Footer'));
const Home = React.lazy(() => import('./pages/Home'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Addpdf = React.lazy(() => import('./pages/Addpdf'));
const Course = React.lazy(() => import('./pages/Course'));
const Level100 = React.lazy(() => import('./pages/Level100'));
const Level200 = React.lazy(() => import('./pages/Level200'));
const Level300 = React.lazy(() => import('./pages/Level300'));
const Chm101 = React.lazy(() => import('./pages/Chm101'));
const Eng205 = React.lazy(() => import('./pages/Eng205'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-xl p-6 animate-pulse">
          <div className="w-10 h-10 border-4 border-dashed rounded-full border-green-500 animate-spin mb-4"></div>
          <p className="text-green-600 font-semibold">Nuesapedia is fetching your knowledge scrolls... 📚✨</p>
        </div>
      }>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-pdf" element={<Addpdf />} />
          <Route path='/courses' element={<Course />} />
          <Route path='/courses/100level' element={<Level100 />} />
          <Route path='/courses/200level' element={<Level200 />} />
          <Route path='/courses/300level' element={<Level300 />} />
          <Route path='/courses/100level/chm101' element={<Chm101 />} />
          <Route path='/courses/200level/eng205' element={<Eng205 />} />
          {/* Catch all NotFound pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App;
 