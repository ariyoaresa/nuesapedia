import React from 'react'
import Homehero from '../components/Homehero'
import HomeExpect from '../components/HomeExpect'
import HomeDownload from '../components/HomeDownload'
import HomeReviews from '../components/HomeReviews'
import HomeAbout from '../components/HomeAbout'
import TeamMembers from '../components/TeamMembers'

const Home = () => {
  return (
    <>
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