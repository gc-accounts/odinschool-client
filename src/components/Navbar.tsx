
import React from 'react';
import MainNav from './MainNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
