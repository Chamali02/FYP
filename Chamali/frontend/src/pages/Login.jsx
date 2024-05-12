import { Divide } from 'lucide-react'
import React from 'react'

function Login() {
  return (
   <>
   <div className='flex h-screen'>
    
    <div className=' w-full md:w-[40%] bg-[#012915]'>
        <div className=' justify-center mx-auto'>
            
            <h1 className=' font-second text-white text-4xl text-center my-20'>Let’s get started</h1>
            
            <div className=' items-center'>

            <form class="space-y-2 px-12" action="#">
                
                <div >
                <input type="email" name="email" id="email" class="bg-[#012915] border font-second border-white text-white  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4" placeholder="Email" required="" />
                </div>



            
                <div >
                <input type="password" name="password" id="password" class="bg-[#012915] border font-second border-white text-white  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-4" placeholder="Password" required="" />
                </div>

                <div>
                <label class="inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer bg-[#012915]"/>
                <div class="relative w-11 h-6 bg-[#CCE8CD] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#CCE8CD]  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#012915] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-[#012915]"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 font-second">Remember me</span>
                </label>
                </div>
                

                <div>
                <button type="submit" class="text-black font-second bg-[#CCE8CD] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center my-8">Login</button>
                </div>

                <div className='hidden md:block text-center  px-24'>
                <div className='flex gap-3 '>
                    <div className=' text-white'>------------</div>
                    <div className=' font-second text-white'>or</div>
                    <div className=' text-white'>------------</div>

                </div>
                </div>

                <div className='items-center justify-center md:px-24 py-6'>
                    <button type="submit" class="text-white border border-white font-second bg-transparent text-center justify-center focus:ring-4 focus:outline-none focus:ring-[#CCE8CD] font-medium w-full rounded-lg text-sm px-5 py-2.5" style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" class="mr-2">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Sign up with Google
                    </button>
                </div>


            </form>
                
            </div>
        </div>
    </div>
    <div className='hidden md:block md:w-[60%]  bg-[#CCE8CD] wi'>
       <img src="bg.png" alt="image" />
    </div>
   </div>
   </>
  )
}

export default Login