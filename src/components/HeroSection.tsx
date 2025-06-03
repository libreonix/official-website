
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-navy to-deep-blue animate-gradient-flow bg-400%"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-electric-blue/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Neural Network Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EAAFE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#312e81" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,300 T900,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M200,500 Q400,300 600,600 T800,700" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M150,800 Q350,600 550,900 T750,800" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Glassmorphic Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl animate-float">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-electric-blue/20 border border-electric-blue/30 rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-electric-blue" />
              <span className="text-electric-blue font-inter font-medium text-sm">AI Innovation</span>
            </div>
            
            <h1 className="font-space-grotesk font-bold text-5xl md:text-7xl text-white mb-4 leading-tight">
              Global OpenSource
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-indigo bg-clip-text text-transparent">
                Softwares
              </span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Open-Source AI for the World.
            </p>
            
            <p className="font-inter text-lg text-white/60 mb-12 max-w-3xl mx-auto">
              Building cutting-edge AI tools that empower developers, researchers, and innovators worldwide. 
              Join our mission to democratize artificial intelligence through open-source collaboration.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-electric-blue to-indigo hover:from-electric-blue/80 hover:to-indigo/80 text-white font-inter font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 animate-glow group"
            >
              Explore Products
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 font-inter font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Join Community
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { label: 'Open Source Projects', value: '50+' },
            { label: 'Global Contributors', value: '10K+' },
            { label: 'AI Models Released', value: '25+' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="text-2xl font-space-grotesk font-bold text-electric-blue mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 font-inter text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
