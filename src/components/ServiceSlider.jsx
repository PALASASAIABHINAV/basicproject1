import React, { useEffect, useState } from 'react';
import image1 from '../assets/web-development.jpg'; // Replace with your actual image paths
import image2 from '../assets/graphic-design.jpg';
import image3 from '../assets/content-writing.jpg';
import image4 from '../assets/digital-marketing.jpg';

const images = [image1, image2, image3, image4]; // Add your images here

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-11/12 h-full mx-auto rounded-lg overflow-hidden shadow-lg mt-34 pb-12">
      <img
        src={images[currentIndex]}
        alt="Freelance Service"
        className="w-full h-96 object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold">Explore Our Services</h2>
      </div>
    </div>
  );
};

export default ServiceSlider; 