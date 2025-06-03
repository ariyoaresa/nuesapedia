import React from 'react'
import { Helmet } from 'react-helmet'

const BlogPosts = () => {
  const materials = [
    {
      title: "CHM 101",
      content: "https://ariyoaresa.github.io",
    },
    {
      title: "CHM 101",
      content: "#",
    },
    {
      title: "CHM 101",
      content: "#",
    },
    {
      title: "CHM 101",
      content: "#",
    },
    {
      title: "CHM 101",
      content: "#",
    },
    {
      title: "CHM 101",
      content: "#",
    },
  ];
  return (
    <>
    <Helmet>
      <title>CHM101 | Nuesapedia</title>
      <meta name="description" content="CHM101 PDFs" />
      <meta name="keywords" content="nuesapedia, nuesa fuoye, nusapedia, study resources, student community" />
      <meta property="og:title" content="CHM101 | Nuesapedia" />
      <meta property="og:description" content="Explore a wealth of resources tailored for Nigerian students." />
      <meta property="og:image" content="/images/home-banner.jpg" />
      <link rel="canonical" href="https://nuesapedia.vercel.app/courses/100level/chm101" />
    </Helmet>
    <section>
        <h2 className='font-bold mb-4 text-center'>Available PDFs</h2>
        <div className="flex flex-col my-4 gap-2" id='materials'>
        {materials.map((material, index) => (
            <div key={index} className="flex md:flex-row flex-col bg-green-700 justify-between p-2 rounded-lg">
                <h3 className='font-bold text-2xl mb-2 text-white'>{material.title}</h3>
                <a href={`${material.content}?download`} className='bg-green-600 rounded-lg text-white text-center p-2' download>Download</a>
            </div>
        ))}
        </div>
    </section>
    </>
  )
}

export default BlogPosts