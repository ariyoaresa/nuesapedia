import React from 'react'

const CoursesLevel = () => {
    const Levels = [
        {
            image: "https://placehold.jp/300x300.png",
            levelnumber: "100",
            levellink: "/courses/100level",
        },
        {
            image: "https://placehold.jp/300x300.png",
            levelnumber: "200",
            levellink: "#",
        },
        {
            image: "https://placehold.jp/300x300.png",
            levelnumber: "300",
            levellink: "#",
        },
        {
            image: "https://placehold.jp/300x300.png",
            levelnumber: "400",
            levellink: "#",
        },
        {
            image: "https://placehold.jp/300x300.png",
            levelnumber: "500",
            levellink: "#",
        },
    ]
  return (
    <>
        <div className="grid justify-center gap-5 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] p-5">
        {Levels.map((level, index) => (
            <a href={level.levellink} className="card rounded-md shadow-lg p-4 flex flex-shrink flex-grow flex-col min-w-[200px] justify-center items-center flex-start" key={index}>
                    <img src={level.image} alt="Level Image" className='rounded-sm' />
                    <p className="font-bold">{level.levelnumber} Level</p>
            </a>
        ))}
        </div>
    </>
  )
}

export default CoursesLevel