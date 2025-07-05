import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='sticky top-0 py-1 px-6 md:px-12 lg:px-24 xl:px-32 border-b border-b-[#023766]'>

        <Link className='flex flex-col items-center w-1/6'>
            <img src={assets.logo} alt="" className='w-12' />
            <p className='text-xs text-[#023766] font-black'>ReadingTracker</p>
        </Link>

    </nav>
    </>
  )
}

export default Navbar
