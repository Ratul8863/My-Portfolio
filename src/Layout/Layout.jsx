import React from 'react';

import { Outlet } from 'react-router-dom'; // Import Outlet from react-router-dom
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


function Layout() {
  return (
    // Main container for the whole application.
    // min-h-screen and flex-col are good for ensuring footer is at bottom.
    // bg-[#212529] for consistent global background if needed, though sections have their own.
    <div className="min-h-screen flex flex-col bg-[#212529]">

      {/* Navbar - typically spans the full width */}
      <Navbar />

      {/* Main content area. The 'Outlet' will render the specific page components here. */}
      {/* flex-grow ensures this section takes up available space, pushing Footer down. */}
      {/* max-w-7xl mx-auto can be applied here if *all* page content needs to be centered and max-width.
          However, for sections like Hero that might have full-width backgrounds, it's better
          for individual sections to manage their own max-width containers.
          For now, I'll put it here, assuming inner content will be constrained. */}
      <main className='flex-grow max-w-7xl mx-auto w-full'> {/* Added w-full for consistent behavior */}
        <Outlet />
      </main>

      {/* Footer - typically spans the full width */}
   
    </div>
  );
}

export default Layout;
