import React from 'react';
import { 
  Globe, 
  Cloud, 
  Brain, 
  Shield, 
  Smartphone, 
  Database,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web solutions built with cutting-edge technologies htmlFor optimal performance and user experience.",
      features: [
        "Responsive Design",
        "Frontend & Backend Development",
        "E-commerce Solutions",
        "Performance Optimization"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your digital transformation journey.",
      features: [
        "Cloud Migration",
        "AWS & Azure Services",
        "Cloud Security",
        "Infrastructure Management"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Services",
      description: "Advanced artificial intelligence and machine learning solutions to drive business intelligence.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Custom AI Models"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure data integrity.",
      features: [
        "Security Audits",
        "Threat Detection",
        "Compliance Solutions",
        "Security Training"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Solutions",
        "App Maintenance"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
      features: [
        "Big Data Analysis",
        "Business Intelligence",
        "Data Visualization",
        "Real-time Analytics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
              Empowering businesses with innovative technology solutions to stay ahead in the digital era
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;