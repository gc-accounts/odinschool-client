
import React, { useState } from 'react';
import { FileText, Download, Save } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResumeForm from '@/components/resume/ResumeForm';
import ResumePreview from '@/components/resume/ResumePreview';
import { toast } from '@/hooks/use-toast';
import { initialResumeData } from '@/data/resumeData';
import { ResumeData } from '@/types/resume';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTab, setActiveTab] = useState('edit');

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
      <main className="min-h-screen bg-gray-50">
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
            <div className="flex justify-between items-center p-4 border-b">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="edit">Edit</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleSaveResume} 
                  className="flex items-center"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
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
            
            <TabsContent value="edit" className="p-0 m-0">
              <ResumeForm resumeData={resumeData} updateResume={handleUpdateResume} />
            </TabsContent>
            
            <TabsContent value="preview" className="p-0 m-0">
              <ResumePreview resumeData={resumeData} />
            </TabsContent>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResumeBuilder;
