import React, { useState, useEffect, useRef } from 'react';
import useProjects from '../Hooks/useProjects';
import axios from 'axios';

const Projects = () => {
    const [picture, setPicture] = useState();
    const [uploadedUrl, setUploadedUrl] = useState('');
    const [title, setTitle] = useState('');
    const [webUrl, setWebUrl] = useState('');
    const [webTag, setWebTag] = useState('');

    const [projects, refetch] = useProjects();
    const projectRefs = useRef([]);

    console.log(projects);

    const projectAdder = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const webUrl = e.target.webUrl.value;
        const webTag = e.target.webTag.value;
        const newfile = e.target.chobi.files;
        const image = newfile[0];
        console.log(image);
        const dta = new FormData();
        dta.append('image', image);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=ced893ddad33f7eb8d843cb8cc3e6879', {
                method: 'POST',
                body: dta
            });
            const res = await response.json();
            if (res && res.data && res.data.display_url) {
                console.log(res.data.display_url);
                setUploadedUrl(res.data.display_url);
                setTitle(title);
                setWebUrl(webUrl);
                setWebTag(webTag);
            } else {
                console.error('Unexpected response structure:', res);
            }
        } catch (err) {
            console.error('Error uploading image:', err);
        }
    };

    useEffect(() => {
        if (uploadedUrl) {
            axios.post('https://fuad-rahat-server.vercel.app/photos', { title, url: uploadedUrl, webUrl, webTag })
                .then(res => {
                    console.log(res);
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
                    entry.target.classList.add('animate-doorOpen');
                } else {
                    entry.target.classList.remove('animate-doorOpen');
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

    const dibba = 'shadow-2xl rounded-2xl shadow-slate-700 w-60 h-72 pb-24 bg-green-300 overflow-hidden';
    const chobi = 'project-image rounded-2xl rounded-b-none w-full h-full object-cover transition-all duration-[1000ms] ease-in-out transform object-top hover:object-bottom will-change-transform';

    return (
        <div className=''>
            <div>
                <div className=' md:max-w-[30rem] mt-8  mx-auto'>
                    <p className='text-4xl text-center -mt-5 lg:-mt-0 lg:text-5xl text-green-400'>My Projects</p>
                </div>
                <div className="max-w-[17rem] md:max-w-[50rem] grid gap-20 mx-auto my-3 lg:-mt-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center min-h-screen w-full px-4">
                    {projects.map((project, index) => (
                        <div
                            key={project._id}
                            ref={(el) => (projectRefs.current[index] = el)}
                            className="transform transition-transform w-full"
                        >
                            <div className={`${dibba}`}>
                                <a href={project?.webUrl}>
                                    <img
                                        className={`${chobi}`}
                                        src={project.url}
                                        alt="Project Image"
                                    />
                                </a>
                                <div className='p-1'>
                                    <p className='text-orange-600 font-sans my-1'><span>{project?.title}</span></p>
                                    <div className='flex flex-wrap gap-1'>
                                        {project?.webTag.split(' ').map((tag, idx) => (
                                            <span key={idx} className='bg-blue-200 text-blue-700 px-2 py-1 rounded-md text-xs'>
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
        </div>
    );
};

export default Projects;
