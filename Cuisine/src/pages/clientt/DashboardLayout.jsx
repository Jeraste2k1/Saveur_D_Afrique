import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/commons/Footer';
import DashboardSidebar from '@/components/clientt/DashboardSidebar';
import DashboardNavBar from '@/components/clientt/DashboardNavBar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Navbar fixe en haut */}
      <DashboardNavBar />

      {/* Contenu principal en Grid */}
      <div className="flex-1 container mx-auto px-4 py-8 mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar avec sticky positioning */}
        <aside className="md:col-span-1">
          <div className="sticky top-28">
            <DashboardSidebar />
          </div>
        </aside>

        {/* Zone principale */}
        <main className="md:col-span-3 bg-white p-6 rounded-lg shadow-md min-h-screen">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;