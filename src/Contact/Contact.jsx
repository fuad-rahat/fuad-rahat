import axios from 'axios';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useState } from 'react';

const Contact = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const contactHandler = async (e) => {
        e.preventDefault();

        // Validate form fields before submitting
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

        // Prepare the message data to send
        const msg = { name, message, email };

        try {
            const res = await axios.post('https://fuad-rahat-server.vercel.app/message', msg);
            console.log(res.data);
            enqueueSnackbar('Message Sent Successfully', { variant: 'success', autoHideDuration: 3000 });

            // Clear the form fields after successful submission
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = error.response?.data?.message || 'Error sending message. Please try again later.';
            enqueueSnackbar(errorMessage, { variant: 'error', autoHideDuration: 3000 });
        }
    };

    return (
        <div className="max-w-[30rem] px-5 my-8 md:max-w-[80rem] mx-auto">
            <div className="bg-blue-200 border-2 border-sky-500 rounded-2xl p-5 md:p-10">
                <p className="text-3xl lg:text-4xl font-semibold text-center mb-6">Contact ME</p>
                <div className="lg:flex lg:gap-10 lg:justify-center items-center">
                    {/* Contact Info Section */}
                    <div className="flex flex-col gap-3 mb-6 lg:mb-0 text-xl">
                        <p className="flex gap-2 items-center"><i className="fa-solid fa-location-dot"></i> Trishal, Mymensingh, Bangladesh</p>
                        <p className="flex gap-2 items-center"><i className="fa-solid fa-envelope"></i> fuadrahat01@gmail.com</p>
                        <p className="flex gap-2 items-center"><i className="fa-solid fa-phone"></i> 01754677999</p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-6 mb-12">
                            <a className="w-10 h-10 flex justify-center items-center bg-transparent border-2 border-sky-700 text-sky-700 rounded-full transition-transform hover:text-white hover:bg-black transform hover:scale-125" href="https://www.facebook.com/rahatfuad01/">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a className="w-10 h-10 flex justify-center items-center bg-transparent border-2 border-sky-700 text-sky-700 rounded-full transition-transform hover:text-white hover:bg-black transform hover:scale-125" href="https://www.linkedin.com/in/fuadrahat/">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a className="w-10 h-10 flex justify-center items-center bg-transparent border-2 border-sky-700 text-sky-700 rounded-full transition-transform hover:text-white hover:bg-black transform hover:scale-125" href="https://www.instagram.com/fuad.rahat/">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a className="w-10 h-10 flex justify-center items-center bg-transparent border-2 border-sky-700 text-sky-700 rounded-full transition-transform hover:text-white hover:bg-black transform hover:scale-125" href="https://github.com/fuad-rahat">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full md:w-96">
                        <form onSubmit={contactHandler}>
                            <div className="space-y-4">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Write Your Name"
                                    className="input input-bordered input-success w-full"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Write Your Email"
                                    className="input input-bordered input-success w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <textarea
                                    name="message"
                                    placeholder="Write your message here"
                                    className="textarea textarea-lg textarea-success w-full"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-center mt-6">
                                <input type="submit" className="btn bg-sky-500 text-white px-10" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactPage = () => (
    <SnackbarProvider maxSnack={3}>
        <Contact />
    </SnackbarProvider>
);

export default ContactPage;
