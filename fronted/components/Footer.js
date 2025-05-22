import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 1. School Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">📘 Bright Future</h2>
          <p className="text-sm text-blue-200">
            Empowering students with knowledge, discipline, and values.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/admissions" className="hover:text-white">Admissions</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* 3. Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> +91 9876543210</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@brightfuture.edu.in</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Ranchi, Jharkhand, India</li>
          </ul>
        </div>

        {/* 4. Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-300"><Facebook /></a>
            <a href="#" className="hover:text-blue-300"><Twitter /></a>
            <a href="#" className="hover:text-blue-300"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-300 text-sm">
        © {new Date().getFullYear()} Bright Future School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
