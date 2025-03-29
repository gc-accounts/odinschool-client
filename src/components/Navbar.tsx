
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator, FileText, Book, Download, BookOpen, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Create a utility function to safely check if we're in a Router context
const useRouterPath = () => {
  try {
    // Try to use the router hook
    const location = useLocation();
    return location.pathname;
  } catch (error) {
    // Return '/' if we're outside a Router context
    return '/';
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = useRouterPath();
  
  const isActive = (path: string) => currentPath === path;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Learning Hub', path: '/learning-hub', icon: <BookOpen className="h-4 w-4 mr-1" /> },
    { name: 'Courses in Cities', path: '/courses-in-cities', icon: <MapPin className="h-4 w-4 mr-1" /> },
    { name: 'Webinars', path: '/webinars' },
    { name: 'Blog', path: '/blog', icon: <Book className="h-4 w-4 mr-1" /> },
    { name: 'Free Resources', path: '/free-resources', icon: <Download className="h-4 w-4 mr-1" /> },
    { name: 'Salary Calculator', path: '/salary-calculator', icon: <Calculator className="h-4 w-4 mr-1" /> },
    { name: 'Resume Builder', path: '/resume-builder', icon: <FileText className="h-4 w-4 mr-1" /> },
    { name: 'About', path: '/about' },
  ];

  // Use a utility function to render links based on whether we're in a Router context
  const NavLinkOrAnchor = ({ to, className, children, onClick }: { 
    to: string; 
    className?: string; 
    children: React.ReactNode;
    onClick?: () => void;
  }) => {
    try {
      // Try to use the Link component
      return (
        <Link to={to} className={className} onClick={onClick}>
          {children}
        </Link>
      );
    } catch (error) {
      // Fallback to using an anchor tag
      return (
        <a href={to} className={className} onClick={onClick}>
          {children}
        </a>
      );
    }
  };
  
  return (
    <nav className="bg-white border-b sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <NavLinkOrAnchor to="/" className="text-xl font-bold text-primary-600">
                EduPlatform
              </NavLinkOrAnchor>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map((link) => (
                <NavLinkOrAnchor
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-16",
                    isActive(link.path)
                      ? "border-primary-600 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  )}
                >
                  {link.icon && link.icon}
                  {link.name}
                </NavLinkOrAnchor>
              ))}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="outline" className="mr-3">
              Sign In
            </Button>
            <Button>Sign Up</Button>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLinkOrAnchor
                key={link.path}
                to={link.path}
                className={cn(
                  "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
                  isActive(link.path)
                    ? "bg-primary-50 border-primary-500 text-primary-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  {link.icon && link.icon}
                  {link.name}
                </div>
              </NavLinkOrAnchor>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-3">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
