import React from 'react'

const CoursesLevel = () => {
    const Levels = [
        {
            image: "https://placehold.jp/300x300.png",
            levelnumber: "100",
            levellink: "#",
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
        <div className="flex gap-4 flex-wrap">
        {Levels.map((level, index) => (
            <a src={level.levellink} className="card rounded-md" key={index}>
                    <img src={level.image} alt="Level Image" />
                    <p>{level.levelnumber} Level</p>
            </a>
        ))}
        </div>
    </>
  )
}

export default CoursesLevel