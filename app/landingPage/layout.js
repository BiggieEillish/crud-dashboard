// app/landingPage/layout.js
import '../globals.css';
import Navbar from '@/components/UI/Navbar';

export const metadata = {
  title: "Landing Page",
  description: "Standalone landing page layout.",
};

export default function LandingPageLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Landing Page</title>
      </head>
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
