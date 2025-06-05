import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Partners = () => {
  // Simple placeholder card component
  const SuspenseCard = () => (
    <div className="bg-slate-900 rounded-lg p-6 shadow-lg animate-pulse h-48 flex flex-col justify-center items-center">
      <div className="h-6 bg-slate-800 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-slate-800 rounded w-full mb-2"></div>
      <div className="h-4 bg-slate-800 rounded w-5/6"></div>
    </div>
  );

  // Microsoft for Startups card
  const MicrosoftCard = () => (
    <div className="bg-slate-900 rounded-lg p-6 shadow-lg text-white flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 text-slate-300">Microsoft for Startups</h2>
      <img src="/Partner-badges_1.png" alt="Microsoft for Startups logo" className="w-48 h-auto mb-4" />
      {/* <p className="text-sm text-slate-400 text-center">Partnering to solve problems with AI.</p> */}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Partners - Global OpenSource Softwares</title>
        <meta name="description" content="Partner with Global OpenSource Softwares to innovate with AI and expand your reach." />
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
            <h1 className="text-4xl font-bold mb-12 text-slate-200">Partners</h1>
            
            {/* Partner Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
              <MicrosoftCard />
              <SuspenseCard />
              <SuspenseCard />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Partners; 