import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { Instagram } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const logoSrc = theme === "dark" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src={logoSrc} 
                alt="Architeq Web Agency" 
                className="h-8 w-auto object-contain"
                style={{ maxWidth: '180px' }}
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Transform your online presence with professional, fast, and affordable web solutions. 
              We deliver and launch websites within 7 days.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/clients" className="hover:text-foreground transition-colors">Our Clients</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="tel:069 490 0189" className="hover:text-foreground transition-colors">
                  069 490 0189
                </a>
              </li>
              <li>
                <a href="mailto:architeqwebagency@gmail.com" className="hover:text-foreground transition-colors">
                  architeqwebagency@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/27694900189" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/architeqwebagency/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-xs text-muted-foreground">
          <p>© {currentYear} Architeq Web Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
