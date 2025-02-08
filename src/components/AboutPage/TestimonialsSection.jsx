import React from "react";

const testimonials = [
  {
    name: "Emily Johnson",
    review: "Booking an event has never been this easy. Amazing platform!",
  },
  {
    name: "David Smith",
    review: "Smooth and hassle-free process. I found my favorite concert in seconds!",
  },
  {
    name: "Sarah Williams",
    review: "Customer support is top-notch. Highly recommended!",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Users Say</h2>
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic">"{testimonial.review}"</p>
              <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
