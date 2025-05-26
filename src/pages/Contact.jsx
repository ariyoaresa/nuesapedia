import React from 'react'
import { Helmet } from 'react-helmet';
import { useState } from 'react'

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
    setFormData({
      fullname: "",
      email: "",
      message: "",
    })
  }
  return (
    <>
    <Helmet>
      <title>Contact | Nuesapedia</title>
      <meta
        name="description"
        content="Contact NUESA FUOYE. Stay in touch with Nuesapedia."
      />
      <meta name="keywords" content="nuesapedia contact, contact nuesapedia, contact nuesa, student tips, university advice, nuesa fuoye, nusapedia, study hacks" />
      <meta property="og:title" content="Nuesapedia contact" />
      <meta property="og:description" content="Tips and insights to help Nigerian students thrive in university." />
      <meta property="og:image" content="/images/contact-banner.jpg" />
      <link rel="canonical" href="https://nuesapedia.vercel.app/contact" />
    </Helmet>
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
        <input className='bg-green-700 p-2 rounded-md text-white cursor-pointer' type="submit" value="Send Message" />
      </form>
    </section>
    </>
  )
}

export default Contact