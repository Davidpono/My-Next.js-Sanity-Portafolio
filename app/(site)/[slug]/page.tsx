// Import the getPage function from the sanity-utils module
import { getPage } from "@/sanity/sanity-utils";

// Import required modules
import { PortableText } from "@portabletext/react";

// Define the Props type for the Page component
type Props = {
  params: { slug: string }
}

// Define the Page component
export default async function Page({ params }: Props) {
  // Fetch page data using the getPage function and the provided slug
  const page = await getPage(params.slug);

  return (
    <div>
      {/* Display the page title with a gradient text color */}
      <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">{page.title}</h1>
      
      <div className="text-lg text-gray-700 mt-10">
        {/* Render the page content using PortableText */}
        <PortableText value={page.content} />
      </div>
    </div>
  )
}
