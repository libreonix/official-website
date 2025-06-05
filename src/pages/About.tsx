import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <> 
    <Helmet>
      <title>Global OpenSource Softwares - About Us</title>
      <meta name="description" content="Learn about Global OpenSource Softwares, their mission, and how they empower individuals and businesses with AI technology." />
    </Helmet>
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-inter antialiased">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-950 to-black animate-pulse"></div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-8 py-32 text-white text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-blue-400">About Us</h1>
          <div className="max-w-3xl text-center text-lg">
            <p className="mb-6">
              Global OpenSource Softwares builds AI-powered solutions to help everyone. Our goal is to make powerful AI tools accessible to regular people, students, developers, and professionals from all backgrounds.
            </p>
            <p>
              We believe AI should empower everyone. We're creating an open ecosystem where diverse ideas lead to better technology, helping people of all races, genders, and ethnicities solve problems and succeed with AI.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    </>
  );
};

export default About; 