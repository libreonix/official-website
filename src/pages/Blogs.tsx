import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
  // Simple placeholder card component
  const BlogCardPlaceholder = () => (
    <div className="bg-slate-900 rounded-lg p-6 shadow-lg animate-pulse h-64">
      <div className="h-6 bg-slate-800 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-slate-800 rounded w-full mb-2"></div>
      <div className="h-4 bg-slate-800 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-slate-800 rounded w-4/6"></div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Blogs - Global OpenSource Softwares</title>
        <meta name="description" content="Read the latest updates and insights from Global OpenSource Softwares." />
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
            <h1 className="text-4xl font-bold mb-4 text-blue-400">Blogs</h1>
            <p className="text-xl mb-12">Coming Soon</p>
            
            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
              <BlogCardPlaceholder />
              <BlogCardPlaceholder />
              <BlogCardPlaceholder />
              <BlogCardPlaceholder />
              <BlogCardPlaceholder />
              <BlogCardPlaceholder />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blogs; 