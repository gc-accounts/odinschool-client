import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  GraduationCap,
  Library,
  Calculator,
  Building2,
} from "lucide-react";

const MainNav = () => {
  return (
    <div className="hidden md:flex ">
      <Link to="/" className="mr-6 flex items-center">
      <img
    src="https://strapi.odinschool.com/uploads/odinschool_logo_8a880e4c88.webp" // Replace with your actual logo URL
    alt="EduPlatform Logo"
    className="h-8 w-auto"
  />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {/* Learning Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-9 px-4">
              <GraduationCap className="mr-2 h-4 w-4" />
              Learning
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {learningLinks.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Resources Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-9 px-4">
              <Library className="mr-2 h-4 w-4" />
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {resourceLinks.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Tools Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-9 px-4">
              <Calculator className="mr-2 h-4 w-4" />
              Tools
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {toolLinks.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Company Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-9 px-4">
              <Building2 className="mr-2 h-4 w-4" />
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {companyLinks.map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        to={props.href || "#"}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

const learningLinks = [
  {
    title: "Courses",
    href: "/courses",
    description: "Browse our comprehensive catalog of courses.",
  },
  {
    title: "Learning Hub",
    href: "/learning-hub",
    description: "Access study materials and additional resources.",
  },
  {
    title: "Webinars",
    href: "/webinars",
    description: "Join live and on-demand educational webinars.",
  },
  {
    title: "Courses in Cities",
    href: "/courses-in-cities",
    description: "Find in-person courses in your location.",
  },

];

const resourceLinks = [
  {
    title: "All Resources",
    href: "/resources",
    description: "Explore our complete library of learning resources.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read articles on industry trends and best practices.",
  },
  {
    title: "Free Project",
    href: "/free-resources",
    description: "Access complimentary learning materials.",
  },
  {
    title: "For College Students",
    href: "/college-students",
    description: "Special resources designed for undergraduate and graduate students.",
  },
  {
    title: "Fun With Statistics",
    href: "/fun-with-statistics",
    description: "Discover the fascinating world of data analysis and visualization.",
  },
  {
    title: "Data Science Career Guide",
    href: "/data-science-career-guide",
    description: "Complete guide to building a successful data science career.",
  },
];

const toolLinks = [
  {
    title: "Salary Calculator",
    href: "/salary-calculator",
    description: "Estimate your earning potential in your field.",
  },
  {
    title: "Resume Builder",
    href: "/resume-builder",
    description: "Create a professional resume with our easy-to-use tool.",
  },
  {
    title: "Virtual Interview",
    href: "/virtual-interview",
    description: "Practice your interview skills with AI-powered feedback.",
  },
];

const companyLinks = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn about our mission, values, and team.",
  },
  {
    title: "Success Stories",
    href: "/success-stories",
    description: "Read testimonials from our students and partners.",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join our team and help shape the future of education.",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch with our support team.",
  },
  // {
  //   title: "Odin Talks",
  //   href: "/odintalks",
  //   description: "Get in touch with our support team.",
  // },
];

export default MainNav;
