
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="header-gradient">Transform</span> Your Digital Presence
            </h1>
            <p className="text-lg text-gray-600 md:text-xl max-w-lg">
              Custom web & mobile solutions, digital marketing strategies, and technical content to elevate your business in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-makjuz-primary hover:bg-makjuz-secondary text-white px-6 py-6 text-lg">
                Get Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-makjuz-primary text-makjuz-primary hover:bg-makjuz-light px-6 py-6 text-lg">
                Our Services
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500">Trusted by 200+ businesses worldwide</p>
              <div className="flex flex-wrap gap-6 mt-3 opacity-60">
                <div className="w-24 h-8 bg-gray-200 rounded"></div>
                <div className="w-24 h-8 bg-gray-200 rounded"></div>
                <div className="w-24 h-8 bg-gray-200 rounded"></div>
                <div className="w-24 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-makjuz-light rounded-full filter blur-3xl opacity-60 z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-makjuz-primary rounded-full filter blur-3xl opacity-30 z-0"></div>
              <div className="relative z-10 bg-white p-4 rounded-2xl shadow-lg">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-makjuz-primary/20 to-makjuz-secondary/20 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-makjuz-primary/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-makjuz-primary flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600 font-medium">Watch how we work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
