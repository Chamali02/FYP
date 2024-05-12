import React from 'react'

function HeroHome() {
  return (
    <>
    <div>
    <section className="bg-[#012915]">
    <div className="grid max-w-screen-xl  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-6xl font-main   leading-none  text-white ">Measure the <br /> sustanability <br /> level in your company</h1>
        </div> 
        <div className="mr-auto place-self-center lg:col-span-12 my-6">
            <p className="mb-6 font-light text-white text-2xl">Introducing a comprehensive sustainability assessment tool specifically designed for the tourism industry <br/>
            in Sri Lanka.</p>
        </div>  
                
    </div>
    </section>
    </div>
    </>
  )
}

export default HeroHome