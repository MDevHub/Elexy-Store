import React from 'react'
import { FaStar } from "react-icons/fa";

import categoryImg1 from '../assets/images/home-5-collection-1.png'
import categoryImg2 from '../assets/images/home-5-collection-2.png'
import categoryImg3 from '../assets/images/home-5-collection-3.png'
import categoryImg4 from '../assets/images/home-5-collection-4.png'
import categoryImg5 from '../assets/images/home-5-collection-5.png'
import categoryImg6 from '../assets/images/demo-5-banner-1.png'
import categoryImg7 from '../assets/images/demo-5-banner-2.png'
import categoryImg8 from '../assets/images/demo-5-banner-3.png'
import InfiniteScrollText from './InfiniteScroll';


const Category = () => {
  return (
   <div className='text-[#000000e0]'>
      <h1 className='text-4xl text-center font-bold mb-3'>Choose Your Category</h1>
      <p className='text-xl text-center'>Smartwatches provide quick access to notifications, calls, messages, and <br /> apps right on your wrist, reducing the constantly check your phone.</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 mb-40 text-center'>
         <div>
            <div className='rounded-[99999px] outline-none border-none  group overflow-hidden'>
               <img src={categoryImg1} className="w-full object-cover height-full group-hover:scale-105 transition-all duration-700 ease-in-out" /> 
            </div>
            <p className='text-black font-bold my-2 text-xl'>Home applliances</p>
            <p>1 Items</p>
         </div>

         <div>
            <div className='rounded-[99999px] outline-none border-none  group overflow-hidden'> 
               <img src={categoryImg2} className="w-full object-cover height-full group-hover:scale-105 transition-all duration-700 ease-in-out"/> 
            </div>
            <p className='text-black font-bold my-2 text-xl'>Pc and Lap Tops</p>
            <p>6 Items</p>
         </div>

         <div>
            <div className='rounded-[99999px] outline-none border-none  group overflow-hidden'>
               <img src={categoryImg3} className="w-full object-cover height-full group-hover:scale-105 transition-all duration-700 ease-in-out"/> 
            </div>
            <p className='text-black font-bold my-2 text-xl'>Kitchen Applieances</p>
            <p>10 Items</p>
            
         </div>

         <div>
            <div className='rounded-[99999px] outline-none border-none  group overflow-hidden'>
               <img src={categoryImg4} className="w-full object-cover height-full group-hover:scale-105 transition-all duration-700 ease-in-out"/> 
            </div>
            <p className='text-black font-bold my-2 text-xl'>Phone and tablets</p>
            <p>11 Items</p>
         </div>

         <div>
            <div className='rounded-[99999px] outline-none border-none  group overflow-hidden'>
               <img src={categoryImg5}  className='rounded-2xl object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 origin-bottom'/> 
            </div>
            <p className='text-black font-bold my-2 text-xl'>Accessories</p>
            <p>6 Items</p>
         </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 w-full'>
         <div className='relative cursor-pointer overflow-hidden group  hover:rounded-2xl' >
            <img src={categoryImg6}   className='rounded-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 origin-bottom'/>
            <div className='absolute top-8 pl-10'>
               <p className='text-[17px] mb-1'>EAR BUDS</p>
               <p className='font-bold text-2xl mb-2'>All-day Long Play ime</p>
               <a href="#" className='underline hover:font-semibold transition-all'>Shop Now</a>
            </div>
         </div>

         <div className='relative cursor-pointer overflow-hidden group  hover:rounded-2xl' >
            <img src={categoryImg7}  className='rounded-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 origin-bottom'/>
            <div className='absolute top-8 pl-10'>
               <p className='text-[17px] mb-1'>SMART SPEAKER</p>
               <p className='font-bold text-2xl mb-2'>Room-Filling Sound Bluetooth Speaker...</p>
               <a href="#" className='underline hover:font-semibold transition-all'>Shop Now</a>
            </div>
         </div>

         <div className='relative cursor-pointer overflow-hidden group  hover:rounded-2xl' >
            <img src={categoryImg8} className='rounded-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 origin-bottom'
               />
            <div className='absolute top-8 pl-10 rounded-2xl  hover:rounded-2xl'>
               <p className='text-[17px] mb-1'>KEYBOARD</p>
               <p className='font-bold text-2xl mb-2'>Mechanical Keyboard</p>
               <a href="#" className='underline hover:font-semibold  transition-all duration-[700] ease-in-out hover:scale-y-100'>Shop Now</a>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Category