
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const navItems = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-makjuz-primary">Makjuz</span>
          <span className="text-2xl font-bold text-makjuz-secondary">Tech</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-700 hover:text-makjuz-primary font-medium cursor-pointer transition-colors"
            >
              {item.name}
            </ScrollLink>
          ))}
          <Button className="bg-makjuz-primary hover:bg-makjuz-secondary text-white">
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-700 hover:text-makjuz-primary font-medium py-2 cursor-pointer"
                onClick={closeMenu}
              >
                {item.name}
              </ScrollLink>
            ))}
            <Button className="bg-makjuz-primary hover:bg-makjuz-secondary text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
