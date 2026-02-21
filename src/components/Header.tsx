import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { useTheme } from "@/components/ThemeProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Clients", href: "/clients" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const logoSrc = theme === "dark" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <img 
              src={logoSrc}
              alt="Architeq Web Agency" 
              className="h-10 w-auto object-contain"
              style={{ maxWidth: '200px' }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
