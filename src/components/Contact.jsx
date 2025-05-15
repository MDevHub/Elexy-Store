import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';

import instagramImg1 from '../assets/images/instagram-1.png'
import instagramImg2 from '../assets/images/instagram-2.png'
import instagramImg3 from '../assets/images/instagram-3.png'
import instagramImg4 from '../assets/images/instagram-4.png'

const Contact = () => {
  	return (
    	<div className=''>
      	<div className='pt-40 pb-20 text-center bg-[#f3f3f3]'>
        		<h1 className='font-bold text-4xl mb-5'>Contact</h1>
				<Link to="/" className="hover:text-gray-500 underline">Home</Link>
				<span className='ml-3'><Link to="/contact" className="hover:text-gray-500">/  Contact</Link></span>
      	</div>

			<div className='lg:flex justify-between gap-16 px-4 pt-32 pb-24'>
				<div className='w-full lg:max-w-[45%]'>
					<h2 className='text-2xl md:text-4xl font-bold mb-5'>Let’s Collaborate</h2>
					<p className='text-[#121212bf] text-[17px] mb-5'>The Best electronics products continue to drive innovation we live, work, and interact with our environment opportunities customers to test out products before making a purchase.innovation, we live, work,
						and interact with our environment, opportunities
					</p>
						<p className='text-2xl font-bold text-[#121212bf]'>Phone:</p>
						<p className='text-xl md:text-2xl font-bold mb-8'>+(2) 123 -456 -789</p>

						<p className='text-2xl font-bold text-[#121212bf]'>Email:</p>
						<p  className='text-xl md:text-2xl font-bold mb-8'>support@example.com</p>

						<p className='text-2xl font-bold text-[#121212bf]'>Head office:</p>
						<p  className='text-xl md:text-2xl font-bold mb-8'>70 Washington SquareNew York, NY 10012, USA
					</p>
				</div>
				<div className='bg-[#e7e4e4] py-12 px-8 rounded-3xl w-full'>
					<p className='text-3xl font-bold'>Say hello</p>
					<div className='mt-10 block pr-6'>
						<input type="text" name="" id="" placeholder='Name:' className='w-full block bg-transparent placeholder:font-bold placeholder:text-black placeholder:text-[18px] border-b border-gray-400 outline-none pb-3 focus:border-b focus:border-black transition-all duration-200 mb-10' />
						<input type="email:" name="" id="" placeholder='Email:' className='w-full block bg-transparent placeholder:font-bold placeholder:text-black placeholder:text-[18px] border-b border-gray-400 outline-none pb-3 focus:border-b focus:border-black transition-all duration-200 mb-10' />
						<input type="tel" name="tel" id="" placeholder='Phone Number:' className='w-full block bg-transparent placeholder:font-bold placeholder:text-black placeholder:text-[18px] border-b border-gray-400 outline-none pb-3 focus:border-b focus:border-black transition-all duration-200 mb-10' />
						<input type="text" name="message" id="" placeholder='Message:' className='w-full block bg-transparent placeholder:font-bold placeholder:text-black placeholder:text-[18px] border-b border-gray-400 outline-none pb-20 focus:border-b focus:border-black transition-all duration-200 mb-10' />
						<button className='font-semibold border border-black py-2 px-6 rounded-full hover:text-white hover:bg-black transition-all duration-400 hover:outline-none'><a href="#">Send Now</a></button>
					</div>
				</div>
			</div>
			
			<p className='text-4xl text-center font-bold mb-20'>Instagram Shop</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
				<div className='relative group overflow-hidden'>
					<img src={instagramImg1} className='transition-transform duration-700 group-hover:scale-110 hover:opacity-0'/>
					
					<div className='absolute inset-0 flex items-center justify-center'>
						<FaInstagram className='text-white w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black p-5 rounded-full' />
					</div>
				</div>

				<div className='relative group overflow-hidden'>
					<img src={instagramImg2} className='transition-transform duration-700 group-hover:scale-110 hover:opacity-0'/>
					
					<div className='absolute inset-0 flex items-center justify-center'>
						<FaInstagram className='text-white w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black p-5 rounded-full' />
					</div>
				</div>

				<div className='relative group overflow-hidden'>
					<img src={instagramImg3} className='transition-transform duration-700 group-hover:scale-110 hover:opacity-0'/>
					
					<div className='absolute inset-0 flex items-center justify-center'>
						<FaInstagram className='text-white w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black p-5 rounded-full' />
					</div>
				</div>

				<div className='relative group overflow-hidden'>
					<img src={instagramImg4} className='transition-transform duration-700 group-hover:scale-110 hover:opacity-0'/>
					
					<div className='absolute inset-0 flex items-center justify-center'>
						<FaInstagram className='text-white w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black p-5 rounded-full' />
					</div>
				</div>
			</div>
		</div>
  )
}

export default Contact     