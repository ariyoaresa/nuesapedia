import React from 'react'
import Level100 from '../assets/images/100-level.webp?format=webp'
import Level200 from '../assets/images/200-level.webp?format=webp'
import Level300 from '../assets/images/300-level.webp?format=webp'
import Level400 from '../assets/images/400-level.webp?format=webp'
import Level500 from '../assets/images/500-level.webp?format=webp'
import { Link } from 'react-router-dom'

const CoursesLevel = () => {
    const Levels = [
        {
            image: Level100,
            levelnumber: "100",
            levellink: "/courses/100level",
        },
        {
            image: Level200,
            levelnumber: "200",
            levellink: "/courses/200level",
        },
        {
            image: Level300,
            levelnumber: "300",
            levellink: "/courses/300level",
        },
        {
            image: Level400,
            levelnumber: "400",
            levellink: "#",
        },
        {
            image: Level500,
            levelnumber: "500",
            levellink: "#",
        },
    ]
  return (
    <>
        <div className="grid justify-center gap-5 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] p-5">
        {Levels.map((level, index) => (
            <Link to={level.levellink} className="card rounded-md shadow-lg p-4 flex flex-shrink flex-grow flex-col min-w-[200px] justify-center items-center flex-start" key={index}>
                    <img src={level.image} alt="Level Image" className='rounded-sm' />
                    <p className="font-bold">{level.levelnumber} Level</p>
            </Link>
        ))}
        </div>
    </>
  )
}

export default CoursesLevel