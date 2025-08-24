import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { Suspense } from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Akshat Kotpalliwar',
      role: 'Founder & CTO',
      imageUrl: '/team/img.jpeg',
      socials: {
        github: 'https://github.com/IntegerAlex/',
        linkedin: 'https://www.linkedin.com/in/akshat-kotpalliwar/',
        email: 'ceo@libreonix.in',
      },
    },
    {
      name: 'Vaishnavi Kotpalliwar',
      role: 'CFO',
      imageUrl: '', // Blank as requested
      socials: {},
    },
    {
      name: 'Joy Athawale',
      role: 'Business Operations Executive & Data Scientist',
      imageUrl: '/team/DA.JPG',
      socials: {
        instagram: 'https://www.instagram.com/joy_athawale?igsh=YmIzejA0a2JzeWZ3&utm_source=qr',
        linkedin: 'https://www.linkedin.com/in/joy-athawale?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        email: 'corporate@libreonix.in',
      },
    },
    {
        name: 'Vaidehi Kumbhare',
        role: 'Advisor [Bachelor of ayurvedic medicine]',
        imageUrl: '/team/doctor.jpeg',
        socials: {
            linkedin: 'https://www.linkedin.com/in/vaidehi-kumbhare-bb818a291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            email: 'collaborate@libreonix.in',
        },
    }
  ];

  return (
    <>
      <Helmet>
        <title>Libreonix Private Limited - About Us</title>
        <meta name="description" content="Learn about Libreonix Private Limited, their mission, and how they empower individuals and businesses with AI technology." />
        <link rel="canonical" href="https://libreonix.in/about" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://libreonix.in/about" />
        <meta property="og:title" content="Libreonix Private Limited - About Us" />
        <meta property="og:description" content="Learn about Libreonix Private Limited, their mission, and how they empower individuals and businesses with AI technology." />
        <meta property="og:image" content="https://libreonix.in/og-image.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://libreonix.in/about" />
        <meta property="twitter:title" content="Libreonix Private Limited - About Us" />
        <meta property="twitter:description" content="Learn about Libreonix Private Limited, their mission, and how they empower individuals and businesses with AI technology." />
        <meta property="twitter:image" content="https://libreonix.in/twitter-image.jpg" />
        {
          teamMembers.map((member) => (
            <script type="application/ld+json" key={member.name}>
              {`
                ${JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": member.name,
                  "jobTitle": member.role,
                  "image": member.imageUrl || undefined,
                  "url": "https://libreonix.in/about", // Or a specific profile page if it existed
                  "sameAs": [
                    member.socials.github || undefined,
                    member.socials.linkedin || undefined,
                    member.socials.instagram || undefined,
                    member.socials.email ? `mailto:${member.socials.email}` : undefined
                  ].filter(Boolean)
                }, null, 2)}
              `}
            </script>
          ))
        }
      </Helmet>
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-inter antialiased">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-950 to-black animate-pulse"></div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<div className="h-16 bg-slate-800 animate-pulse"></div>}>
          <Navbar />
        </Suspense>
        <div className="container mx-auto px-8 py-32 text-white flex flex-col items-center">
          <Suspense fallback={
            <div className="text-center w-full max-w-4xl">
              <div className="h-12 bg-slate-800 rounded animate-pulse mb-6"></div>
              <div className="h-6 bg-slate-800 rounded animate-pulse mb-4"></div>
              <div className="h-6 bg-slate-800 rounded animate-pulse mb-4"></div>
              <div className="h-6 bg-slate-800 rounded animate-pulse mb-4"></div>
            </div>
          }>
            <div className="text-center w-full max-w-4xl">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-slate-100 tracking-tight">About Libreonix</h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-12">
                Libreonix Private Limited builds AI-powered solutions to help everyone. Our goal is to make powerful AI tools accessible to regular people, students, developers, and professionals from all backgrounds. We believe AI should empower everyone and are creating an open ecosystem where diverse ideas lead to better technology.
              </p>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-12">
                LIBREONIX PRIVATE LIMITED, a company registered in Maharashtra, India 
              </p>
            </div>
          </Suspense>

          {/* Team Section - Hidden */}
          {/* <div className="w-full max-w-6xl mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-200">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-lg transition-all duration-300 hover:bg-slate-800/80 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="w-32 h-32 rounded-full mb-4 overflow-hidden border-2 border-slate-600/50 bg-slate-700 flex items-center justify-center">
                    {member.imageUrl ? (
                      <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-slate-400 text-4xl font-bold">{member.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{member.name}</h3>
                  <p className="text-blue-300/80 mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    {member.socials.github && (
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    )}
                    {member.socials.instagram && (
                        <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                    )}
                    {member.socials.email && (
                        <a href={`mailto:${member.socials.email}`} className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
        <Suspense fallback={<div className="h-64 bg-slate-800 animate-pulse"></div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
    </>
  );
};

export default About; 