import React, { useState, useEffect, useRef } from 'react';
import useProjects from '../Hooks/useProjects';
import axios from 'axios';
import 'animate.css'; // Ensure animate.css is installed

const Projects = () => {
    const [picture, setPicture] = useState();
    const [uploadedUrl, setUploadedUrl] = useState('');
    const [title, setTitle] = useState('');
    const [webUrl, setWebUrl] = useState('');
    const [webTag, setWebTag] = useState('');

    const [projects, refetch] = useProjects();
    const projectRefs = useRef([]);

    const projectAdder = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const webUrl = e.target.webUrl.value;
        const webTag = e.target.webTag.value;
        const newfile = e.target.chobi.files;
        const image = newfile[0];
        const dta = new FormData();
        dta.append('image', image);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=ced893ddad33f7eb8d843cb8cc3e6879', {
                method: 'POST',
                body: dta
            });
            const res = await response.json();
            if (res && res.data && res.data.display_url) {
                setUploadedUrl(res.data.display_url);
                setTitle(title);
                setWebUrl(webUrl);
                setWebTag(webTag);
            }
        } catch (err) {
            console.error('Error uploading image:', err);
        }
    };

    useEffect(() => {
        if (uploadedUrl) {
            axios.post('https://fuad-rahat-server.vercel.app/photos', { title, url: uploadedUrl, webUrl, webTag })
                .then(res => {
                    setPicture(uploadedUrl);
                    setUploadedUrl('');
                    setTitle('');
                    setWebUrl('');
                    setWebTag('');
                    refetch();
                })
                .catch(err => {
                    console.error('Error saving image URL to database:', err);
                });
        }
    }, [uploadedUrl, refetch]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__fadeInUp');
                } else {
                    entry.target.classList.remove('animate__fadeInUp');
                }
            });
        }, {
            threshold: 0.1
        });

        projectRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [projects]);

    // Custom styles for enhanced visuals
    const cardStyle = 'transform transition-all duration-700 shadow-xl rounded-3xl shadow-slate-700 w-full h-80 bg-blue-400 overflow-hidden hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:cursor-pointer';
    const imageStyle = 'project-image rounded-t-3xl w-full h-2/3 object-cover transition-all duration-1000 ease-in-out transform hover:scale-125 hover:rotate-3 hover:object-top hover:shadow-2xl';
    const titleStyle = 'text-white font-extrabold text-2xl mb-2 transition-all duration-300 ease-in-out transform hover:text-yellow-400 hover:scale-105 hover:underline';
    const tagStyle = 'bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ease-in-out hover:bg-indigo-500 hover:text-white hover:scale-105';

    // Reverse the projects array without mutating the original one
    const reversedProjects = [...projects].reverse();

    return (
        <div className="py-12">
            <div className="md:max-w-[30rem] mx-auto">
                <p className="text-4xl text-center text-sky-700 mb-8">My Projects</p>
            </div>
            <div className="max-w-[17rem] md:max-w-[50rem] grid gap-12 mx-auto my-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center min-h-screen w-full px-4">
                {reversedProjects.map((project, index) => (
                    <div
                        key={project._id}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className="transform transition-all duration-1000"
                    >
                        <div className={`${cardStyle} animate__animated animate__fadeInUp`}>
                            <a href={project?.webUrl} target="_blank" rel="noopener noreferrer">
                                <img
                                    className={`${imageStyle}`}
                                    src={project.url}
                                    alt="Project Image"
                                />
                            </a>
                            <div className="p-3 mb-5">
                                <p className={`${titleStyle}`}>{project?.title}</p>
                                <div className="flex flex-wrap mb-2 gap-2">
                                    {project?.webTag.split(' ').map((tag, idx) => (
                                        <span key={idx} className={`${tagStyle}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
