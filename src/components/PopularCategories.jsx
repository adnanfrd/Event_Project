'use client';

import Link from 'next/link';
import { Music, Mic, Brush, Laptop, Film, Utensils } from 'lucide-react';

const categories = [
  { id: 1, name: 'Music Festivals', icon: <Music size={40} />, link: '/categories/music-festivals' },
  { id: 2, name: 'Conferences', icon: <Mic size={40} />, link: '/categories/conferences' },
  { id: 3, name: 'Art Exhibitions', icon: <Brush size={40} />, link: '/categories/art-exhibitions' },
  { id: 4, name: 'Tech Events', icon: <Laptop size={40} />, link: '/categories/tech-events' },
  { id: 5, name: 'Film Screenings', icon: <Film size={40} />, link: '/categories/film-screenings' },
  { id: 6, name: 'Food Festivals', icon: <Utensils size={40} />, link: '/categories/food-festivals' },
];

export default function PopularCategories() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Categories</h2>
        <p className="text-lg mb-10">Explore events by category and find the perfect experience for you!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link key={category.id} href={category.link} className="block bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:bg-pink-500 hover:text-white transition">
              <div className="flex flex-col items-center justify-center">
                <div className="mb-4 text-purple-600">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}