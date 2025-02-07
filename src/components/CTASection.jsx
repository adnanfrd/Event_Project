'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-16 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Plan, Book, and Experience Amazing Events</h2>
        <p className="text-lg sm:text-xl mb-6">
          Discover exciting events, manage your bookings, and create unforgettable memories with ease.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/bookings">
            <button className="px-6 py-3 bg-white text-purple-600 font-semibold text-lg rounded-md shadow-lg hover:bg-gray-200 transition duration-300">
              Book Now
            </button>
          </Link>
          <Link href="/events">
            <button className="px-6 py-3 bg-white text-pink-500 font-semibold text-lg rounded-md shadow-lg hover:bg-gray-200 transition duration-300">
              Explore Events
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}