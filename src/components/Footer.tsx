import React from 'react';
import { ExternalLink } from 'lucide-react';
import logo from '../images/logo_nz.png'

export default function Footer() {
  const links = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Help & Support', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Accessibility', href: '#' }
  ];

  return (
    <footer className="bg-orange-500 border-t border-orange-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
<img src={logo} alt="logo" width={200} height={200}/>            <p className="text-sm text-gray-600 mb-4">
              RealMe is the New Zealand government's secure online identity verification service, 
              providing safe and convenient access to government services.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>© 2025 New Zealand Government</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Need Help?</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone Support:</p>
                <p className="text-sm font-medium text-gray-900">0800 REALME (0800 732 563)</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Available:</p>
                <p className="text-sm font-medium text-gray-900">Mon-Fri 8am-6pm</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-xs text-gray-500 text-center">
           For the official RealMe service, visit{' '}
            <a href="https://www.immigrationgov.online/" className="text-blue-600 hover:text-blue-800">
              https://www.immigrationgov.online/
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}