import React from "react";

const CTASectionAbout = () => {
  return (
    <div className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Book Your Next Event?</h2>
        <p className="text-lg sm:text-xl mb-6">
          Explore upcoming events and secure your spot now. Don’t miss out!
        </p>
        <a
          href="/events"
          className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all hover:bg-purple-700"
        >
          Browse Events
        </a>
      </div>
    </div>
  );
};

export default CTASectionAbout;
