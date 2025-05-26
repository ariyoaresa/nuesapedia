import React from 'react'
import { Link } from 'react-router-dom'

const Level100courses = () => {
    const courses = [
        {
            coursecode: "CHM 101",
            coursename: "General Chemistry",
            courselink: "/courses/100level/chm101",
        },
        {
            coursecode: "CHM 102",
            coursename: "General Chemistry II",
            courselink: "/courses/100level/chm102",
        },
        {
            coursecode: "CPE 101",
            coursename: "Computers and computing for engineers.",
            courselink: "/courses/100level/cpe101",
        },
        {
            coursecode: "GST 101",
            coursename: "Communication in English I",
            courselink: "/courses/100level/gst101",
        },
        {
            coursecode: "GST 102",
            coursename: "Communication in English II",
            courselink: "/courses/100level/gst102",
        },
        {
            coursecode: "GST 103",
            coursename: "Use of Library and ICT",
            courselink: "/courses/100level/gst103",
        },
        {
            coursecode: "GST 105",
            coursename: "Introduction To Entrepreneurship.",
            courselink: "/courses/100level/gst105",
        },
        {
            coursecode: "GST 106",
            coursename: "Evaluation Opportunity And Business Concept.",
            courselink: "/courses/100level/gst106",
        },
        {
            coursecode: "GST 108/110",
            coursename: "Government Society & Economy.",
            courselink: "/courses/100level/gst108",
        },
        {
            coursecode: "MTH 101",
            coursename: "Elementary Mathematics I.",
            courselink: "/courses/100level/mth101",
        },
        {
            coursecode: "MTH 102",
            coursename: "Elementary Mathematics II",
            courselink: "/courses/100level/mth102",
        },
        {
            coursecode: "MTH 103",
            coursename: "Elementary Mathematics III",
            courselink: "/courses/100level/mth103",
        },
        {
            coursecode: "MTH 104",
            coursename: "Elementary Mathematics IV",
            courselink: "/courses/100level/mth104",
        },
        {
            coursecode: "PYH 101",
            coursename: "General Physics I.",
            courselink: "/courses/100level/phy101",
        },
        {
            coursecode: "PYH 102",
            coursename: "General Physics II",
            courselink: "/courses/100level/phy102",
        },
        {
            coursecode: "PYH 103",
            coursename: "General Physics III",
            courselink: "/courses/100level/phy103",
        },
        {
            coursecode: "PYH 104",
            coursename: "General Physics IV",
            courselink: "/courses/100level/phy104",
        },
    ]
    const firstsemester = courses
    .filter(course => {
        const lastChar = course.coursecode.slice(-1); // Get the last character
        return parseInt(lastChar) % 2 !== 0; // Check if it's an odd number
    });
    const secondsemester = courses
    .filter(course => {
        const lastChar = course.coursecode.slice(-1); // Get the last character
        return parseInt(lastChar) % 2 !== 1; // Check if it's an even number
    });
    return (
    <section className=''>
        <ul className='class="list-none p-0 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5'>
        <li className='font-bold text-lg'>1st Semester</li>
            {firstsemester.map((course, index) => (
                <li key={index} className="bg-white rounded-[10px] shadow-md transition-transform duration-300 hover:-translate-y-1 ease-in-out">
                    <Link to={course.courselink} className="block p-4">
                    <p className="font-bold text-green-700 mb-5">{course.coursecode}</p>
                    <p>{course.coursename}</p>
                    </Link>
                </li>
            ))}
        </ul>
        <ul className='class="list-none p-0 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5 my-4'>
        <li className='font-bold text-lg'>2nd Semester</li>
            {secondsemester.map((course, index) => (
                <li key={index} className="bg-white rounded-[10px] shadow-md transition-transform duration-300 hover:-translate-y-1 ease-in-out">
                    <Link to={course.courselink} className="block p-4">
                    <p className="font-bold text-green-700 mb-5">{course.coursecode}</p>
                    <p>{course.coursename}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Level100courses