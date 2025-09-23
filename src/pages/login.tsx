import React, { useState } from 'react';
import { Lock, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import {Link, useNavigate} from 'react-router'
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { handleError, handleSuccess } from '../utils';


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const {  email, password } = formData;
      if ( !email || !password) {
                return handleError('name, email and password are required')
            }
    try {
                const url = "http://localhost:8080/auth/login"
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                const result = await response.json();
                 const { success, message, error } = result;
                 if (success) {
                    handleSuccess(message);
                    setTimeout(() => {
                        navigate('/visaview')
                    }, 1000)
                } else if (error) {
                    const details = error?.details[0].message;
                    handleError(details);
                } else if (!success) {
                    handleError(message);
                }
                console.log(result)
                
            } catch (error) {
                handleError(error)
            }
          
    // Simulate authentication delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleInputChange = (e: any) => {
     const {name, value} = e.target;
     console.log(name, value)

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
         <Header/>
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Lock className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-orange-600 mb-2">Log in with <b>RealMe</b> </h1>
        <p className="text-gray-600 text-sm">
          Use your RealMe login to access government services securely
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
          Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your password"
              required
            />
            <button
            type='submit'
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
            />
            <span className="ml-2 text-sm text-orange-600">Keep me signed in</span>
          </label>
          
          <a href="#" className="text-sm text-orange-600 hover:text-orange-800 font-medium transition-colors">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-orange-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
              Signing in...
            </div>
          ) : (
            'Sign in'
          )}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-orange-200">
        <p className="text-center text-sm text-orange-600">
          Don't have a RealMe login?{' '}
         <Link to='/register' className='text-blue-500'>Login</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
    
<Footer/>
    </div>
   
  );
}