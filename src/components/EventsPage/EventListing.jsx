'use client';
import React, { useState } from "react";

const events = [
  {
    id: 1,
    title: "Yoga Workshop",
    image: "/fitness.jpeg",
    date: "2025-02-10",
    price: "$50",
    location: "New York",
    category: "Wellness",
  },
  {
    id: 2,
    title: "Tech Conference",
    image: "/tech.webp",
    date: "2025-03-15",
    price: "$150",
    location: "San Francisco",
    category: "Tech",
  },
  {
    id: 3,
    title: "Art Exhibition",
    image: "/art.webp",
    date: "2025-02-25",
    price: "$20",
    location: "Chicago",
    category: "Art",
  },
  {
    id: 4,
    title: "Cooking Class",
    image: "/cooking.jpeg",
    date: "2025-02-18",
    price: "$40",
    location: "Los Angeles",
    category: "Food",
  },
  {
    id: 5,
    title: "Fitness Bootcamp",
    image: "/yoga.jpeg",
    date: "2025-02-20",
    price: "$60",
    location: "Miami",
    category: "Fitness",
  },
  {
    id: 6,
    title: "Photography Workshop",
    image: "/music.webp",
    date: "2025-03-05",
    price: "$100",
    location: "Austin",
    category: "Photography",
  },
];

const EventListing = () => {
  const [filters, setFilters] = useState({
    date: "",
    location: "",
    category: "",
    price: "",
  });

  const filteredEvents = events.filter((event) => {
    return (
      (!filters.date || event.date === filters.date) &&
      (!filters.location || event.location === filters.location) &&
      (!filters.category || event.category === filters.category) &&
      (!filters.price || event.price === filters.price)
    );
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row">
        {/* Filters */}
        <div className="lg:w-1/4 mb-8 lg:mb-0 pr-4">
          <h3 className="text-2xl font-semibold mb-6">Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Location</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Chicago">Chicago</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Miami">Miami</option>
                <option value="Austin">Austin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Category</option>
                <option value="Wellness">Wellness</option>
                <option value="Tech">Tech</option>
                <option value="Art">Art</option>
                <option value="Food">Food</option>
                <option value="Fitness">Fitness</option>
                <option value="Photography">Photography</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <select
                value={filters.price}
                onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Price</option>
                <option value="$20">$20</option>
                <option value="$40">$40</option>
                <option value="$50">$50</option>
                <option value="$60">$60</option>
                <option value="$100">$100</option>
                <option value="$150">$150</option>
              </select>
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-lg font-semibold mt-2">{event.price}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventListing;
