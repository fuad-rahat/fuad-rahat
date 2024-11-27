import React from 'react';
import './homecss.css';
import { TypeAnimation } from 'react-type-animation';
import '/Compulsories/My Portfolio/fuad-rahat/src/Home/homecss.css';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-8">

      {/* Hero Section */}
      <section className="flex flex-col gap-20 md:flex-row justify-between items-center py-24 space-y-12 md:space-y-0">
        
        {/* Left Column: Name, Image, and Designation */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-8">
            <img
              src="/formal.png"  // Ensure image path is correct
              alt="Md. Muhtasim Fuad Rahat"
              className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-sky-600 shadow-xl object-cover transform hover:scale-110 transition-all duration-300"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-sky-800 mb-6">
            It's <span className="text-sky-600 text-6xl md:text-6xl">Md. Muhtasim Fuad Rahat</span>
          </h1>
          <p className="text-3xl md:text-4xl text-sky-700 font-semibold">
            I'm a{' '}
            <span className="text-sky-600">
              <TypeAnimation
                sequence={['Web Developer', 500, 'Problem Solver', 500, 'Software Engineering Undergrad', 500]}
                style={{ fontSize: '2rem', color: 'inherit' }}
                repeat={Infinity}
              />
            </span>
          </p>
        </div>

        {/* Right Column: Description, Call to Action, Social Links */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Passionate about web development's endless creativity, I specialize in pushing boundaries and exploring digital innovation. With a solid foundation in software engineering, I aim to create impactful, user-centric solutions.
          </p>

          {/* Call to Action */}
          <div className="flex justify-center md:justify-start gap-8 mb-14">
            <a
              href="https://www.linkedin.com/in/fuadrahat/"
              className="bg-sky-600 text-white py-3 px-8 rounded-lg text-xl font-medium hover:bg-sky-800 transition-all duration-300 ease-in-out"
            >
              Hire Me
            </a>
            <a
              href="/Resume.pdf"
              target='_blank'
              className="bg-blue-400 text-white py-3 px-8 rounded-lg text-xl font-medium hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-8">
            <a
              href="https://www.facebook.com/rahatfuad01/"
              className="text-sky-700 hover:text-white hover:bg-blue-600 w-12 h-12 bg-transparent rounded-full border-2 border-sky-700 flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/fuadrahat/"
              className="text-sky-700 hover:text-white hover:bg-blue-600 w-12 h-12 bg-transparent rounded-full border-2 border-sky-700 flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/fuad.rahat/"
              className="text-sky-700 hover:text-white hover:bg-blue-600 w-12 h-12 bg-transparent rounded-full border-2 border-sky-700 flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/fuad-rahat"
              className="text-sky-700 hover:text-white hover:bg-blue-600 w-12 h-12 bg-transparent rounded-full border-2 border-sky-700 flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Education, Projects, and Contact Sections */}
      <section className="my-16">
        <div className="max-w-[60rem] mx-auto">
          <Education />
        </div>
        <div className="max-w-[50rem] mx-auto mt-20">
          <Projects />
        </div>
        <div className="max-w-[95rem] mx-auto mt-20">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
