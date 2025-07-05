import React from 'react'

const SignUp = () => {
  return (
    <>
        <div className='text-left mb-4'>
          <div className='flex gap-2'>
  
              <div>
                  <h1 className='text-2xl md:text-3xl font-bold'>
                      Create New Account
                  </h1>
                  
                  <p className='text-gray-600'>
                      Please enter details to create new account
                  </p>
              </div>
              
          </div>
  
          {/* Form */}
          <form action="">
  
              {/* First Name */}
              <div className='mt-4'>
                  <div>
                      <label htmlFor="first-name">First Name</label>
                  </div>
                  <input id='first-name' type="text" placeholder='First Name'
                  className='w-full border border-gray-400 rounded p-2' />
              </div>

              {/* Last Name */}
              <div className='mt-4'>
                  <div>
                      <label htmlFor="last-name">Last Name</label>
                  </div>
                  <input id='last-name' type="text" placeholder='Last Name'
                  className='w-full border border-gray-400 rounded p-2' />
              </div>

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
                  Sign Up
              </button>
          </form>
    
        </div>
    
        </>
  )
}

export default SignUp
