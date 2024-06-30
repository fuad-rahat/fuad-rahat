import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '/Projects/fuad-rahat/src/Home/homecss.css';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className='max-w-[21rem] md:max-w-[60rem] mx-auto'>
      <div></div>
      <div className='flex justify-center   py-10  -mb-14 -mt-10'>
        <img
          src="/formal.png"
          className='animate-float group shadow-3xl-800 bg-green-300 hover:bg-green-500 hover:shadow-4xl hover:shadow-green-400 transition-all duration-600 ease-in-out w-44 h-44 lg:w-96 lg:h-96 rounded-full border-dotted custom'
          alt=""
        />
      </div>
      <div className='home-content flex items-center justify-center max-w-sm md:max-w-6xl  md:-ml-0 text-center flex-col mt-3'>
        <p className='text-2xl text-center   lg:text-5xl my-2'>
          It's <span className='animate-zoomIn text-green-400'>Md.Muhtasim Fuad Rahat</span>
        </p>
        <p className='text-2xl text-center  text-animation lg:text-4xl my-2'>
          I'm a <span>
            <TypeAnimation
              sequence={['Web Developer', 500, 'Problem Solver', 500, 'Software Engineering Undergrad', 500]}
              style={{ fontSize: '1em', color: 'red' }}
              repeat={Infinity}
            />
          </span>
        </p>
        <p className='googlemia text-center  text-pretty w-9/12 text-xl text-orange-700'>
          Born in 2003 in Mymensingh, Bangladesh, I am passionate about the boundless creativity of web development. As a versatile web developer and relentless problem solver, I thrive on pushing boundaries and exploring new avenues in digital innovation. With a deep-rooted belief in the diversity and inspiration of web development, I embark on each project with a mission to redefine possibilities. Through continuous experimentation and thoughtful design, I aim to craft meaningful digital experiences that resonate and inspire.
        </p>

        <div className=' social-icons flex space-x-4 mt-4 mb-12'>
          <a className='flex justify-center items-center w-10 h-10 bg-transparent rounded-full border-2 border-green-400 text-green-400 transition-transform duration-300 ease-in-out hover:text-white hover:bg-black transform hover:scale-130 hover:-translate-y-1 hover:animate-spin' href="https://www.facebook.com/rahatfuad01/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          {/* <a className='flex justify-center items-center w-10 h-10 bg-transparent rounded-full border-2 border-green-400 text-green-400 transition-transform duration-300 ease-in-out hover:text-white hover:bg-black transform hover:scale-130 hover:-translate-y-1' href="">
            <i className="fa-brands fa-twitter"></i>
          </a> */}
          <a className='flex justify-center items-center w-10 h-10 bg-transparent rounded-full border-2 border-green-400 text-green-400 transition-transform duration-300 ease-in-out hover:text-white hover:bg-black transform hover:scale-130 hover:-translate-y-1 hover:animate-spin' href="https://www.linkedin.com/in/fuadrahat/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          {/* <a className='flex justify-center items-center w-10 h-10 bg-transparent rounded-full border-2 border-green-400 text-green-400 transition-transform duration-300 ease-in-out hover:text-white hover:bg-black transform hover:scale-130 hover:-translate-y-1' href="">
            <i className="fa-brands fa-whatsapp"></i>
          </a> */}
          <a className='flex justify-center items-center w-10 h-10 bg-transparent rounded-full border-2 border-green-400 text-green-400 transition-transform duration-300 ease-in-out hover:text-white hover:bg-black transform hover:scale-130 hover:-translate-y-1 hover:animate-spin' href="https://www.instagram.com/fuad.rahat/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className='flex justify-center items-center w-10 h-10 bg-transparent rounded-full border-2 border-green-400 text-green-400 transition-transform duration-300 ease-in-out hover:text-white hover:bg-black transform hover:scale-130 hover:-translate-y-1 hover:animate-spin' href="https://github.com/fuad-rahat">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <div className="navbar-end -mt-8 pb-3 ">
          <a href="https://www.linkedin.com/in/fuadrahat/" className="btn text-white bg-green-400">Hire Me</a>
        </div>
      </div>
      <div className=''>
      <div className='max-w-[58rem] mx-auto px-3'>
      <Education></Education>
      </div>
      <div className='max-w-[45rem] ml-10 mx-auto'>
      <Projects></Projects>
      </div>
      <div className='max-w-[20rem] md:max-w-[90rem] mb-10  mx-auto' >
      <Contact></Contact>
      </div>
      </div>
    </div>
  );
};

export default Home;
