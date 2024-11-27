import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Navbar/Sidebar';

import { HomeIcon, LogInIcon, LogOutIcon } from 'lucide-react';
import CustomNavLink from '../Navbar/CustomNavLink';
import { FaGraduationCap } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { GrContact } from 'react-icons/gr';
import { AuthContext } from '../Provider/AuthProvider';
import { enqueueSnackbar } from 'notistack';
import Particles from 'react-tsparticles';

const Main = () => {
    const { user, googleSign, logout } = useContext(AuthContext);

    const googleHandler = () => {
        googleSign()
            .then(async (res) => {
                const user = res.user;
                enqueueSnackbar('Welcome', { variant: 'success', autoHideDuration: 3000 });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const logOutHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className='relative'>
            {/* Particles Component */}
            <Particles
                id="tsparticles"
                options={{
                    fullScreen: { enable: true, zIndex: 0 }, // Ensure particles take full screen
                    particles: {
                        number: {
                            value: 50, // number of particles
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        shape: {
                            type: 'circle',
                        },
                        opacity: {
                            value: 0.7, // particles are a bit more opaque
                            random: true,
                            animation: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                            },
                        },
                        size: {
                            value: 3, // particle size
                            random: true,
                            animation: {
                                enable: true,
                                speed: 5,
                                minimumValue: 1,
                            },
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: 'none',
                            random: true,
                            straight: false,
                            outModes: {
                                default: 'out',
                            },
                        },
                        color: {
                            value: '#FFD700', // golden color to simulate fireflies
                        },
                        link: {
                            enable: false,
                        },
                    },
                }}
            />

            <div className='fixed z-10'>
                <Sidebar>
                    <CustomNavLink to='/' icon={<HomeIcon size={20} />} text="Home" />
                    <CustomNavLink to='/education' icon={<FaGraduationCap size={20} />} text="Education" />
                    <CustomNavLink to='/projects' icon={<CgWebsite size={20} />} text="Projects" />
                    <CustomNavLink to='/contact' icon={<GrContact size={20} />} text="Contact" />
                    {/* <div className="tooltip tooltip-right" data-tip="Admin Only">
                        {
                            user?.email
                                ? <LogOutIcon className='ml-3 mt-2 cursor-pointer' onClick={logout} size={20} />
                                : <LogInIcon className='ml-3 mt-2 cursor-pointer' onClick={googleHandler} size={20} />
                        }
                    </div> */}
                </Sidebar>
            </div>

            <div className='overflow-x-hidden bg-gray-200 ml-[4rem] max-w-[50rem] lg:max-w-[90rem] mx-auto'>
                {/* Main Content Area */}
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
