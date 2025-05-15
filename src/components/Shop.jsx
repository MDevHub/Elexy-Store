import React from 'react'
import { FaStar } from 'react-icons/fa'

import product22 from '../assets/images/product-22.png'
import product23 from '../assets/images/product-23.png'
import product24 from '../assets/images/product-24.png'

const Shop = () => {
  return (
   <div>
      <div className='px-4 mb-40'>
            <h1 className='text-4xl font-bold mb-5'>Take the last Chance</h1>
            <div className='justify-between'>
               <p className='text-[18px] mb-6'>Electronics products continue to drive innovation and shape the <br />way we live, work, and interact with our environment.</p>
               <button className='bg-transparent rounded-full py-2 px-8 text-center outline-none border border-black hover:bg-black hover:text-white transition-all'><a href="#">View More</a></button>
            </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            <div className='bg-[#8080804f] py-7 px-5 rounded-2xl border-[0.5px] border-[#8f8d8dcb]  outline-none hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 cursor-pointer'>
               <p className='text-[#1212128f]'>Speaker</p>
               <div className='flex justify-between items-center'>
                  <p className='font-bold text-xl '>Zackpot Speaker</p>
                  <span className='text-[14px]'><FaStar className='inline text-[#000000f1]'/> 5.0(2)</span>
               </div>
               <p className='mt-3 mb-5'>Tk 4,000.00 <span className='line-through text-[#121212bf] ml-3'>Tk 5,400.00</span></p>
               <img src={product22} alt="" className='rounded-2xl object-cover h-[220px] w-full border  outline-none shadow-2xl border-[#c5babad2] mb-5'/>
               <p className='text-[#121212bf] mb-2'> Only 65 items in stock!</p>
               <hr className='border-[1.8px] border-black outline-none mb-9'/>
               <div>
                  <button className='mb-4 md:mb-3 mr-3  bg-black text-white font-semibold py-[10px] px-4 rounded-full text-center outline-none border-0 hover:translate-y-[-2px] transition-all'><a href="#">+ Select Options</a></button>
                  <button className='bg-transparent rounded-full font-bold py-[10px] px-5 text-center outline-none border border-black hover:bg-black hover:text-white transition-all'><a href="#">View Details</a></button>
               </div>
            </div>

            <div className='bg-[#8080804f] py-7 px-5 rounded-2xl border-[0.5px] border-[#8f8d8dcb]  outline-none hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 cursor-pointer'>
               <p className='text-[#1212128f]'>Camera</p>
               <p className='font-bold text-xl '>Decorex D25 Camera</p>
               <p className='mt-3 mb-5'>Tk 4,000.00</p>
               <img src={product23} alt="" className='rounded-2xl object-cover h-[220px] w-full border  outline-none shadow-2xl border-[#c5babad2] mb-5' />
               <p className='text-[#121212bf] mb-2'>Only 99 items in stock!</p>
               <hr className='border-[1.8px] border-black outline-none mb-9'/>
               <div>
                  <button className='mb-4 md:mb-3 mr-3 bg-black text-white font-semibold py-[10px] px-4 rounded-full text-center outline-none border-0 hover:translate-y-[-2px] transition-all'><a href="#">+ Select Options</a></button>
                  <button className='bg-transparent rounded-full font-bold py-[10px] px-5 text-center outline-none border border-black hover:bg-black hover:text-white transition-all'><a href="#">View Details</a></button>
               </div>
            </div>

            <div className='bg-[#8080804f] py-7 px-5 rounded-2xl border-[0.5px] border-[#8f8d8dcb]  outline-none hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 cursor-pointer'>
               <p className='text-[#1212128f]'>Speaker</p>
               <div className='flex justify-between items-center'>
                  <p className='font-bold text-xl '>Network bridges X1r </p>
                  <span className='text-[14px]'><FaStar className='inline'/> 5.0(2)</span>
               </div>
               <p className='mt-3 mb-5'>Tk 53,600.00 </p>
               <img src={product24} alt="" className='rounded-2xl object-cover h-[220px] w-full border  outline-none shadow-2xl border-[#c5babad2] mb-5' />
               <p className='text-[#121212bf] mb-2'>Only 34 items in stock!</p>
               <hr className='border-[1.8px] border-black outline-none mb-9'/>
               <div>
                  <button className='mb-4 md:mb-3 mr-3 bg-black text-white font-semibold py-[10px] px-4 rounded-full text-center outline-none border-0 hover:translate-y-[-2px] transition-all'><a href="#">+ Select Options</a></button>
                  <button className='bg-transparent rounded-full font-bold py-[10px] px-5 text-center outline-none border border-black hover:bg-black hover:text-white transition-all'><a href="#">View Details</a></button>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Shop