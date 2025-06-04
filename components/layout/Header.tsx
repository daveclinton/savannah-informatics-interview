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
          <Link
            href="/"
            className="flex items-center border-none outline-none space-x-2"
          >
            <span className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              savannah
            </span>
          </Link>
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <Link
              href="/movies/search"
              className="text-base font-medium text-foreground  aria-current-page:underline aria-current-page:text-netflix-red transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-ring"
            >
              Discover
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            asChild
            variant="link"
            className="text-foreground hover:text-natgeo-yellow focus:ring-2 focus:ring-offset-2 focus:ring-ring cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <Link href="/movies/search">
              <Search className="w-5 h-5 cursor-pointer" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
          <Button
            variant="secondary"
            className="text-white  bg-green-500 hover:bg-primary-600 cursor-pointer rounded-xl px-4"
          >
            <Link href="/auth/login">Login</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
