import React, { useState } from 'react';
import logo from '../../images/Logo.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, Outlet } from 'react-router-dom';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-[#1C2B35] flex items-center justify-between p-3 rounded-xl'>
            <div className='md:hidden' onClick={ () => setOpen(!open)}>
                <span>{open === true ? <XMarkIcon className='text-white w-4 h-4'></XMarkIcon> :  <Bars3Icon className='text-white w-4 h-4'></Bars3Icon>}</span>
            </div>
            <img className='ms-4' src={logo} alt="" />
            <div className={`text-white flex flex-col md:flex-row text-left p-5 rounded-lg absolute md:static duration-500 bg-[#1C2B35] -ms-2 ${open ? 'top-24' : '-top-36'}`}>
            <Link className='me-4' to="/shop">Home</Link>
            <Link className='me-4' to="/order">Order</Link>
            <Link className='me-4' to="/">Order Review</Link>
            <Link className='me-4' to="">Manage Inventory</Link>
            <Link className='me-4' to="">Login</Link>
            </div>
        </div>
    );
};

export default Header;