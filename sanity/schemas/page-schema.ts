// Define a schema for a Page document
const page = {
  name: "page",            // Name of the schema
  title: "Pages",          // Title for the schema
  type: "document",        // Type of the schema (document)
  fields: [
    {
      name: "title",       // Field name for the title
      title: "Title",     // Human-readable title for the field
      type: "string"      // Data type of the field (string)
    },
    {
      name: "slug",        // Field name for the slug
      title: "Slug",       // Human-readable title for the field
      type: "slug",        // Data type of the field (slug)
      options: {
        source: "title",   // Source for generating the slug from the title
        maxLength: 96      // Maximum length of the slug
      }
    },
    {
      name: "content",     // Field name for the content
      title: "Content",    // Human-readable title for the field
      type: "array",       // Data type of the field (array)
      of: [
        { type: "block" }  // Array of blocks (text content)
      ]
    }
  ]
}

export default page;  // Export the schema for use in Sanity Studio
