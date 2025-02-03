// pages/index.js

export default function HeroHome() {
    return (
      <div 
        className="relative h-screen flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/herotech.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Plan Your Event with Ease
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
            Discover, book, and manage your next event seamlessly with our all-in-one platform.
          </p>
          <div className="mt-8">
            <a
              href="#services"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg rounded-md hover:from-pink-500 hover:to-purple-600 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    );
  }