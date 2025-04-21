
import React from 'react';
import { CheckCircle, Home, BookOpen, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-gray-600 text-lg mb-8">
              Your submission has been received successfully. We appreciate your interest and will be in touch soon.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-2">What's Next?</h2>
                <p className="text-gray-600 mb-4">
                  Our team will review your submission and get back to you within 1-2 business days.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Contact Support
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-2">Explore More</h2>
                <p className="text-gray-600 mb-4">
                  While you wait, check out our courses and other resources to continue your learning journey.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/courses">
                      Browse Courses
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="flex items-center" asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Return to Home
                </Link>
              </Button>
              <Button variant="outline" className="flex items-center" asChild>
                <Link to="/webinars">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Upcoming Webinars
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-6">
              <h3 className="font-bold mb-4">Recommended Next Steps</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Check your email for confirmation details</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Add our email to your contacts to avoid missing messages</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Follow us on social media for updates and resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYou;
