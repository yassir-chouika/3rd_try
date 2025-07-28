import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-gray-900 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          
          {/* Left side - Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-amber-50 mb-2">Just a Footer</h3>
            <p className="text-gray-600">Creating beautiful digital experiences</p>
          </div>

          {/* Center - Navigation */}
          <nav className="flex space-x-8">
            {['About', 'Projects', 'Services'].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
          
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <span>© 2025 CHOUIKA YASSIR</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;