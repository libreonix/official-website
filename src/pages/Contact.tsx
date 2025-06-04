import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Global OpenSource Softwares</title>
        <meta name="description" content="Get in touch with Global OpenSource Softwares for inquiries, support, or partnership opportunities." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 font-inter antialiased">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-black animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="container mx-auto px-8 py-48 text-white text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-purple-400">Contact Us</h1>
            <a
  href="mailto:ceo@globalopensourcesoftwares.in"
  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-950 bg-purple-600 text-slate-50 
    hover:bg-purple-700 hover:shadow-[0_0_15px_3px_rgba(139,92,246,0.6)] hover:scale-105 
    transition duration-300 ease-in-out 
    h-10 px-4 py-2 transform active:scale-95 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-900 focus-visible:ring-offset-2 
    disabled:pointer-events-none disabled:opacity-50"
>
  Email Us
</a>


          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;