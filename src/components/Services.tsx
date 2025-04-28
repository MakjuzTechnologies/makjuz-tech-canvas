
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, Smartphone, Monitor, Share2, 
  BarChart2, FileText, GraduationCap 
} from 'lucide-react';

const services = [
  {
    icon: <Globe size={40} className="text-makjuz-primary mb-4" />,
    title: 'Website Development',
    description: 'Custom, responsive websites built with the latest technologies to enhance your online presence.',
  },
  {
    icon: <Smartphone size={40} className="text-makjuz-primary mb-4" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android to reach your audience on any device.',
  },
  {
    icon: <Monitor size={40} className="text-makjuz-primary mb-4" />,
    title: 'Desktop Application Development',
    description: 'Powerful and efficient desktop software tailored to your specific business needs.',
  },
  {
    icon: <Share2 size={40} className="text-makjuz-primary mb-4" />,
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns to boost engagement and build brand awareness.',
  },
  {
    icon: <BarChart2 size={40} className="text-makjuz-primary mb-4" />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to drive traffic, leads and conversions.',
  },
  {
    icon: <FileText size={40} className="text-makjuz-primary mb-4" />,
    title: 'Content Writing',
    description: 'Engaging and SEO-friendly content that resonates with your target audience.',
  },
  {
    icon: <GraduationCap size={40} className="text-makjuz-primary mb-4" />,
    title: 'Student Assignment Help',
    description: 'Professional assistance with academic assignments across various subjects and difficulty levels.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-makjuz-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive range of technology and digital marketing services to help your business thrive in the digital landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none">
              <CardContent className="p-6">
                <div className="flex flex-col items-start">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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
