'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-white">EventHub</Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-200">Home</Link>
            <Link href="/events" className="text-white hover:text-gray-200">Events</Link>
            <Link href="/about" className="text-white hover:text-gray-200">About</Link>
            <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
          </div>

          <div className="hidden md:flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-lg">
            <Search className="h-5 w-5 text-white" />
            <input 
              type="text" 
              placeholder="Search events..." 
              className="ml-2 bg-transparent focus:outline-none text-white placeholder-white"
            />
          </div>

          <div className="hidden md:flex space-x-4">
            <Link href="/login" className="text-white border px-4 py-1.5 rounded-lg border-white hover:bg-white hover:text-pink-600">Login</Link>
            <Link href="/signup" className="bg-white text-pink-600 px-4 py-1.5 rounded-lg hover:bg-gray-200">Sign Up</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-600 to-pink-500 shadow-md p-4 space-y-4">
          <Link href="/" className="block text-white hover:text-gray-200">Home</Link>
          <Link href="/events" className="block text-white hover:text-gray-200">Events</Link>
          <Link href="/about" className="block text-white hover:text-gray-200">About</Link>
          <Link href="/contact" className="block text-white hover:text-gray-200">Contact</Link>
          <hr className="border-white" />
          <Link href="/login" className="block text-white border px-4 py-1.5 rounded-lg border-white hover:bg-white hover:text-pink-600 text-center">Login</Link>
          <Link href="/signup" className="block bg-white text-pink-600 px-4 py-1.5 rounded-lg hover:bg-gray-200 text-center">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}