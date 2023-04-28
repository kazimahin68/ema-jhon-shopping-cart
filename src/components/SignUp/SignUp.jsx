import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const SignUp = () => {

    const { createUser, handleGoogleLogin } = useContext(AuthContext);


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            setError("Your Password din't match");
            return;
        }

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser);
                setSuccess('You are successfully registered')
                form.reset()
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }

    const handleGoogleSignUp = () =>{
        handleGoogleLogin()
            .then(result =>{
                setSuccess('You are Successfully Register')
            })
            .catch(error =>{
                setError(error.message)
            })
    }



    return (
        <form onSubmit={handleSignUp}>
            <div className='flex items-center justify-center mt-32 flex-col'>
                <div className='border-[#95A0A7] border-2 rounded-lg p-11 w-5/12'>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full" />
                    </div>
                    <div className='mt-5'>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your Password" className="input input-bordered w-full" />
                    </div>
                    <div className='mt-5'>
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name='confirmPassword' placeholder="Retype your Password" className="input input-bordered w-full" />
                    </div>
                    <p className='text-red-500'>{error}</p>
                    <button className="btn bg-[#ffe1b3] text-black w-full p-4 mt-11">Register</button>
                    <p className='text-green-500 mt-5'>{success}</p>
                    <p className='text-center mt-5'>Already Have an account?<span className='text-[#FF9900]'> <Link to='/login'>Login</Link></span></p>
                    <div className='flex justify-around items-center mt-5'>
                        <hr className='border-2 w-1/3' />
                        <p className='text-[#95A0A7]'>Or</p>
                        <hr className='border-2 w-1/3' />
                    </div>
                    <button onClick={handleGoogleSignUp} className="btn btn-outline text-black w-full p-4 mt-11">Continue with Google</button>
                </div>
            </div>
        </form>
    );
};

export default SignUp;