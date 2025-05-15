import React from 'react'

import product1 from '../assets/images/product-1.png'
import product2 from '../assets/images/product-2.png'
import product3 from '../assets/images/product-3.png'
import product4 from '../assets/images/product-4.png'
import product5 from '../assets/images/product-5.png'
import product6 from '../assets/images/product-6.png'
import product7 from '../assets/images/product-7.png'
import product8 from '../assets/images/product-8.png'
import product9 from '../assets/images/product-9.png'
import product10 from '../assets/images/demo-5-banner-4.png'
import product11 from '../assets/images/demo-5-banner-5.png'
import product12 from '../assets/images/product-12.png'
import product24 from '../assets/images/product-24.png'
 


const BestProduct = () => {
  return (
      <div>
         <div className='px-4 lg:px-6'>
            <h1 className='text-4xl font-bold mb-5'>Best Selling Products</h1>
            <p className='text-[18px]'>Electronics products continue to drive innovation and shape the <br />way we live, work, and interact with our environment.</p>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 mb-32'>
                  <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
                     <img src={product1}  className='rounded-t-xl'/>
                     <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl' >
                       <p className='text-xl font-bold mb-2'>KB Phone 15 Pro</p>
                        <p className='text-[16px] mr-2 text-[#121212e3] inline'> TK $78.0000</p> <span className='text-[#121212bf] line-through'>TK $148.000</span>
                        <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
                     </div>
                  </div>
                        
                  <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
                     <div className='relative'>
                        <img src={product4} className='rounded-t-xl hover:opacity-0 transition-opacity duration-300' />
                        <img src={product5} className='absolute top-0 left-0 w-full h-full rounded-t-xl opacity-0 hover:opacity-100 transition-opacity duration-300' />
                     </div>
                     <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl'>
                        <p className='text-xl font-bold'>zPad Pro M.2</p>
                        <p className='text-[16px] mt-2 mr-2 text-[#121212e3] inline'>TK $78.0000</p> <span className='text-[#121212bf] line-through'>TK $148.000</span>
                        <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
                     </div>
                  </div>
            
                  <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
                     <img src={product7}  className='rounded-t-xl'/>
                     <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl'>
                        <p className='text-xl font-bold'>Xonic CC Camera</p>
                        <p className='text-[16px] mt-2 mr-2 text-[#121212e3] inline'>TK $78.0000</p> <span className='text-[16px] mr-2 text-[#121212e3] inline line-through'>TK $148.000</span>
                        <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
                     </div>
                  </div>

                  <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
                     <div className='relative'>
                        <img src={product8} className='rounded-t-xl hover:opacity-0 transition-opacity duration-300' />
                        <img src={product9} className='absolute top-0 left-0 w-full h-full rounded-t-xl opacity-0 hover:opacity-100 transition-opacity duration-300' />
                     </div>
                     <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl'>
                        <p className='text-xl font-bold'>Ornex Blender</p>
                        <p className='text-[16px] mt-2 mr-2 text-[#121212e3] inline'>TK $78.0000 <span className='text-[16px]  ml-2 text-[#121212e3] inline line-through'>TK $148.000</span></p> 
                        <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
                     </div>
                  </div>

                  <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
                     <img src={product2}  className='rounded-t-xl'/>
                     <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl' >
                       <p className='text-xl font-bold mb-2'>Zackpot Speaker</p>
                        <p className='text-[16px] mr-2 text-[#121212e3] inline'> TK $78.0000</p> <span className='text-[#121212bf] line-through'>TK $148.000</span>
                        <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
                     </div>
                  </div>
                        
                  <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
                     <div className='relative'>
                        <img src={product5} className='rounded-t-xl hover:opacity-0 transition-opacity duration-300' />
                        <img src={product3} className='absolute top-0 left-0 w-full h-full rounded-t-xl opacity-0 hover:opacity-100 transition-opacity duration-300' />
                     </div>
                     <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl'>
                        <p className='text-xl font-bold'>Mackbook pro (15inch)</p>
                        <p className='text-[16px] mt-2 mr-2 text-[#121212e3] inline'>TK $78.0000</p> <span className='text-[#121212bf] line-through'>TK $148.000</span>
                        <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
                     </div>
                  </div>
            
                  <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
                     <img src={product12}  className='rounded-t-xl'/>
                     <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl'>
                        <p className='text-xl font-bold'>All-day Play</p>
                        <p className='text-[16px] mt-2 mr-2 text-[#121212e3] inline'>TK $78.0000</p> <span className='text-[16px] mr-2 text-[#121212e3] inline line-through'>TK $148.000</span>
                        <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
                     </div>
                  </div>

                  <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c]  border-s-white transition-shadow duration-300 rounded-xl cursor-pointer'>
                     <div className='relative'>
                        <img src={product6} className='rounded-t-xl hover:opacity-0 transition-opacity duration-300' />
                        <img src={product24} className='absolute top-0 left-0 w-full h-full rounded-t-xl opacity-0 hover:opacity-100 transition-opacity duration-300' />
                     </div>
                     <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl'>
                        <p className='text-xl font-bold'>Mango Router</p>
                        <p className='text-[16px] mt-2 mr-2 text-[#121212e3] inline'>TK $78.0000 <span className='text-[16px]  ml-2 text-[#121212e3] inline line-through'>TK $148.000</span></p> 
                        <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
                     </div>
               </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mb-28'>
               <div className='cursor-pointer overflow-hidden group  hover:rounded-2xl'>
                  <img src={product10} className='rounded-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 origin-bottom' />
               </div>
               <div className='cursor-pointer overflow-hidden group  hover:rounded-2xl'>
                  <img src={product11} className='rounded-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 origin-bottom'/>
               </div>
            </div>
         </div>
      </div>
  )
}

export default BestProduct