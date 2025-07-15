import React from 'react'
import { Link } from 'react-router-dom';
import mainLogo from '../assets/mainLogo.png';

const Footer = () => {
  return (
    <>
    <footer className='flex items-center justify-between mt-20 py-5 border-t border-[#023766] px-6 md:px-10'>
        <Link to={"/"} className='flex flex-col items-center w-fit'>
            <img src={mainLogo} alt="" className='w-12' />
            <p className='text-xs text-[#023766] font-black'>BookTracker</p>
        </Link>
        <p className='font-medium text-sm text-gray-700'>
            Built by
            <a href="https://amir-sadik.netlify.app/" target='_blank' className='font-bold'> Amir Sadik</a>
        </p>
    </footer>
    </>
  )
}

export default Footer