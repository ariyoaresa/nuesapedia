import React from 'react'
import { Helmet } from 'react-helmet';
import CoursesLevel from '../components/CoursesLevel'

const Course = () => {
  return (
    <>
    <Helmet>
      <title>Courses | Nuesapedia</title>
      <meta name="description" content="CHM101 PDFs" />
      <meta name="keywords" content="nuesapedia, nuesa fuoye, nusapedia, study resources, student community" />
      <meta property="og:title" content="Nuesapedia | Your Ultimate Study Companion" />
      <meta property="og:description" content="Explore a wealth of resources tailored for Nigerian students." />
      <meta property="og:image" content="/images/home-banner.jpg" />
      <link rel="canonical" href="https://nuesapedia.vercel.app/courses/" />
    </Helmet>
    <section>
      <CoursesLevel/>
    </section>
    </>
  )
}

export default Course