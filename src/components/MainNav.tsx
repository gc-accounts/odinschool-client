
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Home,
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
} from "lucide-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex justify-between items-center w-full">
      <Link to="/" className="flex items-center gap-2">
        <GraduationCap className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold text-primary">EduPlatform</span>
      </Link>
      
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem>
            <Link to="/" legacyBehavior passHref>
              <NavigationMenuLink 
                className={cn(
                  navigationMenuTriggerStyle(), 
                  "flex items-center gap-2",
                  isActive('/') && "bg-accent text-accent-foreground"
                )}
              >
                <Home className="h-4 w-4" /> 
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Courses */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" /> 
              Learning
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                <li>
                  <Link to="/courses" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md">
                    <GraduationCap className="h-6 w-6 text-white" />
                    <div className="mt-4 mb-2 text-lg font-medium text-white">
                      Courses
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Browse our full catalog of professional courses
                    </p>
                  </Link>
                </li>
                <li className="row-span-2">
                  <div className="flex flex-col gap-3">
                    <Link to="/learning-hub" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Learning Hub</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Access free educational content and resources
                      </p>
                    </Link>
                    <Link to="/webinars" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Webinars</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Live and recorded expert sessions on various topics
                      </p>
                    </Link>
                    <Link to="/courses-in-cities" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Courses in Cities</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Find in-person training near you
                      </p>
                    </Link>
                  </div>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Resources */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2">
              <Library className="h-4 w-4" /> 
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                <li>
                  <Link to="/resources" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/50 to-blue-600 p-6 no-underline outline-none focus:shadow-md">
                    <Library className="h-6 w-6 text-white" />
                    <div className="mt-4 mb-2 text-lg font-medium text-white">
                      Resources
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Explore our collection of tools, guides, and learning materials
                    </p>
                  </Link>
                </li>
                <li className="row-span-2">
                  <div className="flex flex-col gap-3">
                    <Link to="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Blog</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Industry insights and educational content
                      </p>
                    </Link>
                    <Link to="/free-resources" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">Free Resources</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Download templates, guides and checklists
                      </p>
                    </Link>
                    <Link to="/college-students" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">For College Students</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Special programs and resources for students
                      </p>
                    </Link>
                  </div>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Tools */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2">
              <Calculator className="h-4 w-4" /> 
              Tools
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                <Link to="/salary-calculator" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Calculator className="h-4 w-4" />
                    <div className="text-sm font-medium leading-none">Salary Calculator</div>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Estimate industry salaries based on experience and location
                  </p>
                </Link>
                <Link to="/resume-builder" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <div className="text-sm font-medium leading-none">Resume Builder</div>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Create professional resumes with our easy-to-use tool
                  </p>
                </Link>
                <Link to="/virtual-interview" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    <div className="text-sm font-medium leading-none">Virtual Interview</div>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Practice interviewing with our AI-powered simulator
                  </p>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Company */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2">
              <Building2 className="h-4 w-4" /> 
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                <Link to="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    <div className="text-sm font-medium leading-none">About Us</div>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Learn about our mission and values
                  </p>
                </Link>
                <Link to="/success-stories" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <div className="text-sm font-medium leading-none">Success Stories</div>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Testimonials from our graduates and partner companies
                  </p>
                </Link>
                <Link to="/careers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <div className="text-sm font-medium leading-none">Careers</div>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Join our team of education professionals
                  </p>
                </Link>
                <Link to="/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <div className="text-sm font-medium leading-none">Contact Us</div>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Get in touch with our team
                  </p>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="hidden md:flex items-center gap-2">
        <Button variant="outline" size="sm">Sign In</Button>
        <Button size="sm">Sign Up</Button>
      </div>
    </div>
  );
};

export default MainNav;
