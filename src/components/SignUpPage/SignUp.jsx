'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { Facebook, Github } from 'lucide-react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', name, email, password);
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center px-4 sm:px-6  mt-10 lg:px-8 bg-gradient-to-r from-pink-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Create an Account</h2>
        <p className="text-gray-600 mb-4">Join us and start booking amazing events today!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
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
            Sign Up
          </button>
        </form>

        <div className="my-4 text-gray-500">or sign up with</div>

        <div className="flex justify-center space-x-4">
          <button className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition">
            <FcGoogle className="text-xl" />
            <span>Google</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg text-blue-600 hover:bg-gray-200 transition">
            <Facebook className="text-xl" />
            <span>Facebook</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg text-gray-900 hover:bg-gray-200 transition">
            <Github className="text-xl" />
            <span>GitHub</span>
          </button>
        </div>

        <p className="mt-4 text-gray-600">
          Already have an account? <Link href="/login" className="text-purple-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
