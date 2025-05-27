import React from 'react'
import Ariyo from '../assets/images/ariyo.jpg'
import Jago from '../assets/images/jago.jpg'
import NuesaLogo from '../assets/images/nuesa.jpeg'
import Samshex from '../assets/images/samshex.jpg'

const TeamMembers = () => {
  const Team = [
    {
      name: 'Olatunji-Aresa Ariyo',
      title: 'Founder/Lead Developer',
      image: Ariyo
    },
    {
      name: 'Animashaun Abdul Qoyum',
      title: 'Initiator',
      image: Jago
    },
    {
      name: 'Ajayi Olusegun',
      title: 'Sponsor',
      image: Samshex
    },
    {
      name: 'Nuesa 2024/2025 Executives',
      title: 'Sponsor',
      image: NuesaLogo
    },
  ]
  return (
    <section>
        <h2>Team Members</h2>
        {/* Add images, name and title of team members, sponsors and so on */}
        <div className="grid md:grid-cols-3 gap-5 my-4">
            {Team.map((member, index) => (
                <div key={index} className="card shadow-md hover:-translate-y-2 ease-in-out transition-transform flex flex-col lg:min-w-64 p-3 rounded-lg bg-white justify-center items-center">
                    <img src={member.image} alt={member.name} className='rounded-full w-24 h-24 mb-2' />
                    <h3 className='font-bold text-xl'>{member.name}</h3>
                    <p className='text-gray-600'>{member.title}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TeamMembers