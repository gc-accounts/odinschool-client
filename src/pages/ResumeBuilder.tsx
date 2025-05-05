
import React, { useState } from 'react';
import { FileText, Download, Save } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ResumeForm from '@/components/resume/ResumeForm';
import ResumePreview from '@/components/resume/ResumePreview';
import { toast } from '@/hooks/use-toast';
import { initialResumeData } from '@/data/resumeData';
import { ResumeData } from '@/types/resume';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [isEditing, setIsEditing] = useState(true);
  
  const handleUpdateResume = (newData: Partial<ResumeData>) => {
    setResumeData(prev => ({
      ...prev,
      ...newData
    }));
  };

  const handleSaveResume = () => {
    // In a real app, this would save to database
    localStorage.setItem('savedResume', JSON.stringify(resumeData));
    toast({
      title: "Resume Saved",
      description: "Your resume has been saved successfully.",
    });
  };

  const handleDownloadResume = () => {
    // In a real app, this would generate a PDF
    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded as a PDF.",
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-100">
        <div className="py-12 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <FileText className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">Resume Builder</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Create a professional resume in minutes with our easy-to-use builder
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center ">
              <div className="flex space-x-2 md:hidden" >
                <Button 
                  variant={isEditing ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </Button>
                <Button 
                  variant={!isEditing ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setIsEditing(false)}
                >
                  Preview
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={handleDownloadResume} 
                  className="flex items-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              {isEditing ? (
                <ResumeForm resumeData={resumeData} updateResume={handleUpdateResume} />
              ) : (
                <ResumePreview resumeData={resumeData} />
              )}
            </div>
            
            {/* Desktop Layout - Side by Side */}
            <div className="hidden lg:flex">
              <div className="w-1/2 border-r overflow-y-auto" style={{ maxHeight: "calc(100vh - 240px)" }}>
                <ResumeForm resumeData={resumeData} updateResume={handleUpdateResume} />
              </div>
              <div className="w-1/2 overflow-y-auto bg-slate-50" style={{ maxHeight: "calc(100vh - 240px)" }}>
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResumeBuilder;
