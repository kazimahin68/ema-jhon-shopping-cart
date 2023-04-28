import React, { useContext, useState } from 'react';
import logo from '../../images/Logo.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);

    const handleSignOut = () =>{
        setError('');
        logOut()
        .then(result =>{})
        .catch(error =>{
            setError(error.message);
        })
    }
    return (
        <div className='bg-[#1C2B35] flex items-center justify-between p-3 rounded-xl'>
            <div className='md:hidden' onClick={ () => setOpen(!open)}>
                <span>{open === true ? <XMarkIcon className='text-black w-4 h-4'></XMarkIcon> :  <Bars3Icon className='text-black w-4 h-4'></Bars3Icon>}</span>
            </div>
            <img className='ms-4' src={logo} alt="" />
            <div className={`text-white flex flex-col md:flex-row text-left p-5 rounded-lg absolute md:static duration-500 bg-[#1C2B35] -ms-2 ${open ? 'top-24' : '-top-36'}`}>
            <Link className='me-4' to="/">Home</Link>
            <Link className='me-4' to="/order">Order</Link>
            <Link className='me-4' to="/">Order Review</Link>
            <Link className='me-4' to="">Manage Inventory</Link>
            {user ? <Link onClick={handleSignOut} className='me-4'>Sign Out</Link> : <Link className='me-4' to="/login">Login</Link>}
            </div>
        </div>
    );
};

export default Header;