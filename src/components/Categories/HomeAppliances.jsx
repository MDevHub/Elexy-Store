import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import prod12img from '../../assets/images/Rectangle_395.png'

const HomeAppliances = () => {

	const [showAvailability, setShowAvailability] = useState(false);
	const [showBrand, setShowBrand] = useState(false);
	const [showColor, setShowColor] = useState(false);


  return (
	<div>
		<div>
			<div className='pt-10 md:pt-14 pb-10 md:pb-14 px-5 bg-[#f3f3f3]'>
            <h1 className='font-bold text-3xl md:text-4xl mb-5'>Home Appliances</h1>
            <Link to="/" className="hover:text-gray-500 underline ">Home</Link>
            <span className='ml-3'><Link to="/homeappliances" className="hover:text-gray-500">/  Home Appliances</Link></span>
         </div>

			<div className='px-5 py-10'>
				<div className='flex gap-4 text-xl mb-8'>
					<p className=' hover:text-amber-600 cursor-pointer'>II</p>
					<p className=' hover:text-amber-600 cursor-pointer'> III</p>
					<p className=' hover:text-amber-600 cursor-pointer'>IIII</p>
				</div>
				<hr />
			</div>
		</div>

		<div className='flex items-centers justify-between py-8 px-5'>
			<div className=''>
				<div className='relative shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer'>
					<img src={prod12img}  className='rounded-t-xl'/>
					
					<div className='py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl' >
						<p className='text-xl font-bold mb-2'>Rectangle Lg</p>
						<p className='text-[16px] mr-2 text-[#121212e3] inline'> TK $78.0000</p> <span className='text-[#121212bf] line-through'>TK $148.000</span>
						<p className='text-[16px] font-[600] underline hover:text-gray-500 mt-2'>Select Options +</p>
					</div>
				</div>
			</div>
			
			<div className="w-64 space-y-8 hidden lg:block">
  				<div>
    				<div
						onClick={() => setShowAvailability(!showAvailability)}
						className="flex justify-between items-center cursor-pointer text-yellow-600 font-semibold mb-2"
					>
						<p>Availability</p>
						{showAvailability ? <FiChevronUp /> : <FiChevronDown />}
					</div>

					{showAvailability && (
						<div className="space-y-2">
							<label className="flex items-center space-x-2 text-gray-700">
								<input type="checkbox" className="form-checkbox" />
								<span>In stock (1)</span>
							</label>
							<label className="flex items-center space-x-2 text-gray-400">
								<input type="checkbox" className="form-checkbox" />
								<span>Out of stock (0)</span>
							</label>
						</div>
					)}
  				</div>

				{/* Brand */}
				<div>
					<div
						onClick={() => setShowBrand(!showBrand)}
						className="flex justify-between items-center cursor-pointer text-yellow-600 font-semibold mb-2"
					>
						<p>Brand</p>
						{showBrand ? <FiChevronUp /> : <FiChevronDown />}
					</div>

					{showBrand && (
						<div className="space-y-2">
							<label className="flex items-center space-x-2 text-gray-700">
								<input type="checkbox" className="form-checkbox" />
								<span>Samsung</span>
							</label>
							<label className="flex items-center space-x-2 text-gray-700">
								<input type="checkbox" className="form-checkbox" />
								<span>LG</span>
							</label>
						</div>
					)}
  				</div>

  				{/* Color */}
  				<div>
					<div
						onClick={() => setShowColor(!showColor)}
						className="flex justify-between items-center cursor-pointer text-yellow-600 font-semibold mb-2"
					>
						<p>Color</p>
						{showColor ? <FiChevronUp /> : <FiChevronDown />}
					</div>

					{showColor && (
						<div className="space-y-2">
						<label className="flex items-center space-x-2 text-gray-700">
							<input type="checkbox" className="form-checkbox" />
							<span>Black  (1)</span>
						</label>
						<label className="flex items-center space-x-2 text-gray-700">
							<input type="checkbox" className="form-checkbox" />
							<span>White  (1)</span>
						</label>
						</div>
					)}
				</div>
			</div>

		</div>
	</div>
  )
}

export default HomeAppliances