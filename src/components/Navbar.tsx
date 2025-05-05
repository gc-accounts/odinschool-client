
import React from 'react';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white backdrop-blur supports-[backdrop-filter]:bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <MainNav />
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-primary text-white hover:bg-primary/90">Log In</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
