import React from 'react';
import { Shield, Menu } from 'lucide-react';
import logo from '../images/logo_nz.png'
import {Link, useNavigate} from 'react-router'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            
            <div>
              <Link to="/">
                <img src={logo} alt="logo" width={200} height={200} />
              </Link>
            
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button  className="text-orange-600 hover:text-gray-900 text-sm font-medium transition-colors">
            <Link to="/">
            Sign out
            </Link>  
            </button>
            <button className="text-orange-600 hover:text-gray-900 text-sm font-medium transition-colors">
            <Link to="/">
             About RealMe
            </Link> 
            </button>
            <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}