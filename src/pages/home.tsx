import React, { useState } from 'react';
import { Shield, User, Lock, CheckCircle, ArrowRight, Menu, X, Globe, Phone, Mail } from 'lucide-react';
import logo from '../images/logo_nz.png'
import {Link, useNavigate} from 'react-router'
function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              
              <span className="text-xl font-bold text-gray-900">
<img src={logo} alt="logo" width={150} height={150} />
              </span>
            </div>
            
            {/* Desktop Navigation */}
           


            <div className="hidden md:flex items-center space-x-4">
              <button className="text-orange-700 hover:text-orange-700 font-medium" onClick={() => {
                
              }}>
             <Link to="/realme">
             Sign in
             </Link>
                
              </button>
              <button className="bg-orange-600 text-orange-100 px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                <Link to='/register' className='text-white-500'>Create Account</Link>
                
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              
              <div className="pt-2 border-t border-gray-200">
                <button className="block w-full text-left py-2 text-orange-100 hover:text-orange-600">
                  Sign In
                </button>
                <button className="block w-full text-left py-2 bg-orange-600 text-orange-100 rounded-md mt-2 hover:bg-orange-700">
                  Create Account
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-6">
              Your Digital Identity
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              RealMe is your secure way to prove who you are online. Access government services, 
              banking, and other trusted websites with one verified digital identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <a href="/realme">
                 Get Started
                </a>
               
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-orange-600 text-gray-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RealMe?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by millions of New Zealanders for secure, convenient access to digital services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Trusted</h3>
              <p className="text-gray-600">
                Bank-level security with government-grade verification. Your identity is protected 
                with the highest security standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy to Use</h3>
              <p className="text-gray-600">
                One login for hundreds of services. No more remembering multiple passwords 
                or filling out forms repeatedly.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Widely Accepted</h3>
              <p className="text-gray-600">
                Access government services, banks, insurance companies, and other trusted 
                organizations across New Zealand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Access These Services
            </h2>
            <p className="text-xl text-gray-600">
              Use your RealMe login to access hundreds of trusted services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'IRD - Tax Services',
              'Work and Income',
              'Immigration NZ',
              'Ministry of Health',
              'ACC',
              'StudyLink',
              'KiwiSaver',
              'Electoral Commission'
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Create your RealMe account today and enjoy secure, convenient access to digital services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Create Account
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
              
                <span className="text-lg font-bold">
                  <img src={logo} alt="logo" width={150} height={150}/>
                </span>
              </div>
              <p className="text-gray-400">
                Your trusted digital identity for secure access to online services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Government Services</a></li>
                <li><a href="#" className="hover:text-white">Banking</a></li>
                <li><a href="#" className="hover:text-white">Insurance</a></li>
                <li><a href="#" className="hover:text-white">Healthcare</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>0800 664 774</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>help@realme.govt.nz</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RealMe. All rights reserved. | A service of the New Zealand Government</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;