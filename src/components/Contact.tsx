
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: <Phone size={24} className="text-makjuz-primary" />,
    title: 'Phone',
    details: '+1 (123) 456-7890',
  },
  {
    icon: <Mail size={24} className="text-makjuz-primary" />,
    title: 'Email',
    details: 'info@makjuztech.com',
  },
  {
    icon: <MapPin size={24} className="text-makjuz-primary" />,
    title: 'Address',
    details: '123 Business Avenue, Tech City, 10001',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend or email service
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-makjuz-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Have questions or ready to start your project? Get in touch with our team and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-700 font-medium block">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full p-3 border rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700 font-medium block">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full p-3 border rounded-md"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-gray-700 font-medium block">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                      className="w-full p-3 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-700 font-medium block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={5}
                      required
                      className="w-full p-3 border rounded-md"
                    />
                  </div>
                  <div>
                    <Button type="submit" className="bg-makjuz-primary hover:bg-makjuz-secondary text-white px-8 py-6">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="border-none shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gray-200">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-500">Map Here</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
