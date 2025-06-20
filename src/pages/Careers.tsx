import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers at Libreonix Private Limited</title>
        <meta name="description" content="Explore career opportunities at Libreonix Private Limited and join our mission to empower with AI-powered solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-inter antialiased">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-950 to-black animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="container mx-auto px-8 py-48 text-white text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4 text-slate-200">Careers</h1>
            <p className="text-xl mb-8">Enter email to get notified about openings</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-slate-600/30 bg-slate-800/50 px-3 py-2 text-sm ring-offset-slate-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                aria-label="Email for job opening notifications"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-50 hover:from-slate-600 hover:to-slate-700 h-10 px-4 py-2 border border-slate-600/30"
              >
                Subscribe
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Careers;   