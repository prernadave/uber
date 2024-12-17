import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CaptainLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData( {
      email: email,
      password: password,
    });
    
    console.log('Captain Data:', captainData); // Log the data instead of the setter
    setEmail(''); // Clear email input
    setPassword(''); // Clear password input
  };

  return (
    <>
      <div className="p-5 flex flex-col justify-between h-screen sm:p-6">
        {/* Logo Section */}
        <div>
          <img
            className="w-28 rounded-lg mb-10 h-12 mx-auto"
            src="https://imgs.search.brave.com/9SZpcrodpOBj9AxV9cXDl6Uu7yumf43Ij01HE_VelIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L000/aGJpV2hvbzhuM2JR/UTJoS2c1czMtNDE1/LTgwLmpwZw"
            alt="Uber Driver Logo" // Added meaningful alt text
          />
          
          {/* Form Section */}
          <form className="-mt-4" onSubmit={submitHandler}>
            <h3 className="text-lg font-medium mb-2">Hey captain ! What's your email?</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg font-medium placeholder:text-base"
              type="email"
              required
              placeholder="email@example.com"
            />

            <h3 className="text-lg font-medium mb-2">Enter your Password</h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              required
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full bg-[#111] text-white font-semibold rounded px-4 py-2 placeholder:text-base mb-3"
            >
              Login
            </button>
          </form>
        </div>

        {/* New Account Link */}
        <p className="mt-4 text-center text-semibold mb-32">
          As a fleet?{' '}
          <Link to="/Captain-Singup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>

        {/* Captain Sign-in Button */}
        <div className="p-7">
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-[#d59d34] text-white font-semibold rounded px-4 py-2 placeholder:text-base"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </>
  );
}

export default CaptainLogin;
