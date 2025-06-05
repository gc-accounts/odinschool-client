
import React from 'react';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { Button } from '@/components/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="md:px-0 px-4 sticky top-0 z-40 w-full bg-white backdrop-blur supports-[backdrop-filter]:bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div className="container flex h-16 items-center justify-between px-[30px]">
        <div className="flex items-center gap-2">
          <MobileNav />
          <MainNav />
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
