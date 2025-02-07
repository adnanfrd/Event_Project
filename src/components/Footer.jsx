'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold">EventHub</h2>
            <p className="mt-2 text-sm">Your one-stop solution for event booking and management. Plan, discover, and create unforgettable experiences with ease.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/events" className="hover:underline">Events</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-sm">123 Event Street, City, Country</p>
            <p className="text-sm">Email: support@eventhub.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EventHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
