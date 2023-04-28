import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { loggedIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    

    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        setError('');
        setSuccess('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loggedIn(email, password)
            .then(result => {
                const login = result.user;
                // console.log(login);
                setSuccess('You are successfully Logged In');
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <form onSubmit={handleLogin} className='flex items-center justify-center mt-32 flex-col'>
            <div className='border-[#95A0A7] border-2 rounded-lg p-11 w-5/12'>
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full" />
                </div>
                <div className='mt-5'>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Your Password" className="input input-bordered w-full" />
                </div>
                <p className='text-red-500'>{error}</p>
                <button className="btn bg-[#ffe1b3] text-black w-full p-4 mt-11">Login</button>
                <p className='text-green-500 mt-5'>{success}</p>
                <p className='text-center mt-5'>New to ema-john?<span className='text-[#FF9900]'> <Link to='/signUp'>Create New Account</Link></span></p>
                <div className='flex justify-around items-center mt-5'>
                    <hr className='border-2 w-1/3' />
                    <p className='text-[#95A0A7]'>Or</p>
                    <hr className='border-2 w-1/3' />
                </div>
                <button className="btn btn-outline text-black w-full p-4 mt-11">Continue with Google</button>
            </div>
        </form>
    );
};

export default Login;