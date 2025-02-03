'use client';

import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'Music Festival 2025',
    date: 'March 15, 2025',
    location: 'Los Angeles, CA',
    image: '/music.webp',
  },
  {
    id: 2,
    title: 'Tech Conference',
    date: 'April 20, 2025',
    location: 'San Francisco, CA',
    image: '/tech.webp',
  },
  {
    id: 3,
    title: 'Art Expo',
    date: 'May 10, 2025',
    location: 'New York, NY',
    image: '/art.webp',
  },
];

export default function FeaturedEvents() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Events</h2>
        <p className="text-lg mb-10">Discover the most exciting events happening near you!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img src={event.image} alt={event.title} className="w-full h-52 object-cover " />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.location}</p>
                <Link href={`/events/${event.id}`} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
