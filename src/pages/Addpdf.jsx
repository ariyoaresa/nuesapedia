import React from 'react'
import { Helmet } from 'react-helmet';

const Addpdf = () => {
  return (
    <>
        <Helmet>
            <title>Add a PDF | Nuesapedia</title>
            <meta
              name="description"
              content="Add PDFs to make Nuesapedia up to date."
            />
            <meta name="keywords" content="nuesapedia blog, student tips, university advice, nuesa fuoye, nusapedia, study hacks" />
            <meta property="og:title" content="Add a PDF to Nuesapedia" />
            <meta property="og:description" content="Tips and insights to help Nigerian students thrive in university." />
            <meta property="og:image" content="/images/blog-banner.jpg" />
            <link rel="canonical" href="https://nuesapedia.vercel.app/add-pdf" />
        </Helmet>
        <section>
          
            <form method="post" className='max-w-[500px] mx-auto p-6 bg-white shadow-lg rounded-lg my-0' autoComplete="off">
                <h2 className="font-bold font-italic">Coming Soon</h2>
                {/*
                <h2 className='font-bold'>Submit a PDF</h2>
                <p className='font-bold'>Submit a PDF you'd like to see on our site.</p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" className='w-full p-2 border border-gray-300 rounded mb-4' required />
                <label htmlFor="coursecode">Course Code</label>
                <input type="text" id="coursecode" name="coursecode" className='w-full p-2 border border-gray-300 rounded mb-4' required />
                <label htmlFor="level">Level(of the pdf)</label>
                <select id="level" name="level" className='w-full p-2 border border-gray-300 rounded mb-4' required>
                    <option value="">Select Level</option>
                    <option value="100">100 Level</option>
                    <option value="200">200 Level</option>
                    <option value="300">300 Level</option>
                    <option value="400">400 Level</option>
                    <option value="500">500 Level</option>
                </select>
                <label htmlFor="pdf">Upload PDF</label>
                <input type="file" id="pdf" name="pdf" className='w-full p-2 border border-gray-300 rounded mb-4' required />
                <input type="submit" value="Submit" className='w-full p-2 bg-green-500 text-white rounded hover:bg-green-600' />
            */}
                </form> 
        </section>
    </>
  )
}

export default Addpdf