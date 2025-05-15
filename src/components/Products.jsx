import React from 'react'
import { Link } from "react-router-dom";

import categoryImg1 from '../assets/images/Rectangle_395.png'
import categoryImg2 from '../assets/images/Rectangle_396.png'
import categoryImg3 from '../assets/images/Rectangle_397.png'
import categoryImg4 from '../assets/images/Rectangle_398.png'
import categoryImg5 from '../assets/images/Rectangle_399.png'
import categoryImg6 from '../assets/images/banner-h2.png'
import categoryImg7 from '../assets/images/banner-h4.png'
import categoryImg8 from '../assets/images/demo-5-banner-3.png'


const Products = () => {
  return (
      <div className=''>
        <div className='pt-40 pb-20 text-center bg-[#f3f3f3]'>
            <h1 className='font-bold text-4xl mb-5'>Collection</h1>
            <Link to="/" className="hover:text-gray-500 underline">Home</Link>
            <span className='ml-3'><Link to="/products" className="hover:text-gray-500">/  Collection</Link></span>
         </div>

         <div className='text-[#000000e0] mt-16 px-4'>
            <h1 className='text-4xl text-center font-bold mb-3'>Collections</h1>
            <p className=' text-center mb-3'>At our store you will find a wide selection of products to suit your every need.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mb-40 text-center'>
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
                  <p className='text-black font-bold my-2 text-xl'>Spaker</p>
                  <p>6 Items</p>
               </div>
         
               <div>
                  <div className='rounded-[99999px] outline-none border-none  group overflow-hidden'>
                     <img src={categoryImg3} className="w-full object-cover height-full group-hover:scale-105 transition-all duration-700 ease-in-out"/> 
                  </div>
                  <p className='text-black font-bold my-2 text-xl'>Phone and tablets</p>
                  <p>10 Items</p>
                  
               </div>
         
               <div>
                  <div className='rounded-[99999px] outline-none border-none  group overflow-hidden'>
                     <img src={categoryImg4} className="w-full object-cover height-full group-hover:scale-105 transition-all duration-700 ease-in-out"/> 
                  </div>
                  <p className='text-black font-bold my-2 text-xl'>Pc and Laptops</p>
                  <p>11 Items</p>
               </div>
      
               <div>
                  <div className='rounded-[99999px] outline-none border-none  group overflow-hidden'>
                     <img src={categoryImg5}  className='rounded-2xl object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 origin-bottom'/> 
                  </div>
                  <p className='text-black font-bold my-2 text-xl'>Accessories</p>
                  <p>6 Items</p>
               </div>

                <div>
                  <div className='rounded-[99999px] outline-none border-none  group overflow-hidden'>
                     <img src={categoryImg6}  className='rounded-2xl object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 origin-bottom'/> 
                  </div>
                  <p className='text-black font-bold my-2 text-xl'>Sale</p>
                  <p>6 Items</p>
               </div>

               <div>
                  <div className='rounded-[99999px] outline-none border-none  group overflow-hidden'>
                     <img src={categoryImg7}  className='rounded-2xl object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105 origin-bottom'/> 
                  </div>
                  <p className='text-black font-bold my-2 text-xl'>Head Set</p>
                  <p>4 Items</p>
               </div>
            </div>
         </div>
      </div>
  )
}

export default Products