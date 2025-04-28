
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingText = ["Digital Presence", "Web Experience", "Mobile Apps", "Business Growth"];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotating text effect
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % rotatingText.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="pt-32 pb-20 md:pt-36 md:pb-28 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="header-gradient">Transform</span> Your{" "}
                <span className="block mt-2 min-h-[4.5rem]">
                  <span className="animate-typing text-transparent bg-gradient-to-r from-purple-400 to-pink-200 bg-clip-text">
                    {rotatingText[currentTextIndex]}
                  </span>
                </span>
              </h1>
            </div>
            <p className="text-lg text-purple-100/80 md:text-xl max-w-lg animate-slide-in delay-200">
              Custom web & mobile solutions, digital marketing strategies, and technical content to elevate your business in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in delay-300">
              <Button className="bg-makjuz-primary hover:bg-makjuz-secondary text-white px-6 py-6 text-lg glow">
                Get Free Consultation
                <ArrowRight className="ml-2 animate-pulse-slow" size={18} />
              </Button>
              <Button variant="outline" className="border-makjuz-primary text-makjuz-primary hover:bg-makjuz-primary/10 px-6 py-6 text-lg">
                Our Services
              </Button>
            </div>
            <div className="pt-4 animate-fade-in delay-400">
              <p className="text-sm text-purple-200/60">Trusted by 200+ businesses worldwide</p>
              <div className="flex flex-wrap gap-6 mt-3 opacity-50">
                <div className="w-24 h-8 bg-purple-300/10 rounded glass-card floating"></div>
                <div className="w-24 h-8 bg-purple-300/10 rounded glass-card floating" style={{animationDelay: "1s"}}></div>
                <div className="w-24 h-8 bg-purple-300/10 rounded glass-card floating" style={{animationDelay: "1.5s"}}></div>
                <div className="w-24 h-8 bg-purple-300/10 rounded glass-card floating" style={{animationDelay: "0.7s"}}></div>
              </div>
            </div>
          </div>
          <div className={`hidden lg:block ${isVisible ? 'rotate-in' : 'opacity-0'}`}>
            <div className="relative tilt-card">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-makjuz-primary rounded-full filter blur-3xl opacity-20 z-0 animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-makjuz-secondary rounded-full filter blur-3xl opacity-10 z-0 animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
              <div className="relative z-10 glass-card p-4 rounded-2xl shadow-xl tilt-content">
                <div className="aspect-video bg-gradient-to-br from-makjuz-primary/10 to-makjuz-secondary/10 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-makjuz-primary/40 flex items-center justify-center glow">
                        <div className="w-12 h-12 rounded-full bg-makjuz-primary flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <p className="mt-4 text-purple-100 font-medium">Watch how we work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated clouds/waves at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="rgba(155, 135, 245, 0.05)" fillOpacity="1" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,213.3C672,213,768,171,864,144C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
