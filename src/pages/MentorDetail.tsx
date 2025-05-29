import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Briefcase, GraduationCap, Calendar } from 'lucide-react';

// Import mentor data from OdinTalks
import { mentorsData } from '@/data/mentors';

const MentorDetail = () => {

  
  const { id } = useParams<{ id: string }>();
  const [mentor, setMentor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the mentor with the matching ID
    const foundMentor = mentorsData.find(m => m.id === id);
    
    if (foundMentor) {
      setMentor(foundMentor);
      document.title = `${foundMentor.name} - OdinTalks Mentor`;
    } else {
      document.title = "Mentor Not Found - OdinTalks";
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!mentor) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 container mx-auto px-4">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Mentor Not Found</h2>
            <p className="mb-8 text-gray-600">We couldn't find the mentor you're looking for.</p>
            <Button asChild>
              <Link to="/odintalks">Back to All Mentors</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-12 pb-16">
        <div className="container">
          <div>
            <Button variant="ghost" asChild className="group mb-4 text-primary">
              <Link to="/odintalks" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 text-primary" />
                Back to Odintalks
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                    <h1 className="text-2xl font-bold mb-2">{mentor.title}</h1>
                <div className="rounded-lg overflow-hidden mb-6">
                <video 
                    controls
                    className="w-full aspect-video object-cover"
                    poster={mentor.image} // Use image as fallback poster
                  >
                    <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold mb-2">{mentor.name}</h1>
              <h2 className="text-xl text-gray-600 mb-6">{mentor.role}</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-3">About the speaker</h3>
                <p className=" text-gray-600 mb-6">{mentor.bio}</p>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-3">Synopsis</h3>
                <p className=" text-gray-600 mb-6">{mentor.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorDetail;