import axios from 'axios';
import { LocateIcon } from 'lucide-react';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
import { FaLocationPin, FaLocationPinLock, FaMapLocation } from 'react-icons/fa6';
import { GrLocationPin } from 'react-icons/gr';
import { MdLocationCity } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import { TbLocationCheck } from 'react-icons/tb';

const Contact = () => {
    const [message,setMessage]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const contactHandler=async(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const message=e.target.message.value;
        const email=e.target.email.value;
        const msg={name,message,email};
        if (!name) {
            enqueueSnackbar('Name is required', { variant: 'error', autoHideDuration: 3000 });
            return;
        }
        if (!email) {
            enqueueSnackbar('Email is required', { variant: 'error', autoHideDuration: 3000 });
            return;
        }
        if (!message) {
            enqueueSnackbar('Message is required', { variant: 'error', autoHideDuration: 3000 });
            return;
        }

        try {
            const res = await axios.post('https://fuad-rahat-server.vercel.app/message', msg);
            console.log(res.data);
            enqueueSnackbar('Message Sent Successfully', { variant: 'success', autoHideDuration: 3000 });
            // Clear the form after successful submission
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = error.response?.data?.message || 'Error sending message. Please try again later.';
            enqueueSnackbar(errorMessage, { variant: 'error', autoHideDuration: 3000 });
        }
    }
    return (
        <div className='max-w-[30rem] px-5 my-20  md:max-w-[80rem] mx-auto'>
            <div className=' px-5 max-w-sm mx-auto md:h-[32rem] md:max-w-[60rem] border-2 border-green-500 rounded-2xl md:mt-5 '>
            
            <p className='text-3xl my-4 lg:my-0 lg:text-6xl font-semibold text-center'>Contact ME</p>
            <div className=' lg:flex  gap-10 justify-center items-center '>
                <div className=' flex text-xl flex-col justify-start items-start gap-2'>
                <p className='flex gap-2 justify-center items-center'><i className="fa-solid fa-location-dot"></i> Trishal,Mymensingh,Bangladesh</p>
                <p className='flex gap-2 justify-center items-center'><i className="fa-solid fa-envelope"></i>fuadrahat1@gmail.com</p>
                <p className='flex gap-2 justify-center items-center'><i className="fa-solid fa-phone"></i>01754677999</p>

                <div className='  social-icons flex space-x-4 mt-4 mb-12'>
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
                </div>
                <div className=' pb-2 '>
                <form action="" onSubmit={contactHandler}>
                    
                    
                   <div className=''>
                   <input
                            name='name'
                            type="text"
                            placeholder="Write Your Name"
                            className="input input-bordered input-success w-full  max-w-xl my-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                   
                    
                    <input
                            name='email'
                            type="email"
                            placeholder="Write Your Email"
                            className="input my-2 input-bordered input-success w-full max-w-xl"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    
                    
                        <textarea
                        name='message'
                        type="text"
                         className="textarea my-2 textarea-lg w-[15rem]  md:w-[36rem] textarea-success" 
                         placeholder="Write your message here"
                         value={message}
                         onChange={(e) => setMessage(e.target.value)}>
                         </textarea>
                   </div>
                    
                    <div className='flex justify-center items-center '>
                        <input type="submit" className='btn px-10  md:-ml-44 bg-green-500 text-white' value="Send" />
                    </div>
                    </form></div>
            </div>
        </div>
        </div>
    );
};

export default Contact;