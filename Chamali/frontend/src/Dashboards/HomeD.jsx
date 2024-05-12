import React from 'react'
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { MdHelpOutline } from "react-icons/md";
import { LuFileInput } from "react-icons/lu";


function HomeDashboard() {
  return (
    <>
    <div className=''>
        <h1 className=' font-main text-3xl mx-auto pl-20 mt-14'>Welcome, ABC...</h1>
    <div className='flex gap-8 mx-auto px-12 py-12'>

        <div className=' col-span-1 border rounded-full justify-around h-[80vh] my-12 space-y12 align-middle'>
        <BsFillGrid1X2Fill className=' my-16 mx-6' size={45}/>
        <LuFileInput  className=' my-16 mx-6' size={45} />
        <PiCertificate className=' my-16 mx-6' size={45} />
        <MdHelpOutline className=' my-16 mx-6' size={45}/>
        <IoExitOutline className=' my-16  mx-6' size={45}/>
        </div>


        <div className='  w-full  '>
            {/* first Row */}
            <div className='flex gap-8'>

                <div className='border rounded-md py-10 px-10 border-black w-[275px] h-[200px]'>
                    <h1 className=' font-main text-center'>You have archive 23% than <br/> the previous month</h1>
                </div>

                <div className='flex border rounded-md py-10 px-10 border-black w-[275px] h-[200px]'>
                    <h1 className=' font-main align-middle justify-center font-bold'>Current Level 01</h1>
                </div>

                <div className='border rounded-md py-10 px-10 border-black w-[275px] h-[200px]'>
                    <h1 className=' font-main text-center'>You have archive 23% than <br/> the previous month</h1>
                </div>

                <div className='border rounded-md py-10 px-10 border-black w-[275px] h-[200px]'>
                    <h1 className=' font-main text-center'>You have archive 23% than <br/> the previous month</h1>
                </div>

            </div>

            {/* second Row */}
            <div className='flex gap-8 justify-around my-8'>

                <div className='border rounded-md py-10 px-10 border-black w-[550px] h-[200px]'>
                    <h1 className=' font-main text-center'>chart analyis <br/> the previous month</h1>
                </div>

                <div className='border rounded-md py-10 px-10 border-black w-[550px] h-[200px]'>
                    <h1 className='-py-4 font-main align-middle justify-center font-bold'>Guidance</h1>
                    
                    <p className='py-2'>Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

               

            </div>

            {/* third Row */}
            <div className='flex gap-8  my-8'>

                <div className='border rounded-md py-10 px-10 border-black w-[250px] h-[200px]'>
                    <h1 className=' font-main text-center'>Tips</h1>
                    <ul>
                        <li>tip 01</li>
                        <li>tip 02</li>
                        <li>tip 03</li>
                        <li>tip 04</li>
                    </ul>
                </div>

                <div className='border rounded-md py-10 px-10 border-black w-[525px] h-[200px]'>
                    <h1 className='-py-4 font-main align-middle justify-center font-bold'>Important notes</h1>
                    
                    <p className='py-2'>Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className=' -py-10 px-10  w-[340px] h-[200px]'>
                    <h1 className='-py-4 font-main align-middle justify-center font-bold'>TOP 5 COMPANIES OF THIS MONTH</h1>

                    <h2 className=' font-main border border-black py-2 px-5 my-2'>Company 1</h2>
                    <h2 className=' font-main border border-black py-2 px-5 my-2'>Company 2</h2>
                    <h2 className=' font-main border border-black py-2 px-5 my-2'>Company 3</h2>
                    <h2 className=' font-main border border-black py-2 px-5 my-2'>Company 4</h2>
                    <h2 className=' font-main border border-black py-2 px-5 my-2'>Company 5</h2>
                    
                    </div>

               

            </div>


        </div>
    </div>
    </div>
    </>
  )
}

export default HomeDashboard