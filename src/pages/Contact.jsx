import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <section>
      <form method="post" className='flex justify-center flex-col' onSubmit={handleSubmit}>
        <div className='grid md:grid-cols-2 md:gap-5'>
          <div className='min-w-full'>
            <label htmlFor="name">Fullname:</label>
            <input id='name' name="fullname" placeholder='Full Name...' type="text" className='min-w-full' onChange={handleChange} value={formData.fullname} required />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input id='email' name='email' placeholder='Email address...' type="email" className='min-w-full' onChange={handleChange} value={formData.email} required />
          </div>
        </div>
        <div>
          <label htmlFor="message" className='align-top'>Message:</label>
          <textarea id='message' name='message' placeholder='Your message goes here...' type="text" className='w-full' onChange={handleChange} value={formData.message} required />
        </div>
        <input className='bg-green-700 p-2 rounded-md text-white' type="submit" value="Send Message" />
      </form>
    </section>
  )
}

export default Contact