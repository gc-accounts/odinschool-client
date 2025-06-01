import React, { useEffect, useRef, useState } from 'react';
import { FileText, Download, Save } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Separator } from '@/components/components/ui/separator';
import ResumeForm from '@/components/components/resume/ResumeForm';
import ResumePreview from '@/components/components/resume/ResumePreview';
import { toast } from '@/components/hooks/use-toast';
import { initialResumeData } from '@/components/data/resumeData';
import { ResumeData } from '@/types/resume';
import html2pdf from 'html2pdf.js';
import resumeStyles from '@/components/components/resume/resumeStyles';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';



const options = {
  // default is `save`
  method: 'open',
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  // resolution: Resolution.HIGH,
  scale: 1.2,
  page: {
     // margin is in MM, default is Margin.NONE = 0
     margin: Margin.SMALL,
     // default is 'A4'
     format: 'A4',
     // default is 'portrait'
    //  orientation: 'landscape',
  },
  canvas: {
     // default is 'image/jpeg' for better size performance
     mimeType: 'image/png',
     qualityRatio: 1
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break, 
  // so use with caution.
  overrides: {
     // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
     pdf: {
        // compress: true
     },
     // see https://html2canvas.hertzen.com/configuration for more options
     canvas: {
        useCORS: true
     }
  },
};



const ResumeBuilder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [isEditing, setIsEditing] = useState(true);

  const resumePreviewRef = useRef<HTMLDivElement>(null);

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

  const handleDownloadResume = async () => {
    const getTargetElement = () => resumePreviewRef.current;

    generatePDF(getTargetElement, options)
    // const element = resumePreviewRef.current?.cloneNode(true) as HTMLElement;
    // if (!element) return;

    // const opt = {
    //   margin: [10, 10, 10, 10],
    //   filename: "resume.pdf",
    //   html2canvas: { scale: 2 },
    //   jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    // };

    // try {
    //   await html2pdf().set(opt).from(element).save();
    //   toast({
    //     title: "Resume Downloaded",
    //     description: "Your resume has been downloaded as a PDF.",
    //   });
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to download resume. Please try again.",
    //     variant: "destructive",
    //   });
    // }
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
                <ResumePreview resumeData={resumeData} resumePreviewRef={resumePreviewRef} />
              )}
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="hidden lg:flex">
              <div className="w-1/2 border-r overflow-y-auto" style={{ maxHeight: "calc(100vh - 240px)" }}>
                <ResumeForm resumeData={resumeData} updateResume={handleUpdateResume} />
              </div>
              <div className="w-1/2 overflow-y-auto bg-slate-50" style={{ maxHeight: "calc(100vh - 240px)" }}>
                <ResumePreview resumeData={resumeData} resumePreviewRef={resumePreviewRef} />
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

