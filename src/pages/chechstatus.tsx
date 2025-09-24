import React, { useState,useEffect } from 'react';
import { Search, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
interface StatusResult {
  applicationNumber: string;
  status: 'approved' | 'pending' | 'under-review' | 'declined';
  submissionDate: string;
  lastUpdated: string;
  applicantName: string;
  etaNumber?: string;
}

const Checkstatu: React.FC = () => {
   const [loggedInUser, setLoggedInUser] = useState('');
  const [applicationNumber, setApplicationNumber] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<StatusResult | null>(null);
  const [error, setError] = useState('');

   useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser') !)
    }, [])

  const mockResults: { [key: string]: StatusResult } = {
    'ETA123456789': {
      applicationNumber: 'ETA123456789',
      status: 'approved',
      submissionDate: '20 September 2025',
      lastUpdated: '24 September 2024',
      applicantName: 'Md Khallil ullah',
      etaNumber: 'NZ123456789'
    },
    'ETA987654321': {
      applicationNumber: 'ETA987654321',
      status: 'pending',
      submissionDate: '20 March 2024',
      lastUpdated: '20 March 2024',
      applicantName: 'Jane Doe'
    },
    'ETA555666777': {
      applicationNumber: 'ETA555666777',
      status: 'under-review',
      submissionDate: '10 March 2024',
      lastUpdated: '22 March 2024',
      applicantName: 'Michael Johnson'
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);
    
    if (!applicationNumber || !passportNumber || !dateOfBirth) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResult = mockResults[applicationNumber.toUpperCase()];
      
      if (mockResult) {
        setResult(mockResult);
      } else {
        setError('No application found with the provided details. Please check your information and try again.');
      }
      
      setIsLoading(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-600" />;
      case 'under-review':
        return <AlertCircle className="w-6 h-6 text-blue-600" />;
      case 'declined':
        return <XCircle className="w-6 h-6 text-red-600" />;
      default:
        return <Clock className="w-6 h-6 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'under-review':
        return 'text-blue-600';
      case 'declined':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approved';
      case 'pending':
        return 'Pending Review';
      case 'under-review':
        return 'Under Review';
      case 'declined':
        return 'Declined';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header/>
<div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Check Your Application Status</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="applicationNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Application Number *
            </label>
            <input
              type="text"
              id="applicationNumber"
              value={applicationNumber}
              onChange={(e) => setApplicationNumber(e.target.value)}
              placeholder="e.g., ETA123456789"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Passport Number *
            </label>
            <input
              type="text"
              id="passportNumber"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              placeholder="Enter your passport number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth *
            </label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          ) : (
            <Search className="w-5 h-5 mr-2" />
          )}
          {isLoading ? 'Checking...' : 'Check Status'}
        </button>

        <p className="text-sm text-gray-600 mt-4">
          * Required fields. For testing, try application number: ETA123456789, ETA987654321, or ETA555666777
        </p>
      </form>

      {result && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Application Status</h3>
          
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {getStatusIcon(result.status)}
                <span className={`ml-2 font-semibold text-lg ${getStatusColor(result.status)}`}>
                  {getStatusText(result.status)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Application Number</p>
                <p className="font-medium">{result.applicationNumber}</p>
              </div>
              <div>
                <p className="text-gray-600">Applicant Name</p>
                <p className="font-medium">{result.applicantName}</p>
              </div>
              <div>
                <p className="text-gray-600">Submission Date</p>
                <p className="font-medium">{result.submissionDate}</p>
              </div>
              <div>
                <p className="text-gray-600">Last Updated</p>
                <p className="font-medium">{result.lastUpdated}</p>
              </div>
              {result.etaNumber && (
                <div className="md:col-span-2">
                  <p className="text-gray-600">eTA Number</p>
                  <p className="font-medium text-green-600">{result.etaNumber}</p>
                </div>
              )}
            </div>
          </div>

          {result.status === 'approved' && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-green-800">Your eTA has been approved!</h4>
                  <p className="text-green-700 mt-1 text-sm">
                    Your New Zealand Electronic Travel Authority is now valid for travel. 
                    Save your eTA number for your records.
                  </p>
                </div>
              </div>
            </div>
          )}

          {result.status === 'pending' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-yellow-800">Your application is being processed</h4>
                  <p className="text-yellow-700 mt-1 text-sm">
                    We are currently reviewing your application. You will be notified once a decision has been made.
                  </p>
                </div>
              </div>
            </div>
          )}

          {result.status === 'under-review' && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-800">Additional review required</h4>
                  <p className="text-blue-700 mt-1 text-sm">
                    Your application requires additional review. This may take longer than usual processing times.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
    </div>
    <Footer/>
    </div>
    
  );
};

export default Checkstatu;