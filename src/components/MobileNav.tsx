import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Menu, 
  GraduationCap,
  BookOpen,
  FileText,
  Video,
  MapPin,
  Briefcase,
  Calculator,
  Building2,
  Info,
  Library,
  Home,
} from "lucide-react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  
  const closeSheet = () => setOpen(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
         <div className="md:hidden flex items-center mb-4">
      <Link to="/" className="flex items-center">
        <img
          src="https://strapi.odinschool.com/uploads/odinschool_logo_8a880e4c88.webp"
          alt="EduPlatform Logo"
          className="h-8 w-auto"
        />
      </Link>
    </div>
          
          <div className="mt-6 flex flex-col gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-base font-medium" 
              onClick={closeSheet}
            >
              <Home className="h-5 w-5" /> 
              Home
            </Link>
            
            <Accordion type="single" collapsible className="w-full">
              {/* Learning Section */}
              <AccordionItem value="learning">
                <AccordionTrigger className="flex items-center gap-2 text-base font-medium">
                  <GraduationCap className="h-5 w-5" /> 
                  Learning
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-7">
                    <Link 
                      to="/courses" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Courses
                    </Link>
                    <Link 
                      to="/learning-hub" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Learning Hub
                    </Link>
                    <Link 
                      to="/webinars" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Webinars
                    </Link>
                    <Link 
                      to="/courses-in-cities" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Courses in Cities
                    </Link>
                    <Link 
                      to="/specialized-courses" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Specialized Courses
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* Resources Section */}
              <AccordionItem value="resources">
                <AccordionTrigger className="flex items-center gap-2 text-base font-medium">
                  <Library className="h-5 w-5" /> 
                  Resources
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-7">
                    <Link 
                      to="/resources" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      All Resources
                    </Link>
                    <Link 
                      to="/blog" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Blog
                    </Link>
                    <Link 
                      to="/free-resources" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Free Resources
                    </Link>
                    <Link 
                      to="/college-students" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      For College Students
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* Tools Section */}
              <AccordionItem value="tools">
                <AccordionTrigger className="flex items-center gap-2 text-base font-medium">
                  <Calculator className="h-5 w-5" /> 
                  Tools
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-7">
                    <Link 
                      to="/salary-calculator" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Salary Calculator
                    </Link>
                    <Link 
                      to="/resume-builder" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Resume Builder
                    </Link>
                    <Link 
                      to="/virtual-interview" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Virtual Interview
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* Company Section */}
              <AccordionItem value="company">
                <AccordionTrigger className="flex items-center gap-2 text-base font-medium">
                  <Building2 className="h-5 w-5" /> 
                  Company
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-7">
                    <Link 
                      to="/about" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/success-stories" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Success Stories
                    </Link>
                    <Link 
                      to="/careers" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Careers
                    </Link>
                    <Link 
                      to="/contact" 
                      className="py-2 text-sm" 
                      onClick={closeSheet}
                    >
                      Contact Us
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" onClick={closeSheet}>Sign In</Button>
              <Button onClick={closeSheet}>Sign Up</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
