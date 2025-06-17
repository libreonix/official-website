import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Libreonix Private Limited - AI Solutions for Everyone</title>
        <meta name="description" content="Discover Libreonix Private Limited, building AI-powered solutions to empower individuals and businesses from all backgrounds." />
        <link rel="canonical" href="https://libreonix.in/" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://libreonix.in/" />
        <meta property="og:title" content="Libreonix Private Limited - AI Solutions for Everyone" />
        <meta property="og:description" content="Discover Libreonix Private Limited, building AI-powered solutions to empower individuals and businesses from all backgrounds." />
        <meta property="og:image" content="https://libreonix.in/og-image.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://libreonix.in/" />
        <meta property="twitter:title" content="Libreonix Private Limited - AI Solutions for Everyone" />
        <meta property="twitter:description" content="Discover Libreonix Private Limited, building AI-powered solutions to empower individuals and businesses from all backgrounds." />
        <meta property="twitter:image" content="https://libreonix.in/twitter-image.jpg" />
        <script type="application/ld+json">
          {`
            ${JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Libreonix Private Limited",
              "url": "https://libreonix.in/",
              "logo": "https://libreonix.in/libreonix-logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "customer service",
                "email": "ceo@libreonix.in"
              },
              "sameAs": [
                "https://github.com/libreonix",
                "https://twitter.com/libreonix",
                "https://www.linkedin.com/company/libreonix"
              ]
            }, null, 2)}
          `}
        </script>
        <script type="application/ld+json">
          {`
            ${JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Libreonix Private Limited",
              "url": "https://libreonix.in/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://libreonix.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }, null, 2)}
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-inter antialiased">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-950 to-black animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
