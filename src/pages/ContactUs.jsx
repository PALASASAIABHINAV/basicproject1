import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl font-bold mb-4 text-indigo-400">Contact Us</h1>
      <p className="text-lg text-center max-w-2xl mb-6">
        If you have any questions or need assistance, feel free to reach out to us!
      </p>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Get in Touch</h2>
        <p className="text-gray-300 mb-2">We are here to help you with any inquiries you may have.</p>
        <p className="text-lg">Email: <a href="mailto:support@freelancehub.com" className="text-indigo-400">openskill.in@gmail.com</a></p>
        <p className="text-lg">Phone: <span className="text-indigo-400">+91 9999999999</span></p>
        <p className="text-lg">Chat with us on our website!</p>
      </div>
    </div>
  );
};

export default ContactUs; 