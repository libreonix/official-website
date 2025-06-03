
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-indigo rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="font-space-grotesk font-bold text-xl text-white">
              GOSS
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/80 hover:text-electric-blue transition-colors duration-300 font-inter font-medium">
              Home
            </a>
            <a href="#products" className="text-white/80 hover:text-electric-blue transition-colors duration-300 font-inter font-medium">
              Products
            </a>
            <a href="#github" className="text-white/80 hover:text-electric-blue transition-colors duration-300 font-inter font-medium flex items-center space-x-1">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a href="#contact" className="text-white/80 hover:text-electric-blue transition-colors duration-300 font-inter font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden text-white hover:bg-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
