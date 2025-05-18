import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/logo-2.png";
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

import { useCart } from "./Cart/CartContext";

const Header = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const menuRef = useRef(null);
	const overlayRef = useRef(null);
	const navRef = useRef(null);
	const [navHeight, setNavHeight] = useState(0);

	const location = useLocation();

	const handleScroll = () => {
		setIsSticky(window.scrollY > 0);
	};

	const handleResize = () => {
		if (window.innerWidth >= 850) {
			setMobileOpen(false);
		}
	};

	useEffect(() => {
		setNavHeight(navRef.current?.offsetHeight || 0);
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const desktopNavClasses = `hidden 850px:flex items-center justify-between px-9 py-5 w-full z-50 transition-all duration-300 ease-in-out ${
		isSticky ? 'fixed top-0 left-0 bg-white shadow-md' : 'relative'
	}`;

	const mobileNavClasses = `850px:hidden flex items-center justify-between px-4 py-6 w-full z-50 transition-all duration-300 ease-in-out ${
		isSticky ? 'fixed top-0 left-0 bg-white shadow-md' : 'relative'
	}`;

	const { cart } = useCart();

	return (
		<div className="w-full max-w-screen">
			<div style={{ height: isSticky ? `${navHeight}px` : "0px" }} />
			<div className={`bg-white pt-2 z-40 transition-all duration-300 ease-in-out ${isSticky ? 'fixed top-0 left-0 w-full' : 'relative'}`}>
				<p className="text-right px-4 pb-2 text-[#121212bf]">Free delivery on order over $300</p>
				<hr />
			</div>

			{/* Desktop Nav */}
			<nav ref={navRef} className={desktopNavClasses}>
				<ul className="flex gap-8 text-[17px] items-center">
					<li><Link to="/" className={`hover:text-gray-500 ${location.pathname === '/' ? 'text-gray-400' : ''}`}>Home</Link></li>
					<li><Link to="/kitchenappliances" className={`hover:text-gray-500 ${location.pathname === '/kitchenappliances' ? 'text-gray-400' : ''}`}>Shop</Link></li>
					<li><Link to="/products" className={`hover:text-gray-500 ${location.pathname === '/products' ? 'text-gray-400' : ''}`}>Products</Link></li>
					<li><Link to="/contact" className={`hover:text-gray-500 ${location.pathname === '/contact' ? 'text-gray-400' : ''}`}>Contact</Link></li>
				</ul>
				<div>
					<img src={logo} alt="logo" className="items-center" />
				</div>
				
				<div className="flex gap-5 items-center">
					<FiSearch className="text-xl cursor-pointer" onClick={() => setSearchOpen(true)} />
					<Link to="/cartpage" className="relative">
						<FiShoppingCart className="text-xl" />
						{cart.length > 0 && (
							<span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
								{cart.length}
							</span>
						)}
					</Link>
					<Link to="/profile"><FiUser className="text-xl" /></Link>
				</div>

			</nav>
			<hr />

			{/* Mobile Nav */}
			<nav className={mobileNavClasses}>
				<button onClick={() => setMobileOpen(!mobileOpen)} className="text-2xl">
					{mobileOpen ? <FiX /> : <FiMenu />}
				</button>

				<img src={logo} alt="logo" className="h-8 mx-auto" />

				<div className="flex gap-5 items-center">
					<FiSearch className="text-xl cursor-pointer" onClick={() => setSearchOpen(true)} />
					<Link to="/cartpage" className="relative">
						<FiShoppingCart className="text-xl" />
						{cart.length > 0 && (
							<span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
								{cart.length}
							</span>
						)}
					</Link>
				</div>

			</nav>

			{/* Search Overlay */}
			<div
				className={`fixed top-0 left-0 w-full h-[30vh] bg-white z-50 flex items-center px-6 shadow-md transform transition-transform duration-300 ease-in-out ${
					searchOpen ? 'translate-y-0' : '-translate-y-full'
				}`}
			>
				<input
					type="text"
					placeholder="Search our store"
					className="flex-1 h-10 px-4 border border-gray-300 rounded-full focus:outline-none"
				/>
				<button onClick={() => setSearchOpen(false)} className="ml-4 text-2xl">
					<FiX />
				</button>
			</div>

			{/* Mobile menu backdrop */}
			{mobileOpen && (
				<div
					ref={overlayRef}
					className="fixed inset-0 bg-black bg-opacity-50 z-40"
					onClick={() => setMobileOpen(false)}
				/>
			)}

			{/* Mobile menu panel */}
			<div
				ref={menuRef}
				className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-500 ${
					mobileOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="pb-1 bg-[#f0efefc9] pl-6">
					<img src={logo} alt="" className="py-4" />
				</div>
				<hr className="border bg-[#ffffffce]" />
				<ul className="flex flex-col gap-5 pt-5 font-[500] text-[#121212bf]">
					<li className="pl-6"><Link to="/" className={`text-lg ${location.pathname === '/' ? 'text-gray-400' : ''}`} onClick={() => setMobileOpen(false)}>Home</Link></li>
					<hr className="border bg-[#ffffffce]" />
					<li className="pl-6"><Link to="/kitchenappliances" className={`text-lg ${location.pathname === '/shop' ? 'text-gray-400' : ''}`} onClick={() => setMobileOpen(false)}>Shop</Link></li>
					<hr className="border bg-[#ffffffce]" />
					<li className="pl-6"><Link to="/products" className={`text-lg ${location.pathname === '/products' ? 'text-gray-400' : ''}`} onClick={() => setMobileOpen(false)}>Products</Link></li>
					<hr className="border bg-[#ffffffce]" />
					<li className="pl-6"><Link to="/contact" className={`text-lg ${location.pathname === '/contact' ? 'text-gray-400' : ''}`} onClick={() => setMobileOpen(false)}>Contact</Link></li>
					<hr className="border bg-[#ffffffce]" />
					<li className="pl-6"><Link to="/profile" className={`text-lg ${location.pathname === '/profile' ? 'text-gray-400' : ''}`} onClick={() => setMobileOpen(false)}><FiUser className="inline" /> Profile</Link></li>
					<hr className="border bg-[#ffffffce]" />
				</ul>
			</div>
		</div>
	);
};

export default Header;
