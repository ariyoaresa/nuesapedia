import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <>
    <Helmet>
      <title>Page Not Found</title>
      <meta name="description" content="CHM101 PDFs" />
      <meta name="keywords" content="nuesapedia, nuesa fuoye, nusapedia, study resources, student community" />
      <meta property="og:title" content="Nuesapedia | Your Ultimate Study Companion" />
      <meta property="og:description" content="Explore a wealth of resources tailored for Nigerian students." />
      <meta property="og:image" content="/images/home-banner.jpg" />
    </Helmet>
    <div className="flex flex-col items-center justify-center min-h-[80dvh] bg-gray-100 p-8">
      <h1 className="text-7xl font-bold text-green-600">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">Sorry, the page you're looking for does not exist.</p>
      <Link 
        to="/" 
        className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
    </>
  )
}

export default NotFound