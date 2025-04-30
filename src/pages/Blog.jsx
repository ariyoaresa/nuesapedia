import React from 'react'
import { Helmet } from 'react-helmet';
import BlogHero from '../components/BlogHero'
import BlogPosts from '../components/BlogPosts'

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Nuesapedia</title>
        <meta
          name="description"
          content="Read helpful articles, tips, and stories for NUESA FUOYE. Stay informed with the Nuesapedia blog."
        />
        <meta name="keywords" content="nuesapedia blog, student tips, university advice, nuesa fuoye, nusapedia, study hacks" />
        <meta property="og:title" content="Nuesapedia Blog" />
        <meta property="og:description" content="Tips and insights to help Nigerian students thrive in university." />
        <meta property="og:image" content="/images/blog-banner.jpg" />
        <link rel="canonical" href="https://nuesapedia.vercel.app/blog" />
      </Helmet>
      <BlogHero/>
      <BlogPosts/>
    </>
  )
}

export default Blog