import React from 'react'
import { Link } from 'react-router-dom'

const BlogPosts = () => {
  const posts = [
    {
      image: "https://placehold.jp/600x400.png",
      title: "Blog Title",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum delectus quas laboriosam, deserunt facere fuga blanditiis enim voluptas ",
      content: "#",
    },
    {
      image: "https://placehold.jp/600x400.png",
      title: "Blog Title",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum delectus quas laboriosam, deserunt facere fuga blanditiis enim voluptas ",
      content: "#",
    },
    {
      image: "https://placehold.jp/600x400.png",
      title: "Blog Title",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum delectus quas laboriosam, deserunt facere fuga blanditiis enim voluptas ",
      content: "#",
    },
    {
      image: "https://placehold.jp/600x400.png",
      title: "Blog Title",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum delectus quas laboriosam, deserunt facere fuga blanditiis enim voluptas ",
      content: "#",
    },
    {
      image: "https://placehold.jp/600x400.png",
      title: "Blog Title",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus excepturi, itaque commodi aspernatur dolore repudian.",
      content: "#",
    },
    {
      image: "https://placehold.jp/600x400.png",
      title: "Blog Title",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus excepturi, itaque commodi aspernatur dolore repudian.",
      content: "#",
    },
  ];
  return (
    <section id='articles'>
        <h2 className='font-bold mb-4 s'>Latest Blog Post</h2>
        <div className="grid my-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5" id='articles'>
        {posts.map((post, index) => (
            <article key={index} className="card shadow-md hover:-translate-y-2 ease-in-out transition-transform flex flex-col min-w-72 p-3 rounded-lg bg-white justify-center">
                <img src={post.image} alt="" className='rounded'/> 
                <h3 className='font-bold text-2xl mb-2'>{post.title}</h3>
                <p className='text-ellipsis overflow-hidden mb-2'>{post.description}</p>
                <Link to={post.content} className='bg-green-600 rounded-lg text-white text-center p-2'>Read More</Link>
            </article>
        ))}
        </div>
        <div className='my-4'><Link to="#" className="bg-green-700 p-4 rounded-lg text-white flex self-center justify-center">See more posts</Link></div>
    </section>
  )
}

export default BlogPosts