import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/components/ui/accordion";
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
            <Link href="/" className="flex items-center">
              <img
                src="https://strapi.odinschool.com/uploads/odinschool_logo_8a880e4c88.webp"
                alt="EduPlatform Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-medium"
              onClick={closeSheet}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>

            <Accordion type="single" collapsible className="w-full">
              {/* Learning Section */}
              <AccordionItem value="learning">
                <AccordionTrigger className="flex justify-between items-center text-base font-medium">
  <span className="flex items-center gap-2">
    <GraduationCap className="h-5 w-5" />
    Courses
  </span>

</AccordionTrigger>

                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-7">
                    <Link
                      href="/data-science-elite-course"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Data Science Elite Course
                    </Link>
                    <Link
                      href="/generative-ai-course-iitg"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Certification Program in Applied Generative AI - E&ICT Academy, IIT Guwahati
                    </Link>
                    <Link
                      href="/data-science-course"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Data Science Course
                    </Link>
                    <Link
                      href="/generative-ai-bootcamp"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Generative AI Course
                    </Link>

                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Resources Section */}
              <AccordionItem value="resources">
                <AccordionTrigger className="flex justify-between items-center text-base font-medium">
  <span className="flex items-center gap-2">
    <Library className="h-5 w-5" />
    Resources
  </span>

</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-7">
                    <Link
                      href="/resources"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      All Resources
                    </Link>
                    <Link
                      href="/blog"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/free-resources"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Free Resources
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Tools Section */}
              {/* <AccordionItem value="tools">
                <AccordionTrigger className="flex items-center gap-2 text-base font-medium">
                  <Calculator className="h-5 w-5" />
                  Tools
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-7">
                    <Link
                      href="/salary-calculator"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Salary Calculator
                    </Link>
                    <Link
                      href="/resume-builder"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Resume Builder
                    </Link>
                    <Link
                      href="/virtual-interview"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Virtual Interview
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem> */}

              {/* Company Section */}
              <AccordionItem value="company">
                 <AccordionTrigger className="flex justify-between items-center text-base font-medium">
  <span className="flex items-center gap-2">
    <Building2 className="h-5 w-5" />
    Company
  </span>

</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-7">
                    <Link
                      href="/about"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/success-stories"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Success Stories
                    </Link>
                    <Link
                      href="/careers"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Careers
                    </Link>
                    <Link
                      href="/contact"
                      className="py-2 text-sm"
                      onClick={closeSheet}
                    >
                      Contact Us
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>


          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
