import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Libreonix Private Limited</title>
        <meta name="description" content="Find answers to frequently asked questions about Libreonix Private Limited and our AI-powered solutions." />
        <link rel="canonical" href="https://libreonix.in/faq" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://libreonix.in/faq" />
        <meta property="og:title" content="FAQ - Libreonix Private Limited" />
        <meta property="og:description" content="Find answers to frequently asked questions about Libreonix Private Limited and our AI-powered solutions." />
        <meta property="og:image" content="https://libreonix.in/og-image.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://libreonix.in/faq" />
        <meta property="twitter:title" content="FAQ - Libreonix Private Limited" />
        <meta property="twitter:description" content="Find answers to frequently asked questions about Libreonix Private Limited and our AI-powered solutions." />
        <meta property="twitter:image" content="https://libreonix.in/twitter-image.jpg" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 font-inter antialiased">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-black animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="container mx-auto px-8 py-48 text-white text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-blue-400">Frequently Asked Questions</h1>
            <p className="text-xl">FAQ content goes here.</p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FAQ; 