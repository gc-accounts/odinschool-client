import React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  StyledNavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/components/ui/navigation-menu";
import { cn } from "@/components/lib/utils";
import {
  GraduationCap,
  Library,
  Calculator,
  Building2,
} from "lucide-react";

const MainNav = () => {
  return (
    <div className="hidden md:flex gap-10">
      <Link href="/" className="mr-6 flex items-center">
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
              Courses
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


          <NavigationMenuItem>
  <StyledNavigationMenuLink href="/success-stories" className="h-9 px-4">
    <Library className="mr-2 h-4 w-4" />
    Success Stories
  </StyledNavigationMenuLink>
</NavigationMenuItem>

<NavigationMenuItem>
  <StyledNavigationMenuLink href="/about" className="h-9 px-4">
    <Building2 className="mr-2 h-4 w-4" />
    About Us
  </StyledNavigationMenuLink>
</NavigationMenuItem>


{/* <NavigationMenuItem>
  <NavigationMenuLink
    href="/success-stories"
    className="inline-flex h-9 items-center justify-center rounded-md bg-primary-50 px-4 text-sm font-medium transition-colors hover:bg-primary-100"
  >
    <GraduationCap className="mr-2 h-4 w-4" />
    Success Stories
  </NavigationMenuLink>
</NavigationMenuItem>

<NavigationMenuItem>
  <NavigationMenuLink
    href="/about"
    className="inline-flex h-9 items-center justify-center rounded-md bg-primary-50 px-4 text-sm font-medium transition-colors hover:bg-primary-100"
  >
    <GraduationCap className="mr-2 h-4 w-4" />
    About Us
  </NavigationMenuLink>
</NavigationMenuItem> */}




          {/* Resources Section */}
          {/* <NavigationMenuItem>
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
          </NavigationMenuItem> */}

          {/* Tools Section */}
          {/* <NavigationMenuItem>
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
          </NavigationMenuItem> */}

          {/* Company Section */}
          {/* <NavigationMenuItem>
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
          </NavigationMenuItem> */}
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
        href={props.href || "#"}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
      >
        <h4 className="text-sm font-medium mb-1">{title}</h4>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

const learningLinks = [
  {
    title: "Data Science Course",
    href: "/data-science-course",
    description: "Master cutting-edge Data Science skills in this industry-aligned Bootcamp.",
  },
  {
    title: "Certification Program in Applied Generative AI - E&ICT Academy, IITG",
    href: "/generative-ai-course-iitg",
    description: "Join live and on-demand educational webinars.",
  },

  {
    title: "Generative AI Course",
    href: "generative-ai-bootcamp",
    description: "Master cutting-edge skills in this industry-aligned Course.",
  },


  // {
  //   title: "Courses in Cities",
  //   href: "/courses-in-cities",
  //   description: "Find in-person courses in your location.",
  // },

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
    title: "Fun With Statistics",
    href: "/fun-with-statistics",
    description: "Discover the fascinating world of data analysis and visualization.",
  },
  {
    title: "Data Science Career Guide",
    href: "/data-science-career-guide",
    description: "Complete guide to building a successful data science career.",
  },
  {
    title: "Learning Hub",
    href: "/learning-hub",
    description: "Access study materials and additional resources.",
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
