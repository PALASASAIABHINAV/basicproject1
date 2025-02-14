import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-6 bg-black text-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold ml-16" style={{fontFamily: 'fantasy'}}>OPENSKILL</div>
        <div className="hidden md:flex space-x-12 mr-10">
          <Link to="/" style={{fontSize: '1.15rem'}} className="hover:text-indigo-400 transition duration-300">Home</Link>
          <Link to="/explore" style={{fontSize: '1.15rem'}} className="hover:text-indigo-400 transition duration-300">Explore</Link>
          <Link to="/become-seller" style={{fontSize: '1.15rem'}} className="hover:text-indigo-400 transition duration-300">How It Works</Link>
          <Link to="/signin" style={{fontSize: '1.15rem'}} className="hover:text-indigo-400 transition duration-300">Sign in</Link>
          <Link to="/join" style={{fontSize: '1.15rem', border: '1px solid white', padding: '5px 20px', borderRadius: '10px'}} className="transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105">Join</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none text-3xl">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <Link to="/" className="py-2 hover:text-indigo-400 transition duration-300" onClick={toggleMenu}>Home</Link>
          <Link to="/explore" className="py-2 hover:text-indigo-400 transition duration-300" onClick={toggleMenu}>Explore</Link>
          <Link to="/become-seller" className="py-2 hover:text-indigo-400 transition duration-300" onClick={toggleMenu}>How It Works</Link>
          <Link to="/signin" className="py-2 hover:text-indigo-400 transition duration-300" onClick={toggleMenu}>Sign in</Link>
          <Link to="/join" className="py-2 hover:bg-white hover:text-black transition duration-300" style={{ border: '1px solid white', padding: '5px 10px', borderRadius: '10px' }} onClick={toggleMenu}>Join</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
