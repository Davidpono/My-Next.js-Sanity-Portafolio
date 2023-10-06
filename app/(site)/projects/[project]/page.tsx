// Import the getProject function from the sanity-utils module
import { getProject } from "@/sanity/sanity-utils";

// Import required modules
import { PortableText } from '@portabletext/react';
import Image from "next/image"

// Define the Props type for the Project component
type Props = {
  params: { project: string }
}

// Define the Project component
export default async function Project({ params }: Props) {
  // Extract the project slug from the URL parameters
  const slug = params.project;
  
  // Fetch project data using the getProject function
  const project = await getProject(slug);

  return <div>
    <header className="flex items-center justify-between">
      {/* Display the project name with a gradient text color */}
      <h1 className="bg-gradient-to-r from-blue-400 via-red-500 to-indigo-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{project.name}</h1>
      
      {/* Create a link to view the project in a new tab */}
      <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-indigo-500 hover:text-pink-100 transition">
        View Project
      </a>
    </header>

    <div className="text-lg text-gray-700 mt-5">
      {/* Render the project content using PortableText */}
      <PortableText value={project.content} />
    </div>

    {/* Display the project image */}
    <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
  </div>
}
