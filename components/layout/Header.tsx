import { Search } from "lucide-react";
import React from "react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <div className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl font-bold">daveclintonn</span>
          </div>
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <a
              href="#"
              className="text-sm lg:text-base text-foreground hover:text-muted-foreground"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-muted hover:text-foreground"
            >
              Discover
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-muted hover:text-foreground"
            >
              Movie Release
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-muted hover:text-foreground"
            >
              Forum
            </a>
            <a
              href="#"
              className="text-sm lg:text-base text-muted hover:text-foreground"
            >
              About
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Search className="w-5 h-5 text-foreground" />
          <Button
            variant="outline"
            className="border border-border text-foreground bg-transparent rounded-xl px-4 sm:px-6 py-2 text-sm sm:text-base"
          >
            Sign up
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-4 sm:px-6 py-2 text-sm sm:text-base">
            Login
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
