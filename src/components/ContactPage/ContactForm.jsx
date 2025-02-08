"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 w-full lg:w-2/3">
      <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-500 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
