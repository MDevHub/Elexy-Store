import React from 'react'
import logo from '../assets/images/logo-2.png';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  return (
      <div className='w-[100%] max-w-screen'>
         <nav className='flex justify-between py-5 pl-20 pr-24 items-center'>
            <div>
               <img src={logo} alt="logo" />
            </div>
            <div>
               <ul className='flex gap-8 text-[16px] items-center'>
                  <li><a href="" className='hover:text-gray-500'>Home</a></li>
                  <li><a href="" className='hover:text-gray-500'>Shop</a></li>
                  <li><a href="" className='hover:text-gray-500'>Products</a></li>
                  <li className="relative group">
                     <a href="" className="hover:text-gray-500 flex items-center">Pages <FiChevronDown className="ml-2"/></a>

                     <ul className="absolute left-0 pt-7 bg-white shadow-lg py-6 pl-5 pr-10 rounded-lg hidden group-hover:block z-10 min-w-[200px]">
                        <li className="mb-3">
                           <a href="" className="hover:text-gray-500">
                              About us
                           </a>
                        </li>
                        <li className="mb-3">
                           <a href="" className="hover:text-gray-500">
                              Contact us
                           </a>
                        </li>
                        <li className="mb-3">
                           <a href="" className="hover:text-gray-500">
                              FAQs
                           </a>
                        </li>
                        <li className="mb-3">
                           <a href="" className="hover:text-gray-500">
                              Teams
                           </a>
                        </li>
                     </ul>
                  </li>
                  <li><a href="" className='hover:text-gray-500'>Contact</a></li>
               </ul>
            </div>
         </nav>
      </div>
  )
}

export default Header