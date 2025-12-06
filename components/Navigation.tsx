"use client";

import { useState } from "react";
import { ShoppingBagIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation({ transparent = false }: { transparent?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={
        transparent
          ? "absolute inset-x-0 top-0 z-50 bg-transparent"
          : "bg-white/80 backdrop-blur-md sticky top-0 z-50"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" className={`text-2xl font-bold ${transparent ? 'text-white' : 'text-primary'}`}>
              ADU Korea
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <a href="#home" className={`${transparent ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-primary'} transition-colors`}>
              Home
            </a>
            <a href="#products" className={`${transparent ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-primary'} transition-colors`}>
              Products
            </a>
            <a href="#about" className={`${transparent ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-primary'} transition-colors`}>
              About
            </a>
            <a href="#contact" className={`${transparent ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-primary'} transition-colors`}>
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-5">
            <a href="#" className={`${transparent ? 'text-white' : 'text-gray-600'} hover:text-primary`}>
              <ShoppingBagIcon className="h-6 w-6" />
            </a>
            <a href="#" className={`${transparent ? 'text-white' : 'text-gray-600'} hover:text-primary`}>
              <MagnifyingGlassIcon className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${transparent ? 'text-white' : 'text-gray-700'} hover:text-primary focus:outline-none`}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <a
              href="#home"
              className={`${transparent ? 'block py-2 text-white hover:text-white/90 transition-colors' : 'block py-2 text-gray-700 hover:text-primary transition-colors'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className={`${transparent ? 'block py-2 text-white hover:text-white/90 transition-colors' : 'block py-2 text-gray-700 hover:text-primary transition-colors'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#about"
              className={`${transparent ? 'block py-2 text-white hover:text-white/90 transition-colors' : 'block py-2 text-gray-700 hover:text-primary transition-colors'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className={`${transparent ? 'block py-2 text-white hover:text-white/90 transition-colors' : 'block py-2 text-gray-700 hover:text-primary transition-colors'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center space-x-5 pt-4 border-t mt-2">
              <a href="#" className={`${transparent ? 'text-white' : 'text-gray-600'} hover:text-primary`}>
                <ShoppingBagIcon className="h-6 w-6" />
              </a>
              <a href="#" className={`${transparent ? 'text-white' : 'text-gray-600'} hover:text-primary`}>
                <MagnifyingGlassIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
