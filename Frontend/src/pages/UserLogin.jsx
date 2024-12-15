import React from "react";
import { Link } from "react-router-dom";
import CaptainSingup from "./CaptainSingup";  // Importing CaptainSignup component (though not used here)

function UserLogin() {
  return (
    <>
      {/* Main container div with padding and flex layout */}
      <div className="p-5 flex flex-col justify-between h-screen sm:p-6">
        
        {/* Logo Section */}
        <div>
          <img
            className="w-20 mx-auto mb-10"  // Center the logo with margin-bottom
            src="https://imgs.search.brave.com/8a_qL2VRNyA-diMocFGJ7WcipmBllWd81BXdy_uUTPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy91YmVyLWxvZ28t/YmxhY2stYW5kLXdo/aXRlLnBuZw"
            alt="Uber-company-logo"  // Alt text for the logo
          />
          
          {/* Form Section */}
          <form className="-mt-4" action="">
            {/* Email input section */}
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg font-medium placeholder:text-base"  // Styling for the email input
              type="email"
              required
              placeholder="email@example.comn"
            />

            {/* Password input section */}
            <h3 className="text-lg font-medium mb-2">Enter your Password</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"  // Styling for the password input
              type="password"  // Changed the input type to 'password' for security
              required
              placeholder="Password"
            />
            
            {/* Login button */}
            <button className="w-full bg-[#111] text-white font-semibold rounded px-4 py-2 placeholder:text-base mb-3">
              Login
            </button>
          </form>
          
        </div>

        {/* New account link */}
        <p className="mt-4 text-center text-semibold mb-32">
          New here?{" "}
          <Link to={'/singup'} className="text-blue-600">Create new account</Link>
        </p>

        {/* Captain sign-in button */}
        <div className="p-7">
          <button className="w-full bg-[#10b461] text-white font-semibold rounded px-4 py-2 placeholder:text-base">
            Sign in as captain
          </button>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
