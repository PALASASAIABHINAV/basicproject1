import React from 'react';

const Join = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black pt-20">
      <div className="flex flex-col items-start p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl mb-6 text-white font-bold text-center">Join Open Skill</h1>
        <form className="flex flex-col space-y-4 w-full">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
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
            Join Now
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Already have an account? <a href="/signin" className="text-indigo-500 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Join; 