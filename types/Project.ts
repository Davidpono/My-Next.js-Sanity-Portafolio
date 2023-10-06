import { PortableTextBlock } from "sanity";

// Define a TypeScript type for a Project
export type Project = {
  _id: string;                     // Unique identifier for the project
  createdAt: Date;                // Date when the project was created
  name: string;                   // Name or title of the project
  slug: string;                   // Slug or URL-friendly identifier for the project
  image: string;                  // URL to the project's image
  url: string;                    // URL to the project's webpage or details
  content: PortableTextBlock[];    // An array of PortableTextBlocks for the project's content
};
