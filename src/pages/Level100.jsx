import React from 'react'
import {Helmet} from 'react-helmet'
import Level100hero from '../components/Level100hero'
import Level100courses from '../components/Level100courses'

const Level100 = () => {
  return (
    <div>
      <>
      <Helmet>
          <title>100 level | Nuesapedia</title>
          <meta
            name="description"
            content="100level courses on Nuesapedia"
          />
          <meta name="keywords" content="nuesapedia, nuesa fuoye, nusapedia, study resources, student community" />
          <meta property="og:title" content="Nuesapedia | Your Ultimate Study Companion" />
          <meta property="og:description" content="Explore a wealth of resources tailored for Nigerian students." />
          <meta property="og:image" content="/images/home-banner.jpg" />
          <link rel="canonical" href="https://nuesapedia.vercel.app/courses/100level" />
        </Helmet>
        <Level100hero/>
        <Level100courses/>
      </>
    </div>
  )
}

export default Level100