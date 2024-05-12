import React from 'react'
import MenuLinks from './MenuLinks'

function Links()  {
  return (
    <>
    <ul className='flex gap-8 mr-16 text-[18px]'>
    <li className='border-b-2 border-white cursor-pointer hover:text-green-600 transit text-[24px] hover:border-green-600'><MenuLinks linkname='Home' url='/' /></li>
    <li className='border-b-2 border-white cursor-pointer hover:text-green-600 transit text-[24px] hover:border-green-600'><MenuLinks linkname='Service' url='#' /></li>
    <li className='border-b-2 border-white cursor-pointer hover:text-green-600 transit text-[24px] hover:border-green-600'><MenuLinks linkname='About Us' url='/About' /></li>
    <li className='border-b-2 border-white cursor-pointer hover:text-green-600 transit text-[24px] hover:border-green-600'><MenuLinks linkname='FAQ' url='#' /></li>
    <li className=' bg-[#015504] text-[24px] text-white rounded-lg'><MenuLinks linkname='Join Now' url='/join' /></li>
    </ul>
    
    </>
  )
}

export default Links