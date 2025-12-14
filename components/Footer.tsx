import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-paper-900 to-paper-950 text-white pt-16 pb-8 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-paper-200 bg-clip-text text-transparent">{COMPANY_INFO.name}</h3>
            <p className="text-paper-200 text-sm leading-relaxed mb-6">
              Sustainable manufacturing for a brighter future. We craft high-quality notebooks, registers, and paper products with an eco-conscious mindset.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-paper-300 hover:text-white hover:bg-paper-700 p-2 rounded-full transition-all duration-300"><Linkedin size={20} /></a>
              <a href="#" className="text-paper-300 hover:text-white hover:bg-paper-700 p-2 rounded-full transition-all duration-300"><Facebook size={20} /></a>
              <a href="#" className="text-paper-300 hover:text-white hover:bg-paper-700 p-2 rounded-full transition-all duration-300"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-paper-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-paper-300 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-paper-300 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-paper-300 hover:text-white text-sm transition-colors">Products Catalog</Link></li>
              <li><Link to="/contact" className="text-paper-300 hover:text-white text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-50">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-green-300 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-green-300 text-sm">
                <Phone size={18} className="flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-green-300 text-sm">
                <Mail size={18} className="flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 pt-6 text-center">
          <p className="text-green-400 text-xs">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;