'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { Facebook, Github } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 p-8 bg-gradient-to-r from-pink-500 to-purple-500">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Welcome Back</h2>
        <p className="text-gray-600 mb-4">Login to access your account and manage your events.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-500 transition"
          >
            Log In
          </button>
        </form>

        <div className="my-4 text-gray-500">or log in with</div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button className="flex justify-center items-center space-x-2 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition w-full">
            <FcGoogle className="text-xl" />
            <span className="hidden sm:inline">Google</span>
          </button>
          <button className="flex justify-center items-center space-x-2 bg-gray-100 p-3 rounded-lg text-blue-600 hover:bg-gray-200 transition w-full">
            <Facebook className="text-xl" />
            <span className="hidden sm:inline">Facebook</span>
          </button>
          <button className="flex justify-center items-center space-x-2 bg-gray-100 p-3 rounded-lg text-gray-900 hover:bg-gray-200 transition w-full">
            <Github className="text-xl" />
            <span className="hidden sm:inline">GitHub</span>
          </button>
        </div>

        <p className="mt-4 text-gray-600">
          Don't have an account? <Link href="/signup" className="text-purple-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
