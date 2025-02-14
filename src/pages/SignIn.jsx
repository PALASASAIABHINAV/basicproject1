import React from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black pt-20">
      <div className="flex flex-col items-start p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl mb-6 text-white font-bold text-center">Sign In to Your Account</h1>
        <form className="flex flex-col space-y-4 w-full">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button type="submit" className="bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition duration-300">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account? <a href="/join" className="text-indigo-500 hover:underline">Join now</a>
        </p>
      </div>
    </div>
  );
}

export default SignIn; 