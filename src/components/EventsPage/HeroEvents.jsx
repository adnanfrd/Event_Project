import React from "react";
import { ArrowDown } from "lucide-react"; // Import the Arrow Down icon

const HeroEvents = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Welcome to Our Upcoming Events
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6">
          Join us for exciting events, workshops, and activities that will inspire and engage you!
        </p>
        <a
          href="#events"
          className="mt-8  px-8 py-3 bg-white text-purple-500 font-semibold rounded-full shadow-lg transition-all hover:bg-purple-600 hover:text-white flex items-center space-x-3"
        >
          <span>Explore Events Below!</span>
          <ArrowDown className="h-5 w-5 text-purple-500 transition-all group-hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default HeroEvents;
