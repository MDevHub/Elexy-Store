import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useCart } from '../../components/Cart/CartContext';

import prod12img from '../../assets/images/product-12.png';
import prod11img from '../../assets/images/product-5.png';
import prod1img from '../../assets/images/product-1.png';
import prod2img from '../../assets/images/product-2.png';
import prod3img from '../../assets/images/product-3.png';
import prod4img from '../../assets/images/product-4.png';

const Laptops = () => {
  const [showAvailability, setShowAvailability] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showColor, setShowColor] = useState(false);

  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Maxoni Microwave Oven 1', price: 78000, img: prod12img },
    { id: 2, name: 'Maxoni Microwave Oven 2', price: 78000, img: prod11img },
    { id: 3, name: 'Maxoni Microwave Oven 3', price: 78000, img: prod1img },
    { id: 4, name: 'Maxoni Microwave Oven 4', price: 78000, img: prod2img },
    { id: 5, name: 'Maxoni Microwave Oven 5', price: 78000, img: prod3img },
    { id: 6, name: 'Maxoni Microwave Oven 6', price: 78000, img: prod4img },
  ];

  return (
    <div>
      <div>
        <div className="pt-10 md:pt-14 pb-10 md:pb-14 px-5 bg-[#f3f3f3]">
          <h1 className="font-bold text-3xl md:text-4xl mb-5">Pc and Laptops</h1>
          <Link to="/" className="hover:text-gray-500 underline">
            Home
          </Link>
          <span className="ml-3">
            <Link to="/laptops" className="hover:text-gray-500">
              / Pc and Laptops
            </Link>
          </span>
        </div>

        <div className="px-5 py-10">
          <div className="flex gap-4 text-xl mb-8">
            <p className="hover:text-amber-600 cursor-pointer">II</p>
            <p className="hover:text-amber-600 cursor-pointer"> III</p>
            <p className="hover:text-amber-600 cursor-pointer">IIII</p>
          </div>
          <hr />
        </div>
      </div>

      <div className="flex items-centers justify-between gap-24 py-8 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative shadow-md hover:shadow-lg hover:shadow-[#8080806c] transition-shadow duration-300 rounded-xl cursor-pointer"
            >
              <img src={product.img} alt={product.name} className="rounded-t-xl" />

              <div className="py-5 pl-5 outline-none border-b border-x border-b-[#ffffff] shadow-5xl rounded-b-xl">
                <p className="text-xl font-bold mb-2">{product.name}</p>
                <p className="text-[16px] mr-2 text-[#121212e3] inline"> TK ${product.price}</p>{' '}
                <span className="text-[#121212bf] line-through">TK $148.000</span>
                <button
                  onClick={() => {
                    addToCart(product);
                    alert(`${product.name} has been added to the cart.`);
                  }}
                  className="text-[16px] font-[600] underline hover:text-gray-500 mt-2 block"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
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
                  <span>Black (1)</span>
                </label>
                <label className="flex items-center space-x-2 text-gray-700">
                  <input type="checkbox" className="form-checkbox" />
                  <span>White (1)</span>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptops;
