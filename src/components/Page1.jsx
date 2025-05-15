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
      <section className="relative lg:bg-[url('/src/assets/images/bg.png')] bg-center bg-no-repeat bg-cover lg:h-[150vh] w-full lg:py-[10rem]">
         <div className="block lg:hidden mb-10 items-center ">
            <img src={bg} alt="Background" className="w-full h-auto object-cover" />
         </div>
         <div className='pl-[1rem] md:pl-[4rem] mb-[5vh] md:mb-[30vh]'>
            <p className='text-xl md:text-2xl text-[#333333] font-mono mb-4 md:mb-8'>INTILECT PRO V25S</p>
            <h1 className='text-4xl md:text-7xl font-[700] from-neutral-50 first: mb-5 md:mb-8'>AI based CCTV Solutions <br /> for Home and Business</h1>
            <p className='text-[#121212bf] text-[17px] mb-8'>Closed-Circuit Television (CCTV) is a video surveillance system used to monitor and record <br />
            activities in various environments for security, safety, and monitoring purposes.</p>

            <div className='flex md:hidden'>
               <button className='flex bg-black rounded-[9999px] py-1 px-4 outline-none border-0 mr-5 hover:translate-y-[-2px] transition-all whitespace-nowrap text-center items-center'><a href="" className='text-white'>Shop Now</a></button>
               <button className='bg-transparent rounded-[9999px] py-3 px-4 outline-none border border-black mr-5 hover:bg-black hover:text-white transition-all whitespace-nowrap'><a href="">View Details</a></button>
            </div>
            <div className='hidden md:block'>
               <button className='bg-black rounded-[9999px] py-3 px-6 outline-none border-0 mr-5 hover:translate-y-[-2px] transition-all'><a href="" className='text-white'>Shop Now</a></button>
               <button className='bg-transparent rounded-[9999px] py-3 px-6 outline-none border border-black mr-5 hover:bg-black hover:text-white transition-all'><a href="">View Details</a></button>
            </div>
         </div>

         <div className="relative bg-[url('/src/assets/images/bg.png')] w-full block lg:flex items-center lg:justify-between pt-16 px-6 pb-10">
            <div>
               <p className='text-4xl md:text-7xl font-[900] font-mono mb-3'>28%</p>
               <span className='text-[#121212dc]'>Discount for Intelligent & Modern <br /> CC Cameras setup collection</span>
            </div>
            <div className='grid mt-3 grid-cols-1 md:grid-cols-3 gap-4 w-[85vw] md:w-[70vw] h-[220px] relative '>
               <div className="bg-[url('/src/assets/images/product-banner-1.png')] bg-cover :bg-center w-[full] rounded-2xl py-10 px-3 md:px-7">
                  <p className='mb-3 text-[#121212bf]'>MODERN</p>
                  <p className='mb-4 text-3xl font-bold'>$53.25</p>
                  <a href="#" className='underline text-[#121212bf] text-[18px] font-bold hover:text-black transition-all'>Shop Now</a>
               </div>
               <div className="hidden md:block bg-[url('/src/assets/images/product-banner-2.png')] bg-cover bg-center w-full rounded-2xl py-10 px-7 ">
                  <p className='text-[#121212bf]'>SPY</p>
                  <p className='mb-4 text-3xl font-bold'>$39.00</p>
                  <a href="#" className='underline text-[#121212bf] text-[18px] font-bold hover:text-black transition-all'>Shop Now</a>
               </div>
               <div className="hidden md:block bg-[url('/src/assets/images/product-banner-3.png')] bg-cover bg-center w-full rounded-2xl py-10 px-7">
                  <p className='text-[#121212bf]'>SMART</p>
                  <p className='mb-4 text-3xl font-bold'>$75.20</p>
                  <a href="#" className='underline text-[#121212bf] text-[18px] font-bold hover:text-black transition-all'>Shop Now</a>
               </div>
            </div>
         </div>
      </section>

      <section>
         <div className='py-24 mt-14'>
            <p className='text-center text-2xl md:text-3xl font-bold mb-14'>We've more than 180+ Happy Partners with their <br/> satisfaction and positive feedback</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-20 px-10 lg:px-20 mt-3 items-center  justify-center'>
               <img src="/src/assets/images/brand-logo.png" alt="" />
               <img src="/src/assets/images/brand-logo2.png" alt="" />
               <img src="/src/assets/images/brand-logo-3.png" alt="" />
               <img src="/src/assets/images/brand-logo-4.png" alt="" />
               <img src="/src/assets/images/brand-logo-5.png" alt="" />
               <img src="/src/assets/images/brand-logo-6.png" alt="" />
            </div>
         </div>
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