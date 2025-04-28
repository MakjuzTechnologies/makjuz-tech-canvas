
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-[#1a1429] to-[#271b3d] relative z-10" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`mx-auto max-w-3xl ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{animationDelay: '300ms'}}>
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text text-center">About Makjuz Technology</h2>
          <div className="w-24 h-1 bg-makjuz-primary mb-6 mx-auto"></div>
          <p className="text-purple-100/80 mb-4 text-center">
            Makjuz Technology is a forward-thinking digital solutions provider dedicated to helping businesses of all sizes thrive in the digital landscape. With our team of experienced developers, marketers, and content creators, we deliver cutting-edge solutions tailored to your unique needs.
          </p>
          <p className="text-purple-100/80 mb-6 text-center">
            Founded in 2018, we've successfully delivered over 500 projects for clients across the globe, ranging from startups to established enterprises. Our mission is to transform digital challenges into growth opportunities through innovation and expertise.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="glass-card p-4 rounded-lg animate-fade-in" style={{animationDelay: '500ms'}}>
              <h4 className="font-bold text-xl text-makjuz-primary mb-2">Our Mission</h4>
              <p className="text-purple-100/80">To empower businesses with innovative digital solutions that drive growth and success.</p>
            </div>
            <div className="glass-card p-4 rounded-lg animate-fade-in" style={{animationDelay: '700ms'}}>
              <h4 className="font-bold text-xl text-makjuz-primary mb-2">Our Vision</h4>
              <p className="text-purple-100/80">To be the most trusted technology partner for businesses worldwide.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-makjuz-primary hover:bg-makjuz-secondary text-white glow animate-fade-in" style={{animationDelay: '900ms'}}>
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-makjuz-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-makjuz-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;
