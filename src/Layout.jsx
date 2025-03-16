import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { TopBar } from './components/TopBar';


export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <TopBar /> */}
      <main className="flex-1 bg-gray-100 p-4">
        {/* Outlet renders nested routes here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
