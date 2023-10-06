// Import global CSS styles from the 'globals.css' file
import '../globals.css';

// Define metadata for the site
export const metadata = {
  title: 'David\'s Portfolio',
  description: 'Please Pass Me', // Add a brief description of the site
}

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Render the children components within the body */}
        {children}
      </body>
    </html>
  )
}
