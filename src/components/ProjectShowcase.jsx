import React, { useEffect, useState } from 'react';
import projectImage1 from '../assets/digital-marketing.jpg'; // Replace with your actual image paths
import projectImage2 from '../assets/graphic-design.jpg';
import projectImage3 from '../assets/content-writing.jpg';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description of Project One.',
    images: [projectImage1, projectImage2, projectImage3],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of Project Two.',
    images: [projectImage1, projectImage2, projectImage3],
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description of Project Three.',
    images: [projectImage1, projectImage2, projectImage3],
  },
  {
    id: 1,
    title: 'Project One',
    description: 'Description of Project One.',
    images: [projectImage1, projectImage2, projectImage3],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of Project Two.',
    images: [projectImage1, projectImage2, projectImage3],
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description of Project Three.',
    images: [projectImage1, projectImage2, projectImage3],
  },
  
  {
    id: 1,
    title: 'Project One',
    description: 'Description of Project One.',
    images: [projectImage1, projectImage2, projectImage3],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of Project Two.',
    images: [projectImage1, projectImage2, projectImage3],
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description of Project Three.',
    images: [projectImage1, projectImage2, projectImage3],
  },
];

const ProjectShowcase = () => {
  const [currentImages, setCurrentImages] = useState(projects.map(project => project.images[0]));
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [intervals, setIntervals] = useState([]);

  const startImageChange = (index) => {
    const interval = setInterval(() => {
      setCurrentImages(prevImages => {
        const newImages = [...prevImages];
        newImages[index] = projects[index].images[(projects[index].images.indexOf(prevImages[index]) + 1) % projects[index].images.length];
        return newImages;
      });
    }, 1000); // Change image every 1 second

    setIntervals(prev => [...prev, interval]);
  };

  const stopImageChange = () => {
    intervals.forEach(clearInterval);
    setIntervals([]);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold text-white mb-20">Recent Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="m-4 p-4 bg-gray-800 rounded-lg shadow-lg w-80 h-96 flex flex-col items-center"
            onMouseEnter={() => {
              setHoveredIndex(index);
              startImageChange(index);
            }}
            onMouseLeave={() => {
              stopImageChange();
              setCurrentImages(prevImages => {
                const newImages = [...prevImages];
                newImages[index] = project.images[0]; // Reset to the first image
                return newImages;
              });
            }}
          >
            <img src={currentImages[index]} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold text-white mt-2">{project.title}</h2>
            <p className="text-gray-400 text-center">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase; 