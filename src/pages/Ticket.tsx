import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Ticket = () => {
  return (
    <>
      <Helmet>
        <title>Submit a Ticket - Global OpenSource Softwares</title>
        <meta name="description" content="Submit a support ticket to Global OpenSource Softwares for assistance with our AI solutions." />
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
            <h1 className="text-4xl font-bold mb-8 text-slate-200">Submit a Ticket</h1>
            <p className="text-xl">Ticket submission form or content goes here.</p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Ticket; 