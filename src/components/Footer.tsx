import { Github, Twitter, Linkedin, Mail, MapPin, Globe, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/libreonix', label: 'GitHub' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.197.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ), 
      href: '#discord', 
      label: 'Discord' 
    },
    { icon: Instagram, href: 'https://instagram.com/libreonix', label: 'Instagram' },
  ];

  const footerLinks = {
    Product: [
      { text: 'AI Agents', href: '#ai-agents' },
      { text: 'Braindock', href: 'https://braindock.libreonix.in' },
      { text: 'API Reference', href: '#api-reference' },
      { text: 'GitHub Repos', href: 'https://github.com/libreonix' }
    ],
    Company: [
      { text: 'About Us', href: '/about' },
      { text: 'Blog', href: '/blogs' },
      { text: 'Careers', href: '/careers' },
      { text: 'Contact', href: '/contact' },
      { text: 'Investors', href: '/investors' },
      { text: 'Partners', href: '/partners' },
      { text: 'Press', href: '/press' },
    ],
    Support: [
      { text: 'FAQ', href: '/faq' },
      { text: 'Ticket', href: '/ticket' },
    ],
    Legal: [
      { text: 'Terms of Service', href: '/tos' },
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'License', href: '/license' },
    ]
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <img src="/libreonix_brand_assets/libreonix_logo_fullcolor.png" alt="Libreonix Private Limited logo" className="w-40 h-40" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Building the future of AI through open-source collaboration. 
              Democratizing artificial intelligence for developers worldwide.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
              <Globe size={16} />
              <span>Open Source AI Platform</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <MapPin size={16} />
              <span>Global Community</span>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Get the latest updates on our AI models and tools.</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800/50 border border-slate-600/30 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 transition-all"
                aria-label="Email for newsletter subscription"
              />
              <button className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-600 hover:via-slate-700 hover:to-slate-800 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 border border-slate-600/30 shadow-lg hover:shadow-slate-700/50" aria-label="Subscribe to newsletter">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">
                © 2024 Libreonix Private Limited. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Building the future of AI, one open-source project at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
