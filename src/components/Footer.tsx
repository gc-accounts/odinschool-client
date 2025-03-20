
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <Link to="/" className="text-2xl font-display font-bold text-white flex items-center mb-4">
              <span className="mr-2 rounded-lg bg-primary-600 text-white w-8 h-8 flex items-center justify-center">C</span>
              CodeMaster
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Empowering developers through expert-led courses and practical learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Courses</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Development', 'Data Science', 'Machine Learning', 'UI/UX Design', 'Cloud Computing'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '#' },
                { name: 'Blog', path: '#' },
                { name: 'Instructors', path: '#' },
                { name: 'Testimonials', path: '#' },
                { name: 'Contact Us', path: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-400">123 Innovation Drive, Tech Park<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex">
                <Phone size={18} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail size={18} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-400">support@codemaster.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} CodeMaster. All rights reserved.
          </div>
          <div className="flex flex-wrap space-x-4">
            <Link to="#" className="hover:text-primary-400 transition-colors mb-2 md:mb-0">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-primary-400 transition-colors mb-2 md:mb-0">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary-400 transition-colors mb-2 md:mb-0">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
