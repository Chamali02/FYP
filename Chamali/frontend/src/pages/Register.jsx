import React from 'react'

function Register() {
  return (
   <>
   <div className='flex h-screen'>
    <div className='hidden md:block md:w-[60%]  bg-[#CCE8CD] max-h-screen'>
       <img src="bg.png" alt="image" />
    </div>
    <div className='md:w-[40%] w-full  bg-[#012915]'>
        <div className=' justify-center mx-auto'>
            
            <h1 className=' font-second text-white text-4xl text-center my-4 md:my-10'>Let’s get started</h1>
            
            <div className=' items-center'>

            <form class="space-y-2 px-12" action="#">
                <div >
                <input type="name" name="name" id="name" class="bg-[#012915] border font-second border-white text-white  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4 " placeholder="Company Name" required="" />
                </div>

                <div >
                <textarea type="address" name="address" rows="3" id="address"  class="bg-[#012915] border font-second border-white text-white  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4" placeholder="Address" required="" />
                </div>

                <div >
                <input type="email" name="email" id="email" class="bg-[#012915] border font-second border-white text-white  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4" placeholder="Email" required="" />
                </div>

                <div >
                <input type="phone" name="phone" id="phone" class="bg-[#012915] border font-second border-white text-white  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4" placeholder="Phone No" required="" />
                </div>

                <div >
                <input type="number" name="number" id="number" class="bg-[#012915] border font-second border-white text-white  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4" placeholder="No of Employees" required="" />
                </div>

                <div >
                <input type="password" name="password" id="password" class="bg-[#012915] border font-second border-white text-white  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4" placeholder="Password" required="" />
                </div>
                <div >
                <input type="password" name="repeat-password" id="repeat-password" class="bg-[#012915] border font-second border-white text-white  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4" placeholder="Confirm Password" required="" />
                </div>

                <div>
                <button type="submit" class="text-black font-second bg-[#CCE8CD] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center my-8">Sign Up</button>
                </div>

            </form>
                
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Register