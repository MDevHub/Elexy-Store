import React from 'react'
import { Link } from 'react-router-dom'

import bg from '../assets/images/instagram-4.png'
import ProductSlider from './ProductSlider'
import Category from './Category'
import InfiniteScrollText from './InfiniteScroll'
import BestProduct from './BestProduct'
import Shop from './Shop'
import Articles from './Articles'

const Page1 = () => {
  return (
   <div className='w-[100%]'>
      <section className="relative lg:bg-[url('/src/assets/images/bg.png')]  bg-center bg-no-repeat bg-cover lg:h-[100vh] w-full lg:py-[8rem]">
        <div className="block lg:hidden mb-10 object-cover">
            <img
               src={bg}
               alt="Background"
               className="w-full h-auto object-cover object-center mx-auto"
            />
         </div>

         <div className='pl-[1rem] md:pl-[2rem] mb-[5vh] md:mb-[30vh]'>
            <p className='text-xl md:text-2xl text-[#333333] font-mono mb-4 md:mb-8'>INTILECT PRO V25S</p>
            <h1 className='text-2xl md:text-7xl font-semibold md:font-[700] from-neutral-50 first: mb-5 md:mb-8'>AI based CCTV Solutions <br className='hidden lg:block' /> for Home and Business</h1>
            <p className='text-[#121212bf] text-[17px] mb-8'>Closed-Circuit Television (CCTV) is a video surveillance system used to monitor and record <br />
            activities in various environments for security, safety, and monitoring purposes.</p>

            <div className='flex md:hidden'>
               {/* Changed buttons to Links with button styles */}
               <Link to="/kitchenappliances" className='flex bg-black rounded-[9999px] py-1 px-4 outline-none border-0 mr-5 hover:translate-y-[-2px] transition-all whitespace-nowrap text-center items-center text-white'>
                 Shop Now
               </Link>
               <Link to="/kitchenappliances" className='bg-transparent rounded-[9999px] py-3 px-4 outline-none border border-black mr-5 hover:bg-black hover:text-white transition-all whitespace-nowrap text-center'>
                 View Details
               </Link>
            </div>

            <div className='hidden md:block'>
               <Link to="/kitchenappliances" >
                 <button className='bg-black rounded-[9999px] py-3 px-6 outline-none border-0 mr-5 hover:translate-y-[-2px] transition-all text-white'>Shop Now</button>
               </Link>
               <Link to="/kitchenappliances" >
                 <button className='bg-transparent rounded-[9999px] py-3 px-6 outline-none border border-black mr-5 hover:bg-black hover:text-white transition-all'>View Details</button>
               </Link>
            </div>
         </div>
      </section>

      <section>
         {/* <div className='pt-7 lg:pt-24 pb-24'>
            <p className='text-center text-2xl md:text-3xl font-bold mb-16 px-4'>We've more than 180+ Happy Partners with their <br className='hidden lg:block'/> satisfaction and positive feedback</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-20 px-10 lg:px-20 mt-3 items-center justify-items-center'>
               <img src="/src/assets/images/brand-logo.png" alt="" />
               <img src="/src/assets/images/brand-logo2.png" alt="" />
               <img src="/src/assets/images/brand-logo-3.png" alt="" />
               <img src="/src/assets/images/brand-logo-4.png" alt="" />
               <img src="/src/assets/images/brand-logo-5.png" alt="" />
               <img src="/src/assets/images/brand-logo-6.png" alt="" />
            </div>
         </div> */}
         <div className='px-4'>
            <p className='text-4xl font-bold mb-5'>Trendy Collections</p>
            <p className='text-[#121212bf] text-[18px]'>Electronics products continue to drive innovation and shape the <br /> way we live, work, and interact with our environment.</p>

            {/* Product Slider Component */}
            <ProductSlider />

            {/* Product Category Component */}  
            <Category />

         </div>

         <div>
            {/* Infinite Scroll */}
            <InfiniteScrollText />
         </div>

         <div>
            {/* Best Products */}
            <BestProduct />
         </div>

         <div>
            {/* Shop */}
            <Shop />
         </div>

         <div>
             {/* Articles */}
             <Articles />
         </div>
      </section>
   </div>

  )
}

export default Page1
