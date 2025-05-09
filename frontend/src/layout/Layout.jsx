import React from 'react';

import AppRoutes from '../routes/AppRoutes';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';



// Layout component that wraps the main content and includes the navigation and footer

const Layout = () => {
  return (
    <div className="flex flex-col items-center min-h-screen overflow-y-scroll bg-gray-800 text-white">
  
      <Navbar/>
      <main className="flex-1 w-full max-w-4xl mt-8 px-8">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default Layout
