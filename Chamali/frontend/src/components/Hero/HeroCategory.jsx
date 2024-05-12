import React from 'react'

function HeroCategory() {
  return (
    <>
    <div className='flex justify-around md:px-32 py-8 mx-auto space-x-10 bg-[#012915]'>
        <h1 className='text-white font-main md:text-2xl text-md'>Trusted by 50+ leading tourism companies in Sri Lanka</h1>
    </div>
    
    <div className='flex justify-around md:px-32 px-8 pt-4 md:pt-8 pb-16 mx-auto space-x-10 bg-[#012915]'>

        {/* Item Circle */}
        <div>
            {/* image */}
            <div className='md:w-32 w-16 h-16 md:h-32 bg-gray-900 '>
                <img src='h1.png' />
            </div>
           
            
        </div>

        {/* Item Circle */}
        <div>
            {/* image */}
            <div className='md:w-32 w-16 h-16 md:h-32 bg-gray-900'>
                <img src='h2.png' />
            </div>
            
        </div>

        {/* Item Circle */}
        <div>
            {/* image */}
            <div className='md:w-32 w-16 h-16 md:h-32 bg-gray-900'>
                <img src='h3.png' />
            </div>
            
        </div>

        {/* Item Circle */}
        <div>
            {/* image */}
            <div className='md:w-32 w-16 h-16 md:h-32 bg-gray-900'>
                <img src='h4.png' />
            </div>
            
        </div>

        {/* Item Circle */}
        <div>
            {/* image */}
            <div className='md:w-32 w-16 h-16 md:h-32 bg-gray-900'>
                <img src='h5.png' />
            </div>
            
        </div>
    </div>
    </>
  )
}

export default HeroCategory