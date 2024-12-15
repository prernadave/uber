import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen pt-8 flex flex-col justify-between bg-[url('https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      {/* Uber Logo Section */}
      <img
        className="w-24 ml-8 -mt-4"  // Set width for the logo and position it with margin
        src="https://imgs.search.brave.com/8a_qL2VRNyA-diMocFGJ7WcipmBllWd81BXdy_uUTPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy91YmVyLWxvZ28t/YmxhY2stYW5kLXdo/aXRlLnBuZw"
        alt="Uber company logo"  // Alt text for accessibility
      />

      {/* Main Content Section */}
      <div className="bg-white py-6 px-8 w-full max-w-md mx-auto rounded-lg shadow-lg">
        {/* Heading for the main content */}
        <h2 className="text-3xl font-bold mb-4 text-center">
          Get Started with Uber
        </h2>

        {/* Link to the Login page */}
        <Link  
          to="/login"  // Routing to login page
          className="flex items-center justify-center w-full bg-black py-3 text-white rounded hover:bg-gray-800 transition duration-300 text-2xl"
          aria-label="Continue with Uber"  // Provides a descriptive label for screen readers
        >
          Continue  {/* Button text */}
        </Link>
      </div>
    </div>
  );
}

export default Home;
