import { CirclePlus  } from 'lucide-react';
import React, { useState } from 'react';

const FAQ = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState([]);

  const toggleFaq = (index) => {
    setActiveIndex((prevActiveIndex) => {
      const indexExists = prevActiveIndex.includes(index);

      if (indexExists) {
        return prevActiveIndex.filter((activeIdx) => activeIdx !== index);
      }

      return [...prevActiveIndex, index];
    });
  };

  return (
    <div id='2'>
      <div className='mx-auto py-8 px-8'>

        {/* Title */}
        <h1 className=' font-main text-2xl'>
        FREQUENTLY ASKED QUESTIONS
        </h1>

        <div className=' justify-center mx-auto px-2 md:px-28 py-10'>

        <section className="max-w-4xl mx-auto px-3 border-b-2 border-b-black">

        
        {items.map(({ title, content }, index) => (
          <div key={index} className=" mb-3  p-4 hover:bg-slate-50">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between w-full items-center focus:outline-none border-t-2 border-t-black py-5">
              <h4 className="flex-1 text-lg font-main-[200px]  text-left ">{title}</h4>
              <CirclePlus 
                className={`w-6 h-6 transition-transform ${
                  activeIndex.includes(index) ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {activeIndex.includes(index) && (
              <div className="mt-3">
                <p className="text-base">{content}</p>
              </div>
            )}
          </div>
        ))}
        </section>

        

        </div>
    </div>
    </div>
  )}


export default FAQ;

export const Faqs = [
  {
    title: 'How does the grading system works? ',
    content:
      'i am savindu Senanayake. Thank you. Change This Content With your content',
  },
  {
    title: 'What does the action plan included?',
    content:
      'i am savindu Senanayake. Thank you. Change This Content With your content',
  },
  {
    title: 'Is there a guide through the process?',
    content:
      'i am savindu Senanayake. Thank you. Change This Content With your content',
  },
  {
    title: "How can we share sustainability accomplishments?",
    content:
      'i am savindu Senanayake. Thank you. Change This Content With your content',
  },
];
