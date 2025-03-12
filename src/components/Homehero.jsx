import React from 'react'

const Homehero = () => {
  return (
    <section className='md:p-14'>
    <div>
        <h1 className='text-2xl font-bold'>Welcome to NuesaPedia!</h1>
        <p>Your one-stop resource for FUOYE engineering courses and study materials. We believe that access to information should be free and easy, and we strive to make it possible for students to access the resources they need without any hassle.</p><br />
        <div className='flex gap-2'>
            <a href="/courses" className='bg-green-700 text-white p-2 rounded-3xl'>Download PDF</a>
            <a href="#" className='bg-green-700 text-white p-2 rounded-3xl'>Add a PDF</a>
        </div>
    </div>
    </section>
  )
}

export default Homehero