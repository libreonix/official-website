
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Code, Globe, Users, Zap, Github, BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-32">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
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

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {[
            { 
              icon: Code, 
              title: 'Open Source', 
              description: 'All our AI models and tools are completely open source and free to use.',
              color: 'text-blue-400'
            },
            { 
              icon: Globe, 
              title: 'Global Community', 
              description: 'Join thousands of developers building the future of AI together.',
              color: 'text-purple-400'
            },
            { 
              icon: Zap, 
              title: 'Cutting Edge', 
              description: 'State-of-the-art AI models trained on the latest research and techniques.',
              color: 'text-pink-400'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-12 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join our community of developers and researchers pushing the boundaries of AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Github size={20} className="mr-2" />
              View on GitHub
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <BookOpen size={20} className="mr-2" />
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
