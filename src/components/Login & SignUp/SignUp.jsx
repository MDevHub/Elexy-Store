import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
   const navigate = useNavigate();
   const [form, setForm] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
   });
  
   const [error, setError] = useState('');

   const handleChange = e => {
      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleSubmit = e => {
      e.preventDefault();

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(user => user.email === form.email);

      if (existingUser) {
         setError('Email already registered. Please log in.');
         return;
      }

      const newUser = {
         name: `${form.firstName} ${form.lastName}`,
         email: form.email,
         password: form.password,
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/login');
   };

   return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white font-serif">
      <h1 className="text-4xl font-bold mb-14">SignUp</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        {error && <p className="text-red-600 text-center">{error}</p>}

         <div>
            <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0e0d0ddc] focus:shadow-md"
            />
         </div>

         <div>
            <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0e0d0ddc] focus:shadow-md"
            />
         </div>

         <div>
            <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0e0d0ddc] focus:shadow-md"
            />
         </div>

         <div>
            <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0e0d0ddc] focus:shadow-md"
            />
         </div>

         <button
            type="submit"
            className="w-full py-3 bg-transparent border border-black outline-none text-black rounded-full hover:bg-[black] hover:text-white transition"
         >
            Sign Up
         </button>
      </form>

      <Link to="/login">
         <p className="mt-6 text-sm text-gray-600">
            Already have an account?{' '}
            <span className="underline hover:text-black">Sign in to your account</span>
         </p>
      </Link>
    </div>
  );
};

export default SignUp;
