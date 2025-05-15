import React from 'react'

const Footer = () => {
  return (
   <div className='bg-gradient-to-r from-black via-black to-[#271313] py-28 px-4 text-white'>
      <div className='md:flex items-center justify-between mb-16'>
         <h1 className='text-3xl lg:text-[40px] text-[#ffffffe8] font-bold mb-6'>Subscribe our Newsletter and <br className='hidden lg:block' /> get all of our update.</h1>
         <div className="p-2 bg-transparent flex justify-between items-center gap-2 border border-gray-300 rounded-full outline-none">
            <input 
               type="email" 
               placeholder="Enter your email" 
               className="px-4 py-2 w-[25vw] outline-none bg-transparent "
            />
            <button className="bg-white text-black px-4 py-2 rounded-full whitespace-nowrap">
               Submit Now
            </button>
         </div>
      </div>
      <hr className='outline-none border-1 border-[#272525]'/>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-3 mt-16 text-[17px]'>
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
   </div>
  )
}

export default Footer