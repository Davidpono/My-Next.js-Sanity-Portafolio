import { PortableTextBlock } from "sanity"

// Define a TypeScript type for a Page
export type Page = {
  _id: string,            // Unique identifier for the page
  _createdAt: Date,       // Date when the page was created
  title: string,          // Title of the page
  slug: string,           // Slug or URL-friendly identifier for the page
  content: PortableTextBlock[]; // An array of PortableTextBlocks for the page's content
};
