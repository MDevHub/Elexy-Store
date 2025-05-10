import React from 'react'
import logo from '../assets/images/logo-2.png';

const Header = () => {
  return (
      <div>
         <nav className='flex justify-between py-6 px-20 w-screen'>
            <div>
               <img src={logo} alt="logo" />
            </div>
            <div>
               <ul className='flex gap-8 text-[16px]'>
                  <li><a href="" className='hover:text-gray-500'>Home</a></li>
                  <li><a href="" className='hover:text-gray-500'>Shop</a></li>
                  <li><a href="" className='hover:text-gray-500'>Products</a></li>
                  <div>
                     <li className='mb-4'><a href="" className='hover:text-gray-500'>Pages</a></li>
                     <span className='absolute py-5 items-center z-10'>
                        <li className='mb-[6px]'><a href="" className='hover:text-gray-500'>About us</a></li>
                        <li className='mb-[6px]'><a href="" className='hover:text-gray-500'>Contact us</a></li>
                        <li className='mb-[6px]'><a href="" className='hover:text-gray-500'>Faq's</a></li>
                        <li className='mb-[6px]'><a href="" className='hover:text-gray-500'>Teams</a></li>
                     </span>
                  </div>
                  <li><a href="" className='hover:text-gray-500'>Contact</a></li>
               </ul>
            </div>
         </nav>
      </div>
  )
}

export default Header