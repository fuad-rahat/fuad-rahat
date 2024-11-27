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
