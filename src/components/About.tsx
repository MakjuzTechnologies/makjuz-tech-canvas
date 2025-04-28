
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-makjuz-primary/30 to-makjuz-light flex items-center justify-center">
                  <span className="text-makjuz-dark font-semibold">Team Image</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-makjuz-primary rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">About Makjuz Technology</h2>
            <div className="w-24 h-1 bg-makjuz-primary mb-6"></div>
            <p className="text-gray-600 mb-4">
              Makjuz Technology is a forward-thinking digital solutions provider dedicated to helping businesses of all sizes thrive in the digital landscape. With our team of experienced developers, marketers, and content creators, we deliver cutting-edge solutions tailored to your unique needs.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2018, we've successfully delivered over 500 projects for clients across the globe, ranging from startups to established enterprises. Our mission is to transform digital challenges into growth opportunities through innovation and expertise.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold text-xl text-makjuz-primary mb-2">Our Mission</h4>
                <p className="text-gray-600">To empower businesses with innovative digital solutions that drive growth and success.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl text-makjuz-primary mb-2">Our Vision</h4>
                <p className="text-gray-600">To be the most trusted technology partner for businesses worldwide.</p>
              </div>
            </div>
            
            <Button className="bg-makjuz-primary hover:bg-makjuz-secondary text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
