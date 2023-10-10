'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const LoginForm = () => {
    const [info, setInfo] = useState({});
    const handleContactSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const updateInfo = {
            email,
            password
        }
        setInfo(updateInfo)
    }
    console.log(info)

    return (

        <section className='bg-gray-500'>
            <h2>{'Login >'}</h2>
            <div className='flex items-center  px-5 py-2 mx-auto mb-5 h-screen'>
                <div className='bg-gray-400 w-1/2 mx-auto rounded-lg '>

                    <div className=''>
                        <h2 className='text-center font-semibold text-2xl mb-5'>Sign in your account</h2>

                        <form onSubmit={handleContactSubmit} className=' w-3/4 mx-auto'>

                            <div className='flex flex-col mb-2 '>
                                <label className=''>User email</label>
                                <input type='email' name='email' className='border border-black rounded-lg ps-2 bg-slate-300 focus:outline-none h-10' placeholder='example@gmail.com' />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label className=''>password</label>
                                <input type='password' name='password' className='border border-black rounded-lg ps-2 bg-slate-300 focus:outline-none h-10 placeholder:' placeholder='********' />
                            </div>

                            <div className='flex items-center mb-5'>
                                <div>
                                    <input type='checkbox' name='checkbox' className='' required="" />
                                </div>
                                <div>
                                    <label> Remember me</label>
                                </div>
                                <div className='ps-44'>
                                    <Link href="/" className='text-blue-700 hover:underline'> Forget password ? </Link>
                                </div>


                            </div>
                            <div className='bg-blue-500  rounded-lg h-10 flex justify-center items-center mb-5'>
                                <button type='submit' className=' block text-center text-white font-medium'>Sign in</button>
                            </div>
                            <div className=' flex justify-items-center'>
                                <div>
                                    <p>Don't have an account yet? </p>
                                </div>
                                <div>
                                    <Link className='ps-5 hover:underline text-blue-700' href="/signup">Sign up</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LoginForm;