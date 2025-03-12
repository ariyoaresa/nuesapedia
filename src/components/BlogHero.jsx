import React from 'react'
import BlogHeroImage from "../assets/images/news.png"

const BlogHero = () => {
  return (
    <section className='flex w-full md:p-20 justify-center'>
        <div className="flex max-w-2xl justify-center items-center gap-5 flex-wrap md:flex-nowrap">
            <img src={BlogHeroImage} alt="Blog Placholder" className='rounded-lg md:w-[200px] w-[300px]' />
            <div>
                <h2>Welcome to the Faculty Blog</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus tempore, neque laboriosam, id beatae doloribus quod pariatur deserunt maiores nam sint. Quisquam id eaque distinctio officia iste laboriosam reprehenderit.</p>
            </div>
        </div>
    </section>
  )
}

export default BlogHero