import { Search } from "lucide-react";
import React from "react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              daveclintonn
            </span>
          </Link>
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <Link
              href="#"
              className="text-base font-medium text-foreground hover:text-netflix-red aria-current-page:underline aria-current-page:text-netflix-red transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-ring"
            >
              Discover
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-foreground hover:text-netflix-red aria-current-page:underline aria-current-page:text-netflix-red transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-ring"
            >
              Movie Release
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-foreground hover:text-netflix-red aria-current-page:underline aria-current-page:text-netflix-red transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-ring"
            >
              Forum
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-foreground hover:text-netflix-red aria-current-page:underline aria-current-page:text-netflix-red transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-ring"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="ghost"
            className="text-foreground hover:text-natgeo-yellow focus:ring-2 focus:ring-offset-2 focus:ring-ring cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <Search className="w-5 h-5 cursor-pointer" />
            <span className="sr-only">Search</span>
          </Button>
          <Button
            variant="outline"
            className="border border-hbo-purple text-hbo-purple hover:bg-hbo-purple hover:text-primary-foreground rounded-xl px-4 sm:px-6 py-2 text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-hbo-purple transition-transform duration-200 hover:scale-105"
          >
            Sign up
          </Button>
          <Button className="bg-netflix-red hover:bg-netflix-red/90 text-primary-foreground rounded-xl px-4 sm:px-6 py-2 text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-netflix-red transition-transform duration-200 hover:scale-105">
            Login
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
