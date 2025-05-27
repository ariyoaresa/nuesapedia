import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BlogHeroImage from "../assets/images/news.png"

const BlogHero = () => {
  return (
    <motion.section className='flex w-full md:p-20 justify-center'
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}>
        <div className="flex max-w-2xl justify-center items-center gap-5 flex-wrap md:flex-nowrap">
            <img src={BlogHeroImage} alt="Blog Placholder" className='rounded-lg md:w-[200px] w-[300px]' />
            <div>
                <h2>Welcome to the Faculty Blog</h2>
                <p className='mb-2'>Stay updated with latest news, articles, and insights from our esteemed faculty members</p>
                <Link to="#articles" className='bg-green-700 text-white rounded-md inline-block p-2'>Read Articles</Link>
            </div>
        </div>
    </motion.section>
  )
}

export default BlogHero