import React from 'react';
import ContactUs from './ContactUs';

const About = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl font-bold mb-4 text-indigo-400">About Us</h1>
      <p className="text-lg text-center max-w-2xl mb-6">
        We are a dedicated team of professionals committed to providing high-quality freelance services. Our mission is to connect talented freelancers with clients who need their expertise. Whether you're a student looking to create a project or a business owner in need of an online presence, we've got you covered!
      </p>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Our Vision</h2>
        <p className="text-gray-300">
          To empower individuals and businesses by providing access to top-notch freelance talent, fostering creativity, and driving innovation.
        </p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-2xl mt-4">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Our Values</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
          <li>Collaboration: We believe in the power of teamwork and collaboration.</li>
          <li>Excellence: We strive for excellence in every project we undertake.</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default About; 