import React from 'react';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';

const HomePage = () => {
  const features = [
    'AI-Powered Solutions',
    'Cloud Integration',
    'Advanced Analytics',
    'Real-time Updates'
  ];

  return (
    <>
   
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
            {/* Main Hero Content */}
            <div className="text-center space-y-8 sm:space-y-12">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-indigo-100 text-indigo-600 font-medium mb-4">
                New Features Released 🚀
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                <span className="block">Transform Your Business with</span>
                <span className="block text-indigo-600 mt-2">Next-Gen Technology</span>
              </h1>

              {/* Subheadline */}
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
                TechNova empowers businesses with cutting-edge solutions that drive innovation, 
                efficiency, and growth in the digital age.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-gray-700 font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
                  Watch Demo
                </button>
              </div>

              {/* Features List */}
              <div className="pt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
                {features.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center justify-center sm:justify-start gap-2 text-gray-600"
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
              <button className="animate-bounce bg-white p-2 rounded-full shadow-lg">
                <ChevronDown className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="pb-16 sm:pb-20">
            <p className="text-center text-sm font-medium text-gray-500 mb-8">
              TRUSTED BY LEADING COMPANIES
            </p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4">
              {[1, 2, 3, 4].map((index) => (
                <div 
                  key={index} 
                  className="flex justify-center items-center h-12 grayscale opacity-40 hover:opacity-100 transition-opacity"
                >
                  <div className="h-8 w-32 bg-gray-300 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;