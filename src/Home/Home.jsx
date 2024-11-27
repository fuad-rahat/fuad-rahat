import React from 'react';
import './homecss.css';
import { TypeAnimation } from 'react-type-animation';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-8">

      {/* Hero Section */}
      <section className="flex flex-col gap-20 md:flex-row justify-between items-center py-16 md:py-24 space-y-8 md:space-y-0">

        {/* Left Column: Name, Image, and Designation */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-8">
            <img
              src="/formal.png"  // Ensure image path is correct
              alt="Md. Muhtasim Fuad Rahat"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-4 border-sky-600 shadow-xl object-cover transform hover:scale-110 transition-all duration-300"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-sky-800 mb-4">
            It's <span className="text-sky-600 text-5xl sm:text-6xl">Md. Muhtasim Fuad Rahat</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-sky-700 font-semibold">
            I'm a{' '}
            <span className="text-sky-600">
              <TypeAnimation
                sequence={['Web Developer', 500, 'Problem Solver', 500, 'Software Engineering Undergrad', 500]}
                style={{ fontSize: '1.5rem', color: 'inherit' }}
                repeat={Infinity}
              />
            </span>
          </p>
        </div>

        {/* Right Column: Description, Call to Action, Social Links */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-2">
            Passionate about web development's endless creativity, I specialize in pushing boundaries and exploring digital innovation. With a solid foundation in software engineering, I aim to create impactful, user-centric solutions.
          </p>

          {/* Call to Action */}
          <div className="flex justify-center md:justify-start gap-6 sm:gap-8 mb-12">
            <a
              href="https://www.linkedin.com/in/fuadrahat/"
              className="bg-sky-600 text-white py-3 px-8 rounded-lg text-lg sm:text-xl font-medium hover:bg-sky-800 transition-all duration-300 ease-in-out"
            >
              Hire Me
            </a>
            <a
              href="/Resume.pdf"
              target='_blank'
              className="bg-blue-400 text-white py-3 px-8 rounded-lg text-lg sm:text-xl font-medium hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 sm:space-x-8">
            <a
              href="https://www.facebook.com/rahatfuad01/"
              className="text-sky-700 hover:text-white hover:bg-blue-600 w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-full border-2 border-sky-700 flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/fuadrahat/"
              className="text-sky-700 hover:text-white hover:bg-blue-600 w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-full border-2 border-sky-700 flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/fuad.rahat/"
              className="text-sky-700 hover:text-white hover:bg-blue-600 w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-full border-2 border-sky-700 flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/fuad-rahat"
              className="text-sky-700 hover:text-white hover:bg-blue-600 w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-full border-2 border-sky-700 flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Education, Projects, and Contact Sections */}
      <section className="my-12 md:my-16">
        <div className="max-w-screen-lg mx-auto">
          <Education />
        </div>
        <div className="max-w-screen-lg mx-auto mt-12 md:mt-16">
          <Projects />
        </div>
        <div className="max-w-screen-lg mx-auto mt-12 md:mt-16">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
