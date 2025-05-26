import React from 'react'
import { Link } from 'react-router-dom'

const Level200courses = () => {
    const courses = [
        {
            coursecode: "CVE 204",
            coursename: "Strength Of Material I.",
            courselink: "#",
        },
        {
            coursecode: "EEE 202",
            coursename: "Introduction To Electrical Engineering.",
            courselink: "#",
        },
        {
            coursecode: "EEE 204",
            coursename: "Basic Electrical Engineering.",
            courselink: "#",
        },
        {
            coursecode: "ENG 201",
            coursename: "Engineering Mathematics I.",
            courselink: "#",
        },
        {
            coursecode: "ENG 202",
            coursename: "Engineering Mathematics II",
            courselink: "#",
        },
        {
            coursecode: "ENG 203",
            coursename: "General Engineering Laboratory I.",
            courselink: "#",
        },
        {
            coursecode: "ENG 204",
            coursename: "General Engineering Laboratory II",
            courselink: "#",
        },
        {
            coursecode: "ENG 205",
            coursename: "Logic And Philosophy.",
            courselink: "/courses/200level/eng205",
        },
        {
            coursecode: "GST 202",
            coursename: "Peace Studies And Conflict Resolution.",
            courselink: "#",
        },
        {
            coursecode: "GST 203",
            coursename: "Feasibility Plan And Investment Decision making.",
            courselink: "#",
        },
        {
            coursecode: "GST 204",
            coursename: "Resource Management And Organization Behaviour.",
            courselink: "#",
        },
        {
            coursecode: "GST 205",
            coursename: "Logic And Philosophy.",
            courselink: "#",
        },
        {
            coursecode: "MEE 201",
            coursename: "Workshop Technology I.",
            courselink: "#",
        },
        {
            coursecode: "MEE 203",
            coursename: "Applied Mechanics.",
            courselink: "#",
        },
        {
            coursecode: "MEE 204",
            coursename: "Workshop Technology II.",
            courselink: "#",
        },
        {
            coursecode: "MEE 205",
            coursename: "Thermodynamics.",
            courselink: "#",
        },
        {
            coursecode: "MEE 206",
            coursename: "Fluid Mechanics I.",
            courselink: "#",
        },
        {
            coursecode: "MEE 207",
            coursename: "Engineering Drawing I.",
            courselink: "#",
        },
        {
            coursecode: "MEE 208",
            coursename: "Engineering Drawing II.",
            courselink: "#",
        },
        {
            coursecode: "MME 201",
            coursename: "Material Science.",
            courselink: "#",
        },
        {
            coursecode: "MTE 201",
            coursename: "Computer-aided Engineering I.",
            courselink: "#",
        },
        {
            coursecode: "MTE 204",
            coursename: "Computer-aided Engineering II.",
            courselink: "#",
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

export default Level200courses