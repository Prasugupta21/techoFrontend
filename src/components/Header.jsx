import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '#' },
    
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600">
            TechNova Innovations
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button 
                      className="inline-flex items-center text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm lg:text-base font-medium group-hover:text-indigo-600"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {/* Desktop Dropdown */}
                    <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm lg:text-base font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Hidden on mobile, shown on md and up */}
          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button - Shown on mobile, hidden on md and up */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Shown on mobile, hidden on md and up */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transform transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {/* Mobile Dropdown */}
                    <div className={`${activeDropdown === item.name ? 'block' : 'hidden'} pl-4`}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem}
                          to={"#"}
                          className="block text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Mobile CTA Button */}
            <div className="pt-2">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;