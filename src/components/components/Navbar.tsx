
import React from 'react';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { Button } from '@/components/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="md:px-0 px-4 sticky top-0 z-40 w-full bg-primary-50 backdrop-blur supports-[backdrop-filter]:bg-primary-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <MainNav />
        </div>
        <div className="flex items-center gap-2">
          <Link href="/" className="mr-6 flex items-center">
        <img
          src="https://strapi.odinschool.com/uploads/odinschool_logo_8a880e4c88.webp" // Replace with your actual logo URL
          alt="EduPlatform Logo"
          className="h-8 w-auto"
        />
      </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-primary text-white hover:bg-primary/90">
            <Link href={'https://go.odinschool.com/login'} target='_blank'>Log In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
