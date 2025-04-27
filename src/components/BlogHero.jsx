import React from 'react'
import BlogHeroImage from "../assets/images/news.png"

const BlogHero = () => {
  return (
    <section className='flex w-full md:p-20 justify-center'>
        <div className="flex max-w-2xl justify-center items-center gap-5 flex-wrap md:flex-nowrap">
            <img src={BlogHeroImage} alt="Blog Placholder" className='rounded-lg md:w-[200px] w-[300px]' />
            <div>
                <h2>Welcome to the Faculty Blog</h2>
                <p className='mb-2'>Stay updated with latest news, articles, and insights from our esteemed faculty members</p>
                <a href="#articles" className='bg-green-700 text-white rounded-md inline-block p-2'>Read Articles</a>
            </div>
        </div>
    </section>
  )
}

export default BlogHero