import React from 'react'

import prod12img from '../assets/images/product-12.png'
import prod3img from '../assets/images/product-3.png'
import prod5img from '../assets/images/product-5.png'
import prod3iimg from '../assets/images/product-1 (2).png'
import prod03img from '../assets/images/003.png'
import prodimg from '../assets/images/image-1.png'

const ProductSlider = () => {
  return (
      <div className='grid grid-cols-4 gap-8 mt-14 mb-32'>
        <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
            <img src={prod12img}  className='rounded-t-xl'/>
            <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl' >
              <p className='text-xl font-bold mb-2'>Maxoni Microwaave Oven</p>
              <p className='text-[16px] mr-2 text-[#121212e3] inline'> TK $78.0000</p> <span className='text-[#121212bf] line-through'>TK $148.000</span>
              <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
            </div>
        </div>
				
         <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
            <div className='relative'>
					<img src={prod3img} className='rounded-t-xl hover:opacity-0 transition-opacity duration-300' />
					<img src={prod5img} className='absolute top-0 left-0 w-full h-full rounded-t-xl opacity-0 hover:opacity-100 transition-opacity duration-300' />
  				</div>
            <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl'>
              <p className='text-xl font-bold'>L F7 Pro</p>
              <p className='text-[16px] mt-2 mr-2 text-[#121212e3] inline'>TK $78.0000</p> <span className='text-[#121212bf] line-through'>TK $148.000</span>
              <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
            </div>
         </div>

         <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
            <div className='relative'>
					<img src={prod3iimg} className='rounded-t-xl hover:opacity-0 transition-opacity duration-300' />
					<img src={prod03img} className='absolute top-0 left-0 w-full h-full rounded-t-xl opacity-0 hover:opacity-100 transition-opacity duration-300' />
  				</div>
            <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl'>
              <p className='text-xl font-bold'>KB Phone 15 Pro</p>
              <p className='text-[16px] mt-2 mr-2 text-[#121212e3] inline'>TK $78.0000 <span className='text-[16px]  ml-2 text-[#121212e3] inline line-through'>TK $148.000</span></p> 
              <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
				</div>
         </div>

         <div className='shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
            <img src={prodimg}  className='rounded-t-xl'/>
            <div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl'>
              <p className='text-xl font-bold'>Mucwo Mucko</p>
              <p className='text-[16px] mt-2 mr-2 text-[#121212e3] inline'>TK $78.0000</p> <span className='text-[16px] mr-2 text-[#121212e3] inline line-through'>TK $148.000</span>
              <p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
            </div>
         </div>
      </div>
  )
}

export default ProductSlider