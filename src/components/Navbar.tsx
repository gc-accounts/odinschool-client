
import React from 'react';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <MainNav />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-white hover:bg-white/10">Sign In</Button>
          <Button className="bg-primary text-white hover:bg-primary/90">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
