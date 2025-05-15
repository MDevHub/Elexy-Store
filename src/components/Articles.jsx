import React from 'react'
import { FaInstagram, FaUser } from 'react-icons/fa6'
import { AiOutlineCalendar } from 'react-icons/ai'

import blogImg1 from '../assets/images/blog-d5-1.png'
import blogImg2 from '../assets/images/blog-d5-2.png'
import blogImg3 from '../assets/images/blog-d5-3.png'
import instagramImg1 from '../assets/images/instagram-1.png'
import instagramImg2 from '../assets/images/instagram-2.png'
import instagramImg3 from '../assets/images/instagram-3.png'
import instagramImg4 from '../assets/images/instagram-4.png'

const Articles = () => {
  return (
      <div >
         <div className='px-4 lg:px-6'>
            <h1 className='font-bold  text-[35px] md:text-[45px] text-center'>Latest Articles</h1>
            <p className='text-center text-lg md:text-xl text-[#12121212bf]'>Smartwatches provide quick access to notifications, calls, messages, and <br className='hidden lg:block'/> apps right on your wrist, reducing the constantly check your phone.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-4 mt-14 mb-28'>
               <div className='cursor-pointer'>
                  <img src={blogImg1} alt="" className='rounded-xl'/>
                  <div className='flex items-center gap-4 mt-4 mb-3'>
                     <p className='flex' ><FaUser className='inline mr-2'/>jowel patwary </p>
                     <span className=''><AiOutlineCalendar className='inline mr-2'/> jul 10 2024 </span>
                  </div>
                  <h2 className='font-bold text-2xl mb-3'>Breaking Down the Latest Innovations in Audio Technology at present</h2>
                  <p className='hover:text-[#121212bf]'>Audio technology has a remarkable transformation over the past few decades, revolutionizing the way we experience sound...</p>
               </div>

               <div className='cursor-pointer'>
                  <img src={blogImg2} alt="" className='rounded-xl'/>
                  <div className='flex items-center gap-5 mt-4 mb-3'>
                     <p className='flex' ><FaUser className='inline mr-2'/>jowel patwary </p>
                     <span className=''><AiOutlineCalendar className='inline mr-2'/> jul 10 2024 </span>
                  </div>
                  <h2 className='font-bold text-2xl mb-3'>Breaking Down the Latest Innovations in Audio Technology at present</h2>
                  <p className='hover:text-[#121212bf]'>Audio technology has a remarkable transformation over the past few decades, revolutionizing the way we experience sound...</p>
               </div>

               <div className='cursor-pointer'>
                  <img src={blogImg3} alt="" className='rounded-xl'/>
                  <div className='flex items-center gap-4 mt-4 mb-3'>
                     <p className='flex' ><FaUser className='inline mr-2'/>jowel patwary </p>
                     <span className=''><AiOutlineCalendar className='inline mr-2'/> jul 10 2024 </span>
                  </div>
                  <h2 className='font-bold text-2xl mb-3'>Breaking Down the Latest Innovations in Audio Technology at present</h2>
                  <p className='hover:text-[#121212bf]'>Audio technology has a remarkable transformation over the past few decades, revolutionizing the way we experience sound...</p>
               </div>
            </div>
         </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              <div className='relative group overflow-hidden'>
                  <img src={instagramImg1} className='transition-transform duration-700 group-hover:scale-110 hover:opacity-0'/>
                  
                  <div className='absolute inset-0 flex items-center justify-center'>
                     <FaInstagram className='text-white w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black p-5 rounded-full' />
                  </div>
               </div>

               <div className='relative group overflow-hidden'>
                  <img src={instagramImg2} className='transition-transform duration-700 group-hover:scale-110 hover:opacity-0'/>
                  
                  <div className='absolute inset-0 flex items-center justify-center'>
                     <FaInstagram className='text-white w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black p-5 rounded-full' />
                  </div>
               </div>

               <div className='relative group overflow-hidden'>
                  <img src={instagramImg3} className='transition-transform duration-700 group-hover:scale-110 hover:opacity-0'/>
                  
                  <div className='absolute inset-0 flex items-center justify-center'>
                     <FaInstagram className='text-white w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black p-5 rounded-full' />
                  </div>
               </div>

               <div className='relative group overflow-hidden'>
                  <img src={instagramImg4} className='transition-transform duration-700 group-hover:scale-110 hover:opacity-0'/>
                  
                  <div className='absolute inset-0 flex items-center justify-center'>
                     <FaInstagram className='text-white w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black p-5 rounded-full' />
                  </div>
               </div>
            </div>
      </div>
  )
}

export default Articles