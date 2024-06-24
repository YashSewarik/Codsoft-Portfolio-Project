import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">
            

            <main className="main-content p-8 text-center">
                <section className="intro mb-8">
                    <h2 className="text-3xl mb-4">Welcome to My Portfolio</h2>
                    <p className="text-lg">Hi, I'm Anon, a passionate developer specializing in web development, data analysis, and more. Explore my portfolio to learn more about my skills and projects.</p>
                </section>

                <section className="skills-preview mb-8">
                    <h3 className="text-2xl mb-4">My Skills</h3>
                    <p className="text-lg">Here are a few of my key skills:</p>
                    <ul className="list-none flex justify-center space-x-4">
                        <li className="p-2 bg-gray-200 rounded">Python</li>
                        <li className="p-2 bg-gray-200 rounded">C++</li>
                        <li className="p-2 bg-gray-200 rounded">Flask</li>
                        <li className="p-2 bg-gray-200 rounded">React</li>
                        <li className="p-2 bg-gray-200 rounded">Express.js</li>
                        <li className="p-2 bg-gray-200 rounded">Data Analysis</li>
                        <li className="p-2 bg-gray-200 rounded">Excel</li>
                    </ul>
                    <p className="mt-4"><Link className="text-blue-500" to="/skills">See all skills</Link></p>
                </section>

                <section className="projects-preview mb-8">
                    <h3 className="text-2xl mb-4">Featured Projects</h3>
                    <p className="text-lg">Check out some of my latest projects:</p>
                    <div className="projects-list flex justify-center space-x-4">
                        <div className="project-card p-4 bg-gray-200 rounded">
                            <h4 className="text-xl mb-2">Project 1</h4>
                            <p>A brief description of Project 1.</p>
                        </div>
                        <div className="project-card p-4 bg-gray-200 rounded">
                            <h4 className="text-xl mb-2">Project 2</h4>
                            <p>A brief description of Project 2.</p>
                        </div>
                        <div className="project-card p-4 bg-gray-200 rounded">
                            <h4 className="text-xl mb-2">Project 3</h4>
                            <p>A brief description of Project 3.</p>
                        </div>
                    </div>
                    <p className="mt-4"><Link className="text-blue-500" to="/projects">See all projects</Link></p>
                </section>

                <section className="contact-preview mb-8">
                    <h3 className="text-2xl mb-4">Get in Touch</h3>
                    <p className="text-lg">I'd love to hear from you! Feel free to <Link className="text-blue-500" to="/contact">contact me</Link> for any inquiries or collaborations.</p>
                </section>
            </main>

            
        </div>
    );
}
