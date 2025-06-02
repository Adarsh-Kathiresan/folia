import React from "react";
import Logo from "../assets/folium.svg?react";
import { Outlet } from "react-router";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Logo at the top left */}
      <header className="absolute top-0 left-0 p-4">
        <Logo className="logo react" />
      </header>
      {/* Main content */}
      <main className="pt-16 pb-20">
        {children}
        <Outlet />
      </main>
      {/* Floating nav bar at the bottom */}
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
        <ul className="flex justify-around p-4">
          <li>
            <a href="#home" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppLayout;
