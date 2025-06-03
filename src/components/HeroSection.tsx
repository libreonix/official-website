
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, GitBranch, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-purple-300 text-sm font-medium">Open Source AI Platform</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Global OpenSource
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Softwares
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Open-Source AI for the World.
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Democratizing artificial intelligence through open-source collaboration. 
          Build the future with cutting-edge AI tools designed for developers, researchers, and innovators worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            Explore Products
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-600 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Join Community
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { icon: GitBranch, label: 'Open Source Projects', value: '50+', color: 'text-blue-400' },
            { icon: Users, label: 'Global Contributors', value: '10K+', color: 'text-purple-400' },
            { icon: Zap, label: 'AI Models Released', value: '25+', color: 'text-pink-400' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`} />
              <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
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
