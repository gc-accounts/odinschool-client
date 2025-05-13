import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, BarChartHorizontal, Download } from 'lucide-react';

const FunWithStatistics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fun with Statistics - OdinSchool";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">The Little Book of Statistics</h1>
            <p className="text-lg text-gray-600 italic">
            "From ancient times to modern marvels, statistics has helped us understand our world better. In this book, we'll explore the basics of statistics in simple terms.<br />
            Think of it as a journey—a journey where we'll discover how statistics can unravel mysteries, solve problems, and even predict the future. We'll learn about counting, patterns, and how to make sense of data.<br />
            But more than that, this book is a celebration! It's a celebration of the people who've dedicated their lives to statistics—the pioneers, the scholars, and the everyday folks who use statistics to make informed decisions."           </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Author - Srinivas Vedantam</h2>
              <p className="text-gray-600 mb-4 italic">
              “Product development is a passion that I have given my everything to. I enjoy working on solutions that apply the advancement in technology in areas like learning, and marketing.”              </p>
              <p className="text-gray-600 mb-6">
              Together, we'll unlock the secrets of statistics and see how it shapes our world in remarkable ways.
              Let's dive in!              </p>
                    <Button className="flex items-center gap-2 px-12">
                    <Download className="h-4 w-4" />
                    Read More
                  </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
                alt="Data visualization charts"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FunWithStatistics;