import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Navbar/Sidebar';
import { HomeIcon, LogInIcon, LogOut, LogOutIcon } from 'lucide-react';
import CustomNavLink from '../Navbar/CustomNavLink';
import { FaGraduationCap } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { GrContact } from 'react-icons/gr';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';
import { enqueueSnackbar } from 'notistack';

const Main = () => {
    const {user,googleSign,logout}=useContext(AuthContext);
    const googleHandler=()=>{
        googleSign()
        .then(async(res)=>{
            const user=res.user;
            enqueueSnackbar('WellCome', { variant: 'success', autoHideDuration: 3000 });
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
    const logOutHandler=(e)=>{
        e.preventDefault();
    }
    return (
        <div className=''>
            <div className='fixed'>
                <Sidebar>
                    <CustomNavLink to='/' icon={<HomeIcon size={20} />} text="Home" />
                    <CustomNavLink className='' to='/education' icon={<FaGraduationCap size={20} />} text="Education" />
                    <CustomNavLink to='/projects' icon={<CgWebsite size={20} />} text="Projects" />
                    {/* <CustomNavLink to='/settings' icon={<FaPenClip size={20} />} text="Blog" /> */}
                    <CustomNavLink to='/contact' icon={<GrContact size={20} />} text="Contact" />
                    <div className="tooltip tooltip-right" data-tip="Admin Only">
                    {
                        user?.email ? <LogOutIcon className=' ml-3 mt-2 cursor-pointer' onClick={logout} size={20}></LogOutIcon> :<LogInIcon  className=' ml-3 mt-2 cursor-pointer' onClick={googleHandler} size={20}></LogInIcon>
                    }
                    </div>
                </Sidebar>
            </div>
            <div className=' overflow-x-hidden ml-[4rem] max-w-[50rem] lg:max-w-[90rem] mx-auto '> {/* Adjust margin to prevent content overlap */}
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
