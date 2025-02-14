import React from 'react';
import image1 from '../assets/web-development.jpg'; // Replace with your actual image paths
import image2 from '../assets/web-development.jpg';
import image3 from '../assets/web-development.jpg';
import image4 from '../assets/web-development.jpg';

const images = [image1, image2, image3, image4]; // Add your images here

const ImageShowcase = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10">
      {images.map((image, index) => (
        <div key={index} className="m-4 transition-transform duration-300 transform hover:scale-110">
          <img
            src={image}
            alt={`Showcase ${index + 1}`}
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageShowcase; 