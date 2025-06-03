import React from 'react'
import { Helmet } from 'react-helmet'
import Level200hero from '../components/Level200hero'
import Level200courses from '../components/Level200courses'

const Level200 = () => {
  return (
    <div>
      <>
      <Helmet>
                <title>200 level | Nuesapedia</title>
                <meta
                  name="description"
                  content="200level courses on Nuesapedia"
                />
                <meta name="keywords" content="nuesapedia, nuesa fuoye, nusapedia, study resources, student community" />
                <meta property="og:title" content="Nuesapedia | Your Ultimate Study Companion" />
                <meta property="og:description" content="Explore a wealth of resources tailored for Nigerian students." />
                <meta property="og:image" content="/images/home-banner.jpg" />
                <link rel="canonical" href="https://nuesapedia.vercel.app/courses/200level" />
              </Helmet>
        <Level200hero/>
        <Level200courses/>
      </>
    </div>
  )
}

export default Level200