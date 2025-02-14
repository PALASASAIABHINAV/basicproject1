import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/homeimage.jpg'; // Make sure to replace with your actual image path
import ServiceSlider from '../components/ServiceSlider';
import ProjectShowcase from '../components/ProjectShowcase';
import ImageShowcase from '../components/ImageShowcase';
import About from './About';
import ContactUs from './ContactUs';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const services = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'Graphic Design', path: '/graphic-design' },
    { name: 'Content Writing', path: '/content-writing' },
  ];

  // Filter services based on search query
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className="flex items-center justify-between min-h-screen bg-black pt-20">
      <div className="flex flex-col items-start p-6 text-white w-full max-w-4xl">
        <h1 className="text-5xl mb-4 font-bold ml-10 font-serif">
          Find the right <span className="animate-pulse font-serif italic text-indigo-400">
            {' freelance'.split('').map((letter, index) => (
              <span key={index} className="inline-block">{letter}</span>
            ))}
          </span>
        </h1>
        <p className="text-5xl mb-4 font-bold ml-10 font-serif">service, right away</p>
        
        {/* Input Box */}
        <div className="relative mt-4 ml-10 w-5/6">
          <input
            type="text"
            placeholder="Search for services..."
            className="p-2 border border-gray-300 rounded text-black w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
            <svg className="w-10 h-9 text-white bg-black rounded p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        {/* Popular Statement and Buttons */}
        <h1 className="text-2xl mb-4 font-bold ml-10 font-serif mt-4">Popular:</h1>
        <div className="flex flex-wrap md:space-x-4 ml-10 mb-4">
          <Link to="/web-development" className="bg-indigo-500 text-white py-2 px-4 rounded mb-2 w-full md:w-auto transition duration-300 ease-in-out transform hover:bg-indigo-600 hover:scale-105">Web Development</Link>
          <Link to="/graphic-design" className="bg-indigo-500 text-white py-2 px-4 rounded mb-2 w-full md:w-auto transition duration-300 ease-in-out transform hover:bg-indigo-600 hover:scale-105">Graphic Design</Link>
          <Link to="/content-writing" className="bg-indigo-500 text-white py-2 px-4 rounded mb-2 w-full md:w-auto transition duration-300 ease-in-out transform hover:bg-indigo-600 hover:scale-105">Content Writing</Link>
          <Link to="/digital-marketing" className="bg-indigo-500 text-white py-2 px-4 rounded mb-2 w-full md:w-auto transition duration-300 ease-in-out transform hover:bg-indigo-600 hover:scale-105">Digital Marketing</Link>
        </div>
      </div>

      {/* Image on the right */}
      <div className="hidden md:flex w-3/4"> {/* Adjust width as needed */}
        <img src={image} alt="Freelance Services" className="w-full h-auto rounded-lg" />
      </div>
    </div>
    
    <ServiceSlider/>
    <ProjectShowcase />
    <ImageShowcase />
    <About />
    <ContactUs />
    </>
  );
}

export default Home; 