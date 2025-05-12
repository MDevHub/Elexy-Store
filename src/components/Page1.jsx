import React from 'react'
import bg from '../assets/images/bg.png'
import ProductSlider from './ProductSlider'
import Category from './Category'
import InfiniteScrollText from './InfiniteScroll'
import BestProduct from './BestProduct'
import Shop from './Shop'
import Articles from './Articles'


const Page1 = () => {
  return (
   <div className='w-[100%]'>
      <section className="bg-[url('/src/assets/images/bg.png')] bg-center bg-no-repeat bg-cover h-[150vh] w-full py-[10rem]">
         <div className='pl-[4rem] mb-[30vh]'>
            <p className='text-2xl text-[#333333] font-mono mb-8'>INTILECT PRO V25S</p>
            <h1 className='text-7xl font-[700] from-neutral-50 mb-8'>AI based CCTV Solutions <br /> for Home and Business</h1>
            <p className='text-[#121212bf] text-[17px] mb-8'>Closed-Circuit Television (CCTV) is a video surveillance system used to monitor and record <br />
            activities in various environments for security, safety, and monitoring purposes.</p>

            <div className=''>
               <button className='bg-black rounded-[9999px] py-3 px-8 outline-none border-0 mr-5 hover:translate-y-[-2px] transition-all'><a href="" className='text-white'>Shop Now</a></button>
               <button className='bg-transparent rounded-[9999px] py-3 px-8 outline-none border border-black mr-5 hover:bg-black hover:text-white transition-all'><a href="">View Details</a></button>
            </div>
         </div>

         <div className='flex items-center justify-between px-6'>
            <div>
               <p className='text-7xl font-[900] font-mono mb-3'>28%</p>
               <span className='text-[#121212dc]'>Discount for Intelligent & Modern <br /> CC Cameras setup collection</span>
            </div>
            <div className='grid grid-cols-3 gap-4 w-[70vw] h-[190px]'>
               <div className="bg-[url('/src/assets/images/product-banner-1.png')] bg-cover bg-center w-full rounded-2xl py-10 px-7 ">
                  <p className='mb-3 text-[#121212bf]'>MODERN</p>
                  <p className='mb-4 text-3xl font-bold'>$53.25</p>
                  <a href="#" className='underline text-[#121212bf] text-[18px] font-bold hover:text-black transition-all'>Shop Now</a>
               </div>
               <div className="bg-[url('/src/assets/images/product-banner-2.png')] bg-cover bg-center w-full rounded-2xl py-10 px-7 ">
                  <p className='text-[#121212bf]'>SPY</p>
                  <p className='mb-4 text-3xl font-bold'>$39.00</p>
                  <a href="#" className='underline text-[#121212bf] text-[18px] font-bold hover:text-black transition-all'>Shop Now</a>
               </div>
               <div className="bg-[url('/src/assets/images/product-banner-3.png')] bg-cover bg-center w-full rounded-2xl py-10 px-7">
                  <p className='text-[#121212bf]'>SMART</p>
                  <p className='mb-4 text-3xl font-bold'>$75.20</p>
                  <a href="#" className='underline text-[#121212bf] text-[18px] font-bold hover:text-black transition-all'>Shop Now</a>
               </div>
            </div>
         </div>
      </section>

      <section>
         <div className='py-24'>
            <p className='text-center text-3xl font-bold mb-16'>We've more than 180+ Happy Partners with their <br/> satisfaction and positive feedback</p>
            <div className='flex mt-20 px-20 items-center justify-between'>
               <img src="/src/assets/images/brand-logo.png" alt="" />
               <img src="/src/assets/images/brand-logo2.png" alt="" />
               <img src="/src/assets/images/brand-logo-3.png" alt="" />
               <img src="/src/assets/images/brand-logo-4.png" alt="" />
               <img src="/src/assets/images/brand-logo-5.png" alt="" />
               <img src="/src/assets/images/brand-logo-6.png" alt="" />
            </div>
         </div>
         <div className='px-6'>
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