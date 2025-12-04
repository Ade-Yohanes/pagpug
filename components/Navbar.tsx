'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-900">PAGPUG</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-700 hover:text-gray-900 transition">Features</a>
            <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900 transition">Pricing</a>
            <a href="#about" className="text-sm text-gray-700 hover:text-gray-900 transition">About</a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900 transition">Contact</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button className="px-5 py-2 text-sm text-gray-700 hover:text-gray-900 transition font-medium">
              Sign In
            </button>
            <button className="px-5 py-2 text-sm bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-3 py-3 space-y-2 sm:px-4">
              <a href="#features" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition text-sm">
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition text-sm">
                Pricing
              </a>
              <a href="#about" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition text-sm">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition text-sm">
                Contact
              </a>
              <button className="w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition text-sm">
                Sign In
              </button>
              <button className="w-full px-3 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
