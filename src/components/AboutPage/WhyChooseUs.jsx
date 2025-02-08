import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    "Easy & Fast Booking",
    "Verified Event Listings",
    "Secure Payment Methods",
    "24/7 Customer Support",
    "Personalized Recommendations",
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Us?</h2>
        <ul className="space-y-4 text-lg">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-white" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
