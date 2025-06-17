import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-inter antialiased">
      <Helmet>
        <title>404 Not Found - Libreonix Private Limited</title>
        <meta name="description" content="The page you are looking for does not exist on Libreonix Private Limited's website." />
        <link rel="canonical" href="https://libreonix.in/404" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://libreonix.in/404" />
        <meta property="og:title" content="404 Not Found - Libreonix Private Limited" />
        <meta property="og:description" content="The page you are looking for does not exist on Libreonix Private Limited's website." />
        <meta property="og:image" content="https://libreonix.in/og-image.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://libreonix.in/404" />
        <meta property="twitter:title" content="404 Not Found - Libreonix Private Limited" />
        <meta property="twitter:description" content="The page you are looking for does not exist on Libreonix Private Limited's website." />
        <meta property="twitter:image" content="https://libreonix.in/twitter-image.jpg" />
      </Helmet>
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-950 to-black animate-pulse"></div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-8 py-48 text-white text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8 text-slate-200">404 Token lost in hallucination</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a
            href="/"
            className="text-blue-500 hover:text-blue-700 underline"
            aria-label="Return to home page"
          >
            Return to Home
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
