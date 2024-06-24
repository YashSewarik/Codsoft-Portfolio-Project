import React from "react";

export default function Skills() {
    const skills = [
        "Python",
        "C++",
        "Flask",
        "Web Development",
        "React",
        "Express.js",
        "Data Analysis",
        "Excel"
    ];

    return (
        <div className="skills-container text-center m-4 p-4 bg-gray-100">
            <h1 className="text-4xl mb-4">Skills</h1>
            <ul className="list-none">
                {skills.map((skill, index) => (
                    <li key={index} className="text-2xl m-2 p-2 bg-gray-200 rounded">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}
