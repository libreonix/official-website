import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Libreonix Private Limited</title>
        <meta name="description" content="Get in touch with Libreonix Private Limited for inquiries, support, or partnership opportunities." />
        <link rel="canonical" href="https://libreonix.in/contact" />
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
            <h1 className="text-4xl font-bold mb-8 text-slate-200">Contact Us</h1>
            <a
  href="mailto:ceo@libreonix.in"
  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-950 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-50 
      hover:from-slate-600 hover:to-slate-700 hover:scale-105 
    transition duration-300 ease-in-out 
    h-10 px-4 py-2 transform active:scale-95 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/20 focus-visible:ring-offset-2 
    disabled:pointer-events-none disabled:opacity-50"
  aria-label="Email Libreonix Private Limited"
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