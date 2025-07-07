import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;