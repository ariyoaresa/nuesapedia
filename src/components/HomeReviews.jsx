import React from 'react'

const HomeReviews = () => {
  return (
    <section className='bg-green-800 text-white pt-6 pb-14'>
        <h2 className='text-center font-bold mb-7'>What Our Users Say</h2>
        <ul className='flex flex-wrap gap-5 p-3'>
            <li className='min-w-60 text-center bg-glass flex-1 rounded-xl p-5'><div>&ldquo;NuesaPedia has been a lifesaver for me. I've been able to access all the PDF files I need without any hassle.&rdquo;</div><span className='italic font-thin'>Mary Alebiosu</span></li>
            <li className='min-w-60 text-center bg-glass flex-1 rounded-xl p-5'><div>&ldquo;The user interface is so easy to navigate. I can find what I need in no time.&rdquo;</div><span className='italic font-thin'>Gabriel Odutola</span></li>
            <li className='min-w-60 text-center bg-glass flex-1 rounded-xl p-5'><div>&ldquo;I've always had to wait for exam period to get my PDFs. However, with the help of NuesaPedia life has been so much easier.&rdquo;</div><span className='italic font-thin'>Sarah Ikejiani</span></li>
        </ul>
    </section>
  )
}

export default HomeReviews