// Import the "use client" module (assuming it's a custom module)
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from "@/sanity/sanity-utils";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home: React.FC = () => {
  // Initialize a state variable for storing project data
  const [projects, setProjects] = useState<Array<{ name: string; image: string; slug: string }>>([]);

  useEffect(() => {
    // Define an effect to fetch projects when the component mounts
    const fetchProjects = async () => {
      try {
        // Fetch project data using the getProjects function
        const projectData = await getProjects();
        // Update the state with the fetched data
        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    // Call the fetchProjects function to initiate the data fetching
    fetchProjects();
  }, []);

  return (
    <div>
      {/* Main Content */}
      <div className="container mx-auto mt-8">
        <h2 className="font-bold text-black text-3xl">My Projects</h2>
        <Carousel showArrows={true} showThumbs={false}>
          {projects.map((project, index) => (
            <div key={index} className="carousel-item">
              <Link href={`/projects/${project.slug}`}>
                <div className="carousel-link">
                  <div
                    className="image-container"
                    style={{ width: '400px', height: '400px' }} // Set the desired width and height
                  >
                    {/* Render an Image component with project image */}
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill" // This ensures the image fills the container
                      objectFit="cover" // You can choose how the image is fitted within the container
                      className="rounded-lg border border-gray-500"
                    />
                  </div>
                  <div className="project-name absolute bottom-0 left-0 p-2 bg-black text-white">
                    {/* Render the project name with a gradient text color */}
                    <span className="bg-gradient-to-r from-blue-400 via-red-500 to-indigo-600  bg-clip-text text-transparent">
                      {project.name}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
