import React from 'react'
import { Helmet } from 'react-helmet'

const CourseMaterials = () => {
  const materials = [
    {
      title: "200L first semester past questions.pdf",
      content: "https://link.storjshare.io/raw/juhlgcomysljhw7yynzzvphmtjbq/nueapedia/200l%2F200l%201st%20semester%2Feng%20205/200L%20first%20semester%20past%20questions.pdf",
    },
    {
      title: "ENG 205 hand out class 1-5.pdf",
      content: "https://link.storjshare.io/raw/jv5a52i6rm3teidxqhcblyvxebcq/nueapedia/200l%2F200l%201st%20semester%2Feng%20205/ENG%20205%20hand%20out%20class%201-5.pdf",
    },
  ];
  return (
    <>
    <Helmet>
      <title>ENG205 | Nuesapedia</title>
      <meta name="description" content="ENG205 PDFs" />
      <meta name="keywords" content="nuesapedia, nuesa fuoye, nusapedia, study resources, student community" />
      <meta property="og:title" content="Nuesapedia | Your Ultimate Study Companion" />
      <meta property="og:description" content="Explore a wealth of resources tailored for Nigerian students." />
      <meta property="og:image" content="/images/home-banner.jpg" />
      <link rel="canonical" href="https://nuesapedia.vercel.app/courses/100level/eng205" />
    </Helmet>
    <section>
        <h2 className='font-bold mb-4 text-center'>Available PDFs</h2>
        <div className="flex flex-col my-4 gap-2" id='materials'>
        {materials.map((material, index) => (
            <div key={index} className="flex bg-green-700 justify-between p-2 rounded-lg">
                <h3 className='font-bold text-2xl mb-2 text-white'>{material.title}</h3>
                <a
                href={`${material.content}?download`} className='bg-green-600 rounded-lg text-white text-center p-2' download>Download</a>
            </div>
        ))}
        </div>
    </section>
    </>
  )
}

export default CourseMaterials