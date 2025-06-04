import { Github, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/goss-logo.png" alt="Global OpenSource Softwares logo" className="w-20 h-20" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
               { text: 'Home', href: '/' },
              { text: 'About', href: '/about' },
              { text: 'Careers', href: '/careers' },
              { text: 'Products', href: '/products' },
              { text: 'Contact', href: '/contact' },
              { text: 'GitHub', href: 'https://github.com/globalopensourcesoftwares' },
            ].map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                aria-label={`Navigate to ${item.text}`}
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { text: 'Home', href: '/' },
                { text: 'About', href: '/about' },
                { text: 'Careers', href: '/careers' },
                { text: 'Products', href: '/products' },
                { text: 'Contact', href: '/contact' },
                { text: 'GitHub', href: 'https://github.com/globalopensourcesoftwares' },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Navigate to ${item.text}`}
                >
                  {item.text  }
                </a>
              ))}
              <a
                href="https://github.com/globalopensourcesoftwares"
                className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Visit Global OpenSource Softwares GitHub profile"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
