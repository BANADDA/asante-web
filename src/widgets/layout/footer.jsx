// src/components/layout/Footer.jsx

import { Typography } from "@material-tailwind/react";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-blue-900 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <Typography className="text-white/80 text-sm mb-4 md:mb-0">
            ©Asante Waste Management.
          </Typography>

          {/* Links */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center">
              <Link to="/" className="text-white/80 hover:text-white text-sm transition-colors px-4">
                Home Page
              </Link>
              <span className="text-white/40">|</span>
              <Link to="/privacy-policy" className="text-white/80 hover:text-white text-sm transition-colors px-4">
                Privacy Policy
              </Link>
              <span className="text-white/40">|</span>
              <Link to="/support" className="text-white/80 hover:text-white text-sm transition-colors px-4">
                Support Team
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = "/src/components/layout/Footer.jsx";

export default Footer;