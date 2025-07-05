import React from 'react'
import { assets } from '../assets/assets'

const SignIn = () => {
  return (
    <>
    <div className='text-left mb-4'>
        <div className='flex gap-2'>

            <img src={assets.logo} alt="" className='w-12' />

            <div>
                <h1 className='text-2xl md:text-3xl font-bold'>
                    Welcome to Reading Tracker
                </h1>
                
                <p className='text-gray-600'>
                    Please sign in with your details!
                </p>
            </div>
            
        </div>

        {/* Form */}
        <form action="">

            {/* Email */}
            <div className='mt-4'>
                <div>
                    <label htmlFor="">Email</label>
                </div>
                <input type="text" placeholder='Email'
                className='w-full border border-gray-400 rounded p-2' />
            </div>

            {/* Password */}
            <div className='mt-4'>
                <div>
                    <label htmlFor="">Password</label>
                </div>
                <input type="text" placeholder='Password'
                className='w-full border border-gray-400 rounded p-2' />
            </div>

            {/* Button */}
            <button className='my-4 bg-blue-600 text-gray-200 w-full py-2 rounded'>
                Sign in
            </button>
        </form>

    </div>

    </>
  )
}

export default SignIn
