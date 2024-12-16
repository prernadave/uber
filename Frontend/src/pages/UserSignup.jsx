import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      firstName,
      lastName,
      email,
      password,
    });
    console.log(userData);

    // Reset all fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {/* Main container with flex and full height */}
      <div className="p-5 flex flex-col justify-between h-screen sm:p-6">
        {/* Logo Section */}
        <div>
          <img
            className="w-20 mx-auto mb-10"
            src="https://imgs.search.brave.com/8a_qL2VRNyA-diMocFGJ7WcipmBllWd81BXdy_uUTPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy91YmVyLWxvZ28t/YmxhY2stYW5kLXdo/aXRlLnBuZw"
            alt="Uber Company Logo"
          />

          {/* Form Section */}
          <form className="-mt-4 " onSubmit={submitHandler}>
            {/* First Name input */}
            <h3 className="text-lg font-medium mb-2">What's your Name</h3>
            <div className="flex gap-2">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg font-medium placeholder:text-base"
                type="text"
                required
                placeholder="First Name"
              />

              {/* Last Name input */}
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg font-medium placeholder:text-base"
                type="text"
                required
                placeholder="Last Name"
              />
            </div>

            {/* Email input */}
            <h3 className="text-lg font-medium mb-2">Enter your Email</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg font-medium placeholder:text-base"
              type="email"
              required
              placeholder="email@example.com"
            />

            {/* Password input */}
            <h3 className="text-lg font-medium mb-2">Create your Password</h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              required
              placeholder="Password"
            />

            {/* Signup button */}
            <button className="w-full bg-[#111] text-white font-semibold rounded px-4 py-2 placeholder:text-base mb-3">
              Signup
            </button>
          </form>
        </div>

        {/* Text for existing users */}
        <p className="mt-4 text-center font-semibold">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login Here
          </Link>
        </p>

        {/* Footer Text - Positioned at the bottom */}
        <p className="mt-auto font-semibold text-center">
          Uber for Business is a platform for managing global rides and meals,
          and local deliveries, for companies of any size.
        </p>
      </div>
    </>
  );
}

export default UserSignup;
