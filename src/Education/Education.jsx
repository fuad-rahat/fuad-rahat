import React, { useEffect, useRef } from 'react';
import { BiLogoCPlusPlus } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { CgFigma } from 'react-icons/cg';
import { DiCss3, DiFirebase, DiHtml5, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiReact } from 'react-icons/di';
import { SiExpress, SiFirebase, SiJavascript, SiNextdotjs, SiMongoose, SiTailwindcss } from 'react-icons/si';

const Education = () => {
  const text = 'text-lg lg:text-2xl bg-gray-200 text-gray-700 lg:px-5 rounded-tl-badge rounded-br-badge px-4 lg:p-2';
  const photo = 'flex hover:animate-spin hover:text-red-400 rounded-full justify-center items-center w-14 h-14 md:w-20 md:h-20 border-2 border-sky-600 text-sky-600 transition-all ease-in-out duration-300 shadow-md hover:shadow-lg';
  
  const skills = ['Html', 'CSS', 'Tailwind', 'React', 'Node.js', 'Express', 'MongoDB', 'C', 'C++', 'Java', 'Javascript', 'Firebase', 'Github', 'Next.js', 'Mongoose'];

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
      { threshold: 0.1 }
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
    <div className="max-w-[70rem] mx-auto px-6 py-10 rounded-xl">
      {/* Skills Section */}
      <div className="text-center mb-16">
        <p className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">Skills</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 transition-all transform hover:scale-110 hover:translate-y-2 hover:rotate-6 duration-300"
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
                    Javascript: DiJavascript1,
                    Firebase: SiFirebase,
                    Github: BsGithub,
                    Figma: CgFigma,
                    'Next.js': SiNextdotjs,
                    Mongoose: SiMongoose
                  }[skill] || 'div',
                  { size: 40} // Ensuring icon color is inherited from the surrounding CSS or the default color
                )}
              </a>
              <p className={`${text}`}>{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-[40rem] mx-auto">
        <p className="text-3xl text-center font-semibold text-gray-800 mb-8">Educational Background</p>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {[{
              year: '2023 to Now',
              degree: 'B.Sc. in Software Engineering',
              institution: 'Daffodil International University, Ashulia',
            }, {
              year: '2019 to 2021',
              degree: 'Higher Secondary School Certificate (HSC)',
              institution: 'Govt. Nazrul College, Trishal',
            }, {
              year: '2017 to 2019',
              degree: 'Secondary School Certificate (SSC)',
              institution: 'Trishal Govt. Nazrul Academy',
            }].map((edu, index) => (
            <li key={index} ref={(el) => (elementsRef.current[index + skills.length] = el)} className="text-red-700">
              <div className="timeline-middle">
                {/* Adjust the line color by changing the `path` element's fill */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-blue-500">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={`${index % 2 === 0 ? 'timeline-end' : 'timeline-start'} md:text-end mb-8 text-blue-500`}>
                <time className="font-mono italic text-lg text-gray-600">{edu.year}</time>
                <div className="text-xl font-bold">{edu.degree}</div>
                <div className="text-gray-700">{edu.institution}</div>
              </div>
              {/* Adjust the line color using the border color of the hr */}
              <hr className="border-red-500" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
