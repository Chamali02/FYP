import React from 'react';
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';
import { PiCertificate } from 'react-icons/pi';
import { MdHelpOutline } from 'react-icons/md';
import { LuFileInput } from 'react-icons/lu';

function HomeForm() {
  return (
    <div className="">
      <h1 className="font-main text-3xl mx-auto pl-20 mt-14">Welcome, ABC...</h1>
      <div className="flex gap-8 mx-auto px-12 py-12">
        <div className="col-span-1 border rounded-full justify-around h-full my-12 space-y-12">
          <BsFillGrid1X2Fill className="my-16 mx-6" size={45} />
          <LuFileInput className="my-16 mx-6" size={45} />
          <PiCertificate className="my-16 mx-6" size={45} />
          <MdHelpOutline className="my-16 mx-6" size={45} />
          <IoExitOutline className="my-16 mx-6" size={45} />
        </div>
        <div className="w-full">
          <div className="border rounded-md py-10 px-10 border-black">
            <div className="w-full h-[400px]">
              <div>
                <h2 className=' font-main'>ENVIRONMENTAL KEYS</h2>
                <form>
                  <div className="mt-10 justify-center">

                    {/* label */}
                    <div>
                      <div className="flex gap-10 font-main my-4">
                        <div className='flex gap-10 '>
                        <label htmlFor="electricity">Electricity consumption</label>
                        <input id="electricity" type="text" className='border border-black' />
                        </div>
                        <div className='flex gap-8'>
                        <label htmlFor="electricityEvidence">Evidence label</label>
                        <input id="electricityEvidence" type="file" placeholder='Submit your electricity bill' />
                        </div>
                      </div>
                    </div>

                    {/* label */}
                    <div>
                      <div className="flex gap-10 font-main my-4">
                        <div className='flex gap-10 '>
                        <label htmlFor="electricity">Water consumption </label>
                        <input id="electricity" type="text" className='border border-black' />
                        </div>
                        <div className='flex gap-8'>
                        <label htmlFor="electricityEvidence">Evidence label</label>
                        <input id="electricityEvidence" type="file" placeholder='Submit your water bill'/>
                        </div>
                      </div>
                    </div>

                    {/* label */}
                    <div>
                      <div className="flex gap-10 font-main my-4">
                        <div className='flex gap-10 '>
                        <label htmlFor="electricity">Waste reduction rate  </label>
                        <input id="electricity" type="text" className='border border-black' />
                        </div>
                        <div className='flex gap-8'>
                        <label htmlFor="electricityEvidence">Evidence label</label>
                        <input id="electricityEvidence" type="file" />
                        </div>
                      </div>
                    </div>

                    {/* label */}
                    <div>
                      <div className="flex gap-10 font-main my-4">
                        <div className='flex gap-10 '>
                        <label htmlFor="electricity">Carbon footprint  </label>
                        <input id="electricity" type="text" className='border border-black' />
                        </div>
                        <div className='flex gap-8'>
                        <label htmlFor="electricityEvidence">Evidence label</label>
                        <input id="electricityEvidence" type="file" />
                        </div>
                      </div>
                    </div>

                    {/* label */}
                    <div>
                      <div className="flex gap-10 font-main my-4">
                        <div className='flex gap-10 '>
                        <label htmlFor="electricity">Green purchase   </label>
                        <input id="electricity" type="text" className='border border-black' />
                        </div>
                        <div className='flex gap-8'>
                        <label htmlFor="electricityEvidence">Evidence label</label>
                        <input id="electricityEvidence" type="file" />
                        </div>
                      </div>
                    </div>

                    {/* label */}
                    <div>
                      <div className="flex gap-10 font-main my-4">
                        <div className='flex gap-10 '>
                        <label htmlFor="electricity">Use of toxic materials </label>
                        <input id="electricity" type="text" className='border border-black' />
                        </div>
                        <div className='flex gap-8'>
                        <label htmlFor="electricityEvidence">Evidence label</label>
                        <input id="electricityEvidence" type="file" />
                        </div>
                      </div>
                    </div>

                    
                  </div>
                  <button type="submit" className="mt-4 bg-[#0911D7] text-white font-bold py-2 px-4 rounded">Submit Details</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeForm;
