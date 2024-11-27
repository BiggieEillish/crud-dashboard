"use client";
import MobileSidebar from '../components/MobileSidebar';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import './globals.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); // Get the current route path

  // Exclude specific routes (e.g., /landingPage) from the global layout
  const isLandingPage = pathname.startsWith('/landingPage');

  if (isLandingPage) {
    return <>{children}</>; // Render only the landing page layout
  }

  return (
    <html lang="en">
      <head>
        <title>Your Dashboard</title>
      </head>
      <body className="h-full bg-gray-100">
        <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <Sidebar className="bg-grey-900" />
        </div>
        <div className="lg:pl-72">
          <TopNav setSidebarOpen={setSidebarOpen} />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
