// Define a schema for a Project document
const project = {
  name: "project",            // Name of the schema
  title: "Projects",          // Title for the schema
  type: "document",           // Type of the schema (document)
  fields: [
    {
      name: "name",            // Field name for the name
      title: "Name",           // Human-readable title for the field
      type: "string",          // Data type of the field (string)
    },
    {
      name: "slug",            // Field name for the slug
      title: "Slug",           // Human-readable title for the field
      type: "slug",            // Data type of the field (slug)
      options: {
        source: "name"         // Source for generating the slug from the name
      }
    },
    {
      name: "image",           // Field name for the image
      title: "Image",          // Human-readable title for the field
      type: "image",           // Data type of the field (image)
      options: {
        hotspot: true          // Enable hotspot for image cropping
      },
      fields: [
        {
          name: "alt",         // Field name for the alt text
          title: "Alt",        // Human-readable title for the field
          type: "string"       // Data type of the field (string)
        }
      ]
    },
    {
      name: "url",             // Field name for the URL
      title: "URL",            // Human-readable title for the field
      type: "url"              // Data type of the field (URL)
    },
    {
      name: "content",         // Field name for the content
      title: "Content",        // Human-readable title for the field
      type: "array",           // Data type of the field (array)
      of: [{ type: "block" }]  // Array of blocks (text content)
    }
  ]
}

export default project;  // Export the schema for use in Sanity Studio
