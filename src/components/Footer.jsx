import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';

const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="md:hidden">
      <button
        className="w-full flex justify-between items-center py-3 font-bold border-b border-gray-700"
        onClick={onClick}
      >
        {title}
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 mt-3' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-3 font-medium text-[17px] mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className='bg-gradient-to-r from-black via-black to-[#271313] py-28 px-4 text-white'>
      {/* Newsletter */}
      <div className='md:flex items-center justify-between mb-16'>
        <h1 className='text-3xl lg:text-[40px] text-[#ffffffe8] font-bold mb-6'>
          Subscribe our Newsletter and <br className='hidden lg:block' /> get all of our update.
        </h1>
        <div className="p-2 bg-transparent flex justify-between items-center gap-2 border border-gray-300 rounded-full outline-none">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-2 w-[25vw] outline-none bg-transparent"
          />
          <button className="bg-white text-black px-4 py-2 rounded-full whitespace-nowrap">
            Submit Now
          </button>
        </div>
      </div>

      <hr className='outline-none border-1 border-[#272525]' />

      {/* Mobile Accordion */}
      <div className="mt-10 space-y-5 md:hidden">
        <Accordion
          title="Quick Links"
          isOpen={openIndex === 0}
          onClick={() => toggleAccordion(0)}
        >
          <>
            <a href="" className='hover:text-[#3d3a3a]'>Search</a>
            <a href="" className='hover:text-[#3d3a3a]'>Reviews</a>
            <a href="" className='hover:text-[#3d3a3a]'>About us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
          </>
        </Accordion>

        <Accordion
          title="Quick Links"
          isOpen={openIndex === 1}
          onClick={() => toggleAccordion(1)}
        >
          <>
            <a href="" className='hover:text-[#3d3a3a]'>About Us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Blogs</a>
            <a href="" className='hover:text-[#3d3a3a]'>About us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
          </>
        </Accordion>

        <Accordion
          title="Information"
          isOpen={openIndex === 2}
          onClick={() => toggleAccordion(2)}
        >
          <>
            <a href="" className='hover:text-[#3d3a3a]'>About Us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Blogs</a>
            <a href="" className='hover:text-[#3d3a3a]'>About us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
          </>
        </Accordion>

        <Accordion
          title="Company"
          isOpen={openIndex === 3}
          onClick={() => toggleAccordion(3)}
        >
          <>
            <a href="" className='hover:text-[#3d3a3a]'>About Us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Blogs</a>
            <a href="" className='hover:text-[#3d3a3a]'>About us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
          </>
        </Accordion>

        <Accordion
          title="Contact Info"
          isOpen={openIndex === 4}
          onClick={() => toggleAccordion(4)}
        >
          <>
            <p className='hover:text-[#3d3a3a]'>70 Washington Square South, New York, NY 10012, United States</p>
            <p className='hover:text-[#3d3a3a]'>+12345 678 910</p>
            <p className='hover:text-[#3d3a3a]'>+12345 678 109</p>
          </>
        </Accordion>
      </div>

      {/* Desktop Grid */}
      <div className='hidden md:grid grid-cols-2 md:grid-cols-5 gap-3 mt-16 text-[17px]'>
        <div>
          <p className='font-bold mb-4-'>Quick Links</p>
          <div className='flex flex-col mt-7 gap-3 font-medium transition-all'>
            <a href="" className='hover:text-[#3d3a3a]'>Search</a>
            <a href="" className='hover:text-[#3d3a3a]'>Reviews</a>
            <a href="" className='hover:text-[#3d3a3a]'>About us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
          </div>
        </div>

        <div>
          <p className='font-bold mb-4'>Quick Links</p>
          <div className='flex flex-col mt-7 gap-3 font-medium transition-all'>
            <a href="" className='hover:text-[#3d3a3a]'>About Us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Blogs</a>
            <a href="" className='hover:text-[#3d3a3a]'>About us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
          </div>
        </div>

        <div className='hidden md:block'>
          <p className='font-bold mb-4'>Information</p>
          <div className='flex flex-col mt-7 gap-3 font-medium transition-all'>
            <a href="" className='hover:text-[#3d3a3a]'>About Us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Blogs</a>
            <a href="" className='hover:text-[#3d3a3a]'>About us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
          </div>
        </div>

        <div>
          <p className='font-bold mb-4'>Company</p>
          <div className='flex flex-col mt-7 gap-3 font-medium transition-all'>
            <a href="" className='hover:text-[#3d3a3a]'>About Us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Blogs</a>
            <a href="" className='hover:text-[#3d3a3a]'>About us</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
            <a href="" className='hover:text-[#3d3a3a]'>Privacy Policy</a>
          </div>
        </div>

        <div>
          <p className='font-bold mb-4'>Contact Info</p>
          <div className='flex flex-col mt-7 gap-3 font-medium transition-all'>
            <p className='hover:text-[#3d3a3a]'>70 Washington Square South, New York, NY 10012, United States</p>
            <p className='hover:text-[#3d3a3a]'>+12345 678 910</p>
            <p className='hover:text-[#3d3a3a]'>+12345 678 109</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-gray-400 text-sm flex items-center justify-center gap-2">
         <span>Built with</span>
         <FaReact className="text-blue-400 text-xl animate-spin-slow" />
         <span className="text-blue-400 font-semibold">React</span>
         <span className="text-red-500 text-lg">♥</span>
      </div>
    </div>
  );
};

export default Footer;
