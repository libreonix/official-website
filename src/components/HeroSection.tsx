import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Github, BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-800/20 to-blue-900/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/30 to-slate-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Badge */}
        {/* <div className="inline-flex items-center space-x-2 bg-slate-800/20 border border-slate-600/30 rounded-full px-8 py-4 mb-10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg"> */}
          <Sparkles size={16} className="text-slate-300 animate-pulse" />
          <span className="text-slate-200 text-sm font-medium tracking-wide">Global OpenSource Softwares</span>
        {/* </div> */}
        
        {/* Main Heading */}
        <div className="relative mb-12">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 leading-none tracking-tight transform hover:scale-105 transition-all duration-500 ease-out animate-fade-in drop-shadow-2xl">
            GOSS
          </h1>
          {/* Subtitle moved below and properly styled */}
          <p className="text-xl sm:text-2xl text-gray-300 mt-6 font-light tracking-wider animate-fade-in-delay">
            Bridging the gap between open-source and proprietary AI for a thriving ecosystem
          </p>
        </div>
        
        {/* Enhanced Description */}
        <div className="mb-12 animate-fade-in-delay-2">
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Explore cutting-edge technologies designed to accelerate progress for a better tomorrow.
            <span className="block mt-4 text-slate-300 font-medium">
              Explore how GOSS empowers the ecosystem and contributes to a more open and innovative AI future.
            </span>
          </p>
        </div>

        {/* Primary CTA - Framed within the story */}
        <div className="mb-20 animate-fade-in-delay-3">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-600 hover:via-slate-700 hover:to-slate-800 text-white font-semibold px-12 py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-slate-700/50 hover:scale-110 transform group text-lg border border-slate-600/30"
            onClick={() => {
              window.location.href = 'https://braindock.gossorg.in';
            }}
          >
            Discover GOSS Products
            <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>

        {/* Secondary CTA Section with Glassmorphism - Framed within the story */}
        

        {/* Partnership Section */}
        <div className="mt-24 animate-fade-in-delay-5">
          {/* Images Container */}
          <div className="flex flex-col sm:flex-row gap-12 justify-center items-center mb-8">
            <div className="transform hover:scale-110 transition-all duration-300 hover:rotate-3">
              <img 
                src="/goss-logo.png" 
                alt="GOSS Logo" 
                className="w-40 h-40 sm:w-40 sm:h-40 object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300" 
              />
            </div>
            <div className="transform hover:scale-110 transition-all duration-300 hover:-rotate-3">
              <img 
                src="/Partner-badges_1.png" 
                alt="Microsoft for Startups Partner Badge" 
                className="w-32 h-24 sm:w-40 sm:h-30 object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300" 
              />
            </div>
          </div>
          
          {/* Partnership Text */}
          <div className="relative">
            <p className="text-lg sm:text-xl text-gray-400 font-semibold tracking-wide">
              Proud partner of Microsoft for Startups
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px bottom-0 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
