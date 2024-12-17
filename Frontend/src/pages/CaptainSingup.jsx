
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainSingup() {
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
            className="w-32 mx-auto mb-10"
            src="https://imgs.search.brave.com/evQyB_LlJA1mZtk5qD3sPE_b9mJa0dLoJS6x6b_Gl4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/MW1pbjMwLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/Ni9sb2dvLVViZXIt/NTAweDI4MS5qcGc"
            alt="Uber Company Logo"
          />

          {/* Form Section */}
          <form className="-mt-4 " onSubmit={submitHandler}>
            {/* First Name input */}
            <h3 className="text-lg font-medium mb-2">Captain What's your Name</h3>
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
          <Link to="/Captain-Login" className="text-blue-600">
            Login Here
          </Link>
        </p>

        {/* Footer Text - Positioned at the bottom */}
        <p className="mt-auto font-semibold text-center text-xs">
          This site is captured by reCaptcha and the google privacy  policy and terms and conditions or services apply.
        </p>
      </div>
    </>
  );
}



export default CaptainSingup