
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavLink 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="Automatizalo Home"
          >
            <span className="text-xl md:text-2xl font-bold text-gradient">automatízalo</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                cn("text-sm font-medium transition-colors hover:text-automatizalo-purple", 
                isActive ? "text-automatizalo-purple" : "text-automatizalo-dark")
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/solutions" 
              className={({ isActive }) => 
                cn("text-sm font-medium transition-colors hover:text-automatizalo-purple", 
                isActive ? "text-automatizalo-purple" : "text-automatizalo-dark")
              }
            >
              Solutions
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                cn("text-sm font-medium transition-colors hover:text-automatizalo-purple", 
                isActive ? "text-automatizalo-purple" : "text-automatizalo-dark")
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                cn("text-sm font-medium transition-colors hover:text-automatizalo-purple", 
                isActive ? "text-automatizalo-purple" : "text-automatizalo-dark")
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-to-r from-automatizalo-blue to-automatizalo-purple text-white hover:shadow-lg transition-all duration-300"
            >
              <NavLink to="/contact">
                Get Started
              </NavLink>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden p-2 rounded-md text-automatizalo-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 animate-fade-in">
          <div className="flex flex-col space-y-4 pt-2 pb-6 px-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                cn("py-3 text-base font-medium transition-colors", 
                isActive ? "text-automatizalo-purple" : "text-automatizalo-dark")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/solutions" 
              className={({ isActive }) => 
                cn("py-3 text-base font-medium transition-colors", 
                isActive ? "text-automatizalo-purple" : "text-automatizalo-dark")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                cn("py-3 text-base font-medium transition-colors", 
                isActive ? "text-automatizalo-purple" : "text-automatizalo-dark")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                cn("py-3 text-base font-medium transition-colors", 
                isActive ? "text-automatizalo-purple" : "text-automatizalo-dark")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-automatizalo-blue to-automatizalo-purple text-white"
            >
              <NavLink 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </NavLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
