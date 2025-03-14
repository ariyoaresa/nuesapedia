import React from 'react'

const Level100courses = () => {
    const courses = [
        {
            coursecode: "CHM 101",
            coursename: "General Chemistry",
            courselink: "#",
        },
        {
            coursecode: "CHM 102",
            coursename: "General Chemistry II",
            courselink: "#",
        },
        {
            coursecode: "CPE 101",
            coursename: "Computers and computing for engineers.",
            courselink: "#",
        },
        {
            coursecode: "GST 101",
            coursename: "Communication in English I",
            courselink: "#",
        },
        {
            coursecode: "GST 102",
            coursename: "Communication in English II",
            courselink: "#",
        },
        {
            coursecode: "GST 103",
            coursename: "Use of Library and ICT",
            courselink: "#",
        },
        {
            coursecode: "GST 105",
            coursename: "Introduction To Entrepreneurship.",
            courselink: "#",
        },
        {
            coursecode: "GST 106",
            coursename: "Evaluation Opportunity And Business Concept.",
            courselink: "#",
        },
        {
            coursecode: "GST 108/110",
            coursename: "Government Society & Economy.",
            courselink: "#",
        },
        {
            coursecode: "MTH 101",
            coursename: "Elementary Mathematics I.",
            courselink: "#",
        },
        {
            coursecode: "MTH 102",
            coursename: "Elementary Mathematics II",
            courselink: "#",
        },
        {
            coursecode: "MTH 103",
            coursename: "Elementary Mathematics III",
            courselink: "#",
        },
        {
            coursecode: "MTH 104",
            coursename: "Elementary Mathematics IV",
            courselink: "#",
        },
        {
            coursecode: "PYH 101",
            coursename: "General Physics I.",
            courselink: "#",
        },
        {
            coursecode: "PYH 102",
            coursename: "General Physics II",
            courselink: "#",
        },
        {
            coursecode: "PYH 103",
            coursename: "General Physics III",
            courselink: "#",
        },
        {
            coursecode: "PYH 104",
            coursename: "General Physics IV",
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
        <h3>1st Semester</h3>
            {firstsemester.map((course, index) => (
                <li key={index} className="bg-white rounded-[10px] shadow-md transition-transform duration-300 hover:-translate-y-1 ease-in-out">
                    <a href={course.courselink} className="block p-4">
                    <p className="font-bold text-green-700 mb-5">{course.coursecode}</p>
                    <p>{course.coursename}</p>
                    </a>
                </li>
            ))}
        </ul>
        <ul className='class="list-none p-0 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5 my-4'>
        <h3>2nd Semester</h3>
            {secondsemester.map((course, index) => (
                <li key={index} className="bg-white rounded-[10px] shadow-md transition-transform duration-300 hover:-translate-y-1 ease-in-out">
                    <a href={course.courselink} className="block p-4">
                    <p className="font-bold text-green-700">{course.coursecode}</p>
                    <p>{course.coursename}</p>
                    </a>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Level100courses