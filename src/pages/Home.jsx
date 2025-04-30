import React from 'react'
import { Helmet } from 'react-helmet';
import Homehero from '../components/Homehero'
import HomeExpect from '../components/HomeExpect'
import HomeDownload from '../components/HomeDownload'
import HomeReviews from '../components/HomeReviews'
import HomeAbout from '../components/HomeAbout'
import TeamMembers from '../components/TeamMembers'

const Home = () => {
  return (
    <>
        <Helmet>
          <title>Nuesapedia | Your Ultimate Study Companion</title>
          <meta
            name="description"
            content="Nuesapedia is your ultimate study companion, providing comprehensive resources for Nigerian students. Explore our courses, blogs, and community today!"
          />
          <meta name="keywords" content="nuesapedia, nuesa fuoye, nusapedia, study resources, student community" />
          <meta property="og:title" content="Nuesapedia | Your Ultimate Study Companion" />
          <meta property="og:description" content="Explore a wealth of resources tailored for Nigerian students." />
          <meta property="og:image" content="/images/home-banner.jpg" />
          <link rel="canonical" href="https://nuesapedia.vercel.app/" />
        </Helmet>
        <Homehero/>
        <HomeExpect/>
        <HomeDownload/>
        <HomeReviews/>
        <HomeAbout/>
        <TeamMembers/>
    </>
  )
}

export default Home