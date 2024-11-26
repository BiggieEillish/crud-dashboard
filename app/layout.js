// layout.js
"use client";
import MobileSidebar from '../components/MobileSidebar';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import { useState } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Your Dashboard</title>
      </head>
      <body className="h-full bg-gray-100">
        <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <Sidebar className ="bg-grey-900" />
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
