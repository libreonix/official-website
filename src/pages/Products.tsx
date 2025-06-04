import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products - Global OpenSource Softwares</title>
        <meta name="description" content="Explore AI-powered software solutions developed by Global OpenSource Softwares." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 font-inter antialiased">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-black animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="container mx-auto px-8 py-48 text-white flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-purple-400 text-center">Products</h1>
            {/* Braindock Card */}
            <div className="w-full max-w-2xl flex flex-col md:flex-row bg-slate-900 rounded-xl shadow-lg mb-8 border border-purple-700/50 overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
              {/* Image Container - Fixed square on md and up, image covers edges */}
              <div className="flex-shrink-0 w-full h-64 md:w-64 md:h-64 bg-slate-800 flex items-center justify-center overflow-hidden rounded-tl-xl md:rounded-none md:rounded-l-xl relative">
                <img src="/braindock.png" alt="Braindock - AI Workspace" className="w-full h-full object-cover" />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="flex flex-col justify-center p-8 flex-1 w-full text-left bg-slate-850">
                <h2 className="text-2xl font-semibold text-purple-300 mb-2">Braindock - AI Workspace</h2>
                <p className="text-base text-gray-400 mb-4 leading-relaxed">AI Workspace to help you study, research, and boost creativity.</p>
                <a href="https://braindock.gossorg.in/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded transition-colors">Visit Braindock</a>
              </div>
            </div>
            {/* Suspense Cards */}
            <div className="w-full max-w-2xl flex flex-col gap-6">
              <div className="flex flex-row bg-slate-800 rounded-xl shadow-md border border-purple-700/20 h-40 animate-pulse">
                <div className="w-1/3 bg-slate-700 rounded-l-xl"></div>
                <div className="w-2/3 flex flex-col justify-center p-6">
                  <div className="h-6 bg-slate-700 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-slate-700 rounded w-2/3"></div>
                </div>
              </div>
              <div className="flex flex-row bg-slate-800 rounded-xl shadow-md border border-purple-700/20 h-40 animate-pulse">
                <div className="w-1/3 bg-slate-700 rounded-l-xl"></div>
                <div className="w-2/3 flex flex-col justify-center p-6">
                  <div className="h-6 bg-slate-700 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-slate-700 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Products; 