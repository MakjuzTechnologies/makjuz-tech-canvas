
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, Smartphone, Monitor, Share2, 
  BarChart2, FileText, GraduationCap 
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: <Globe size={40} className="service-icon" />,
    title: 'Website Development',
    description: 'Custom, responsive websites built with the latest technologies to enhance your online presence.',
  },
  {
    icon: <Smartphone size={40} className="service-icon" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android to reach your audience on any device.',
  },
  {
    icon: <Monitor size={40} className="service-icon" />,
    title: 'Desktop Application Development',
    description: 'Powerful and efficient desktop software tailored to your specific business needs.',
  },
  {
    icon: <Share2 size={40} className="service-icon" />,
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns to boost engagement and build brand awareness.',
  },
  {
    icon: <BarChart2 size={40} className="service-icon" />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to drive traffic, leads and conversions.',
  },
  {
    icon: <FileText size={40} className="service-icon" />,
    title: 'Content Writing',
    description: 'Engaging and SEO-friendly content that resonates with your target audience.',
  },
  {
    icon: <GraduationCap size={40} className="service-icon" />,
    title: 'Student Assignment Help',
    description: 'Professional assistance with academic assignments across various subjects and difficulty levels.',
  },
];

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        const timer = setTimeout(() => {
          setVisibleItems(Array.from({ length: services.length }, (_, i) => i));
        }, 100);
        
        window.removeEventListener('scroll', handleScroll);
        return () => clearTimeout(timer);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="services" className="section-padding relative z-10 bg-gradient-to-b from-[#271b3d] to-[#1a1429]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-3 text-transparent bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text animate-fade-in">Our Services</h2>
          <div className="w-24 h-1 bg-makjuz-primary mx-auto mb-4 animate-slide-in"></div>
          <p className="text-purple-100/80 text-lg animate-fade-in delay-200">
            We offer a comprehensive range of technology and digital marketing services to help your business thrive in the digital landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`service-card overflow-hidden border-none glass-card opacity-0 ${
                visibleItems.includes(index) ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-start">
                  <div className="text-makjuz-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-100">{service.title}</h3>
                  <p className="text-purple-200/70">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
