import React from "react";
import Image from "next/image"; 

const AboutSection = () => {
  return (
    <div className="relative flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/herotech.png" 
            alt="Event Booking"
            width={400}
            height={300}
            className="rounded-2xl shadow-lg max-w-full h-auto"
          />
        </div>

        <div className="lg:w-1/2 mt-6 lg:mt-0 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Our Event Booking</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 px-2 sm:px-0">
            Our platform makes event booking effortless. From concerts to workshops, 
            discover and book your favorite events hassle-free!
          </p>
          <a
            href="/about"
            className="inline-flex items-center justify-center space-x-2 bg-white text-purple-500 font-semibold py-3 px-6 rounded-full shadow-lg transition-all hover:bg-purple-600 hover:text-white"
          >
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
