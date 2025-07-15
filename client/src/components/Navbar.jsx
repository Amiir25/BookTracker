import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import mainLogo from '../assets/mainLogo.png';

const Navbar = () => {

  const navLinks = [
    {name: "Books", path: "/books"},
    {name: "Recomendations", path: "/recomendations"},
    {name: "Reviews", path: "/reviews"},
  ];

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between py-1 border-b border-b-[#023766]'>

        <div className='flex items-center gap-4 w-1/6 px-6' >

          {/* Menu icon */}
          {/* <FontAwesomeIcon icon={faBars} size='xl' className='md:!hidden'
            onClick={() => setMobileMenu(!mobileMenu)} /> */}

          {/* Logo */}
          <Link to={"/"} className='flex flex-col items-center text-[#004155]'>
            <img src={mainLogo} alt="" className='w-20' />
            <p className='text-sm  font-black'>BookTracker</p>
          </Link>
        </div>

        {/* Nav items */}
        <div className='hidden md:flex items-center gap-8'>
          
          {/* <Link to={"/dashboard"} className='p-2 rounded-lg text-gray-100 bg-[#023766] font-medium 
          hover:bg-[#020046]'>
            Dashboard
          </Link> */}

          {/* {
            navLinks.map((link, i) => (
              <a key={i} href={link.path} className='font-medium hover:text-[#020046]'>
                {link.name}
              </a>
            ))
          } */}

        </div>

        {/* Login / Logout */}
        {/* <div className='flex items-center gap-1'>
          <img src={assets.userAvatar} alt="User Image" className='w-12' />
          <p className='font-medium'>Logout</p>
        </div> */}

        {/* Mobile Menu */}
        <div className={`backdrop-blur-sm bg-[#023766]/80 text-gray-200 fixed top-0 left-0 w-1/2 h-screen flex flex-col items-center gap-6
        pt-20 text-xl transition-all duration-300 ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>

          {/* Close icon */}
          <FontAwesomeIcon icon={faClose} size='2xl' className='absolute top-4 right-8 hover:opacity-80 cursor-pointer'
            onClick={() => setMobileMenu(!mobileMenu)} />

          {/* Mobile menu items */}
          {/* <Link to={"/books"} className='p-2 rounded-lg text-gray-100 bg-[#023766] font-medium hover:opacity-80'
          >
            Dashboard
          </Link>
          <Link to={"/books"} className='font-medium hover:opacity-80'
            onClick={() => (setMobileMenu(!mobileMenu))}>
            Books
          </Link>
          <Link to={"/recomendations"} className='font-medium hover:opacity-80'
            onClick={() => (setMobileMenu(!mobileMenu))}>
            Recomendations
          </Link>
          <Link to={"/reviews"} className='font-medium hover:opacity-80'
            onClick={() => (setMobileMenu(!mobileMenu))}>
            Reviews
          </Link> */}
        </div>

      </nav>
    </>
  )
}

export default Navbar
