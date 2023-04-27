import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex items-center justify-center mt-32 flex-col'>
            <div className='border-[#95A0A7] border-2 rounded-lg p-11 w-5/12'>
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                </div>
                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="email" placeholder="Your Password" className="input input-bordered w-full" />
                </div>
                <button className="btn bg-[#ffe1b3] text-black w-full p-4 mt-11">Login</button>
                <p className='text-center mt-5'>New to ema-john?<span className='text-[#FF9900]'> <Link to='/signUp'>Create New Account</Link></span></p>
                <div className='flex justify-around items-center mt-5'>
                    <hr className='border-2 w-1/3' />
                    <p className='text-[#95A0A7]'>Or</p>
                    <hr className='border-2 w-1/3' />
                </div>
                <button className="btn btn-outline text-black w-full p-4 mt-11">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;