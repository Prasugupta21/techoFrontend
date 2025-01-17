import React from 'react';
import { Users, Target, Clock, Zap } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering exceptional results."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Agile Approach",
      description: "We adapt quickly to change and deliver solutions efficiently."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years of experience in tech leadership and innovation.",
      imgUrl: "/images/ceo.jpeg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Expert in cloud architecture and emerging technologies.",
      imgUrl: "/images/michal.jpeg"
    },
    {
      name: "Emma Wilson",
      role: "Head of Design",
      bio: "Passionate about creating exceptional user experiences.",
      imgUrl: "/images/emma.jpeg"
    },
    {
      name: "David Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack expert with a focus on scalable solutions.",
      imgUrl: "/images/david.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Transforming Ideas Into Digital Reality
            </h1>
            <p className="text-xl text-indigo-100">
              Since 2015, we've been at the forefront of digital innovation, 
              helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To empower businesses through innovative technology solutions that 
              drive growth, efficiency, and digital transformation. We're committed 
              to delivering excellence in every project we undertake.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To be the leading force in technological innovation, recognized globally 
              for our commitment to excellence, sustainable solutions, and 
              transformative impact on businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience 
            in technology, design, and business strategy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img 
                src={member.imgUrl}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion 
              for innovation and excellence.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;