import React, { useState } from 'react'
import Links from './Links';
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click,setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  }
  

  const content = <>

  <div className='absolute left-0 right-0 block w-full transition bg-[#012915] lg:hidden top-16'>
    
      <ul className='p-20 text-xl text-center'>
        <Link spy={true} smooth={true} to="/">
        <li className='py-4 my-4 hover:underline text-white font-main'>Home</li>
        </Link>
        <Link spy={true} smooth={true} to="#">
        <li className='py-4 my-4 hover:underline text-white font-main'>Service</li>
        </Link>
        <Link spy={true} smooth={true} to="/About">
        <li className='py-4 my-4 hover:underline text-white font-main'>About Us</li>
        </Link>
        <Link spy={true} smooth={true} to="#">
        <li className='py-4 my-4 hover:underline text-white font-main'>FAQ</li>
        </Link>
        <Link spy={true} smooth={true} to="/Join">
        <li className='py-4 my-4 bg-white rounded-xl text-[#012915] font-main'>Join Now</li>
        </Link>
      </ul>
    
  </div>
  </>
  return(
    <nav className='sticky top-0 z-50 bg-white'>
      <div className='z-50 flex justify-between flex-1 px-10 md:px-20 md:py-4 text-black h-10vh lg:py-5'>
        <div className='flex items-center flex-1'>
          {/* <span className='text-3xl font-bold'>{logoName}</span> */}
          <img src="logo.png" alt="Logo" width={80} height={80} />
        </div>
        <div className='items-center justify-end hidden font-normal flex-2 lg:flex md:flex lg:'>
          <div className='flex-10'>
            <Links spy={true} smooth={true} />
          </div>
        </div>
        <div>
        {click && content}
        </div>
        <button className='block transition sm:hidden ' onClick={handleClick}>
          {click ? <FaTimes size={30} className=' text-[#012915]' /> : <CiMenuFries size={30} className=' text-[#012915]'/>}
        </button>
      </div>
    </nav>
  );

};


export default Navbar