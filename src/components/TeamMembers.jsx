import React from 'react'
import Ariyo from '../assets/images/ariyo.jpg?format=webp'
import Jago from '../assets/images/jago.jpg?format=webp'
import NuesaLogo from '../assets/images/nuesa.jpeg?format=webp'
import Samshex from '../assets/images/samshex.jpg?format=webp'

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
      name: 'NUESA FUOYE 2024/2025 Executives',
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
                    <img src={member.image} alt={member.name} className='aspect-square rounded-full mb-2 w-24 object-cover' />
                    <h3 className='font-bold text-xl'>{member.name}</h3>
                    <p className='text-gray-600'>{member.title}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TeamMembers