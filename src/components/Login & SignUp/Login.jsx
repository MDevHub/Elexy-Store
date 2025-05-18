import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // You must have this context set up

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      const newErrors = {};
      if (!email.trim()) newErrors.email = 'Email is required';
      if (!password.trim()) newErrors.password = 'Password is required';

      setErrors(newErrors);
      setAuthError('');

      if (Object.keys(newErrors).length > 0) return;

      // Check user credentials
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const matchedUser = users.find(user => user.email === email && user.password === password);

      if (matchedUser) {
      login(matchedUser); // Save user to context
      localStorage.setItem('authUser', JSON.stringify(matchedUser)); // Fake token
      navigate('/profile'); // Redirect after login
      } else {
      setAuthError('Invalid email or password');
      }
   };

  return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white font-serif">
      <h1 className="text-4xl font-bold mb-14">Login</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        {authError && <p className="text-red-600 text-center">{authError}</p>}

         <div>
            <label htmlFor="email" className="block mb-3 text-sm font-medium text-gray-700">Email</label>
            <input
               type="email"
               id="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Email"
               className={`w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-1 focus:shadow-md ${
                  errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-[#0e0d0ddc]'
               }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
         </div>

         <div>
            <label htmlFor="password" className="block mb-3 text-sm font-medium text-gray-700">Password</label>
            <input
               type="password"
               id="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Password"
               className={`w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-1 focus:shadow-md ${
                  errors.password ? 'border-red-500' : 'border-gray-300 focus:ring-[#0e0d0ddc]'
               }`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
         </div>

         <div className="text-right">
            <a href="#" className="text-sm text-gray-600 underline hover:text-black">Forgot your password?</a>
         </div>

         <button
            type="submit"
            className="w-full py-3 bg-transparent border border-black outline-none text-black rounded-full hover:bg-[black] hover:text-white transition"
         >
            Sign In
         </button>
      </form>

      <Link to="/signup">
        <p className="mt-6 text-sm text-gray-600">
          New customer? <span className="underline hover:text-black">Sign up for an account</span>
        </p>
      </Link>
    </div>
  );
};

export default Login;
