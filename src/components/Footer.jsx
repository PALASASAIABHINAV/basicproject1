import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-start ml-36 mb-2">Open Skill</h2>
          <p className="text-gray-400 w-1/2 text-start ml-24"> We provide high-quality web development services for student projects and business websites. Whether you're a student looking to create a project or a business owner in need of an online presence, we've got you covered!

</p>
        </div>
        <div className="flex flex-col md:flex-row mr-20">
          <div className="mr-10 mb-1">
            <h3 className="font-bold">Navigation</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-indigo-500">Home</a></li>
              <li><a href="/explore" className="text-gray-400 hover:text-indigo-500">Explore</a></li>
              <li><a href="/become-seller" className="text-gray-400 hover:text-indigo-500">Become a Seller</a></li>
              <li><a href="/signin" className="text-gray-400 hover:text-indigo-500">Sign In</a></li>
              <li><a href="/join" className="text-gray-400 hover:text-indigo-500">Join</a></li>
            </ul>
          </div>
          <div className="mr-10 mb-1">
            <h3 className="font-bold">Contact</h3>
            <p className="text-gray-400">Email: openskill.in@gmail.com</p>
            <p className="text-gray-400">Phone: +91 9999999999</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Social Media</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-400 hover:text-indigo-500 flex items-center">
                <svg className="w-6 h-6 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-1.2-.45-4.2-.45-4.2-.45s-3 0-4.2.45c-1.2.45-2.1 1.8-2.1 3.6v4.2c0 1.8.9 3.15 2.1 3.6 1.2.45 4.2.45 4.2.45s3 0 4.2-.45c1.2-.45 2.1-1.8 2.1-3.6v-4.2c0-1.8-.9-3.15-2.1-3.6zm-7.615 8.616v-5.4l4.8 2.7-4.8 2.7z"/>
                </svg>
                YouTube
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 flex items-center">
                <svg className="w-6 h-6 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c-5.514 0-10 4.486-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.89h-2.33v6.988c4.781-.75 8.438-4.887 8.438-9.878 0-5.514-4.486-10-10-10z"/>
                </svg>
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 flex items-center">
                <svg className="w-6 h-6 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.423.722-.666 1.561-.666 2.457 0 1.69.861 3.179 2.169 4.055-.8-.026-1.555-.245-2.213-.612v.061c0 2.362 1.679 4.337 3.911 4.779-.409.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.79-.023-1.175-.067 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549z"/>
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-4">
        © 2025 Open Skill . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 