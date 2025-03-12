import React from 'react'

const Contact = () => {
  return (
    <section>
      <form method="post" className='flex justify-center flex-col'>
        <div className='flex'>
          <div>
            <label htmlFor="name">Fullname:</label>
            <input id='name' placeholder='Full Name...' type="text" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input id='email' placeholder='Email address...' type="email" />
          </div>
        </div>
        <div>
          <label htmlFor="message" className='align-top'>Message:</label>
          <textarea id='message' placeholder='Email address...' type="text" className='w-full'/>
        </div>
        <input className='bg-green-700 p-2 rounded-md text-white' type="submit" value="Send Message" />
      </form>
    </section>
  )
}

export default Contact