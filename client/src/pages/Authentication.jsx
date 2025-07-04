import React, { useState } from 'react'
import { assets } from '../assets/assets'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Authentication = () => {

    const [login, setLogin] = useState(false);

    return (
        <div className='flex flex-1 flex-col md:flex-row h-screen'>
        
            {/* Left Section */}
            <div className='relative flex-1 hidden md:block'>
                <img src={assets.logo} alt="" className='absolute top-4 left-4 w-12' />
                <img src={assets.reading} alt="" className='h-full w-full' />
            </div>

            {/* Right Section */}
            <div className='flex flex-1 items-center justify-center text-center'>
                {
                    !login ?

                    <div>
                        <SignIn/>
                        <p>
                            <span>Don't have an account? </span>
                            <button
                            onClick={() => setLogin(true)}
                            className='text-blue-600 font-medium'>
                                Sign Up
                            </button>
                        </p>
                    </div>
                    
                    :
                    
                    <div>
                        <SignUp/>
                        <p>
                            <span>Already have an account? </span>
                            <button
                            onClick={() => setLogin(false)}
                            className='text-blue-600 font-medium'>
                                Sign In
                            </button>
                        </p>
                    </div>
                }
            </div>

        </div>
    )
}

export default Authentication
