import React, { useEffect, useRef } from 'react';
import { BiLogoCPlusPlus } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { CgFigma } from 'react-icons/cg';
import { DiCss3, DiFirebase, DiHtml5, DiJava, DiJavascript, DiJavascript1, DiMongodb, DiNodejs, DiReact } from 'react-icons/di';
import { SiExpress, SiFirebase, SiJavascript, SiTailwindcss } from 'react-icons/si';

const Education = () => {
  const text = 'text-sm lg:text-2xl bg-red-400 text-white lg:px-5 rounded-tl-badge rounded-br-badge px-3 lg:p-2';
  const photo = 'flex hover:animate-spin hover:text-red-400 rounded-full justify-center items-center w-7 h-7 md:w-12 md:h-12 border-2 border-green-400 text-green-400';
  const skills = ['Html', 'CSS', 'Tailwind', 'React', 'Node.js', 'Express', 'MongoDB', 'C', 'C++', 'Java', 'Javascript','Firebase','Github'];

  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-zoomIn');
            entry.target.classList.remove('animate-zoomOut');
          } else {
            entry.target.classList.add('animate-zoomOut');
            entry.target.classList.remove('animate-zoomIn');
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold to control when the animation should trigger
    );

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className='max-w-[60rem] mx-auto px-5'>
      <div className='max-w-[60rem] md:max-w-[60rem] mx-auto'>
        <p className='text-4xl text-center lg:text-7xl'> Skills</p>
        <div className='grid max-w-[60rem] mx-auto lg:grid-cols-4 grid-flow-col grid-rows-7 lg:grid-rows-3 gap-10 lg:gap-6 my-10'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='flex gap-2  bg-transparent transition-transform duration-300 hover:text-white hover:bg-none transform hover:scale-150 hover:-translate-y-1'
              ref={(el) => (elementsRef.current[index] = el)}
            >
              <a className={`${photo}`} href="#">
                {React.createElement(
                  {
                    Html: DiHtml5,
                    CSS: DiCss3,
                    Tailwind: SiTailwindcss,
                    React: DiReact,
                    'Node.js': DiNodejs,
                    Express: SiExpress,
                    MongoDB: DiMongodb,
                    C: BiLogoCPlusPlus,
                    'C++': BiLogoCPlusPlus,
                    Java: DiJava,
                    Javascript:DiJavascript1,
                    Figma: CgFigma,
                    Firebase: SiFirebase,
                    Github: BsGithub
                  }[skill] || 'div',
                  { size: 35 }
                )}
              </a>
              <p className={`${text}`}>{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='max-w-[30rem]  mx-auto'>
        <div className='lg:max-w-5xl mx-auto my-20'>
          <p className='text-4xl text-center my-8 max-w-3xl '>Educational Background</p>
          <ul className=" timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {[{
                year: '2023 to Now',
                degree: 'B.Sc. in Software Engineering',
                institution: 'Daffodil International University, Ashulia'
              }, {
                year: '2019 to 2021',
                degree: 'Higher Secondary School Certificate (HSC)',
                institution: 'Govt. Nazrul College, Trishal'
              }, {
                year: '2017 to 2019',
                degree: 'Secondary School Certificate (SSC)',
                institution: 'Trishal Govt. Nazrul Academy'
            }].map((edu, index) => (
              <li key={index} ref={(el) => (elementsRef.current[index + skills.length] = el)}>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className={`${index % 2 === 0 ? 'timeline-end' : 'timeline-start'} md:text-end mb-10`}>
                  <time className="font-mono italic ">{edu.year}</time>
                  <div className="text-lg font-black text-red-400">{edu.degree}</div>
                  {edu.institution}
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
