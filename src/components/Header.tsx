import React from 'react';
import { Shield, Menu } from 'lucide-react';
import logo from '../images/logo_nz.png'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            
            <div>
              <img src={logo} alt="logo" width={200} height={200} />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-orange-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Help
            </a>
            <a href="#" className="text-orange-600 hover:text-gray-900 text-sm font-medium transition-colors">
              About RealMe
            </a>
            <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}