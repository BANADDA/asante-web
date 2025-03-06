import { ChevronDown, Mail, Menu, Phone, Search, ShoppingCart, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar({ routes }) {
  const [openNav, setOpenNav] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full">
      {/* Top Bar - Hidden on mobile and when scrolled */}
      <div className={`bg-blue-900 text-white transition-all duration-300 hidden md:block w-full z-50 ${
        scrolled ? 'hidden' : 'block'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-8">
            <div className="flex space-x-4 text-xs">
              <Link to="/careers" className="hover:text-gray-300">Careers</Link>
              <Link to="/faq" className="hover:text-gray-300">FAQs</Link>
            </div>
            
            <div className="flex space-x-4 text-xs">
              <span className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                <a href="tel:+256414691868">+256 414 691 868</a>
                <span className="mx-1">|</span>
                <a href="tel:+256751272683">+256 751 272 683</a>
              </span>
              <span className="flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                <a href="mailto:info@asantewm.com">info@asantewm.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md top-0' 
          : 'bg-white/90 md:top-8'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/img/asante-logo.png"
                alt="Asante Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex space-x-4">
                {routes.map(({ name, path, dropdownItems }) => (
                  <li key={name} className="relative group">
                    <Link
                      to={path}
                      className="flex items-center text-gray-800 hover:text-blue-600 font-medium text-sm uppercase"
                    >
                      {name}
                      {dropdownItems && <ChevronDown className="w-3 h-3 ml-1" />}
                    </Link>
                    {dropdownItems && (
                      <div className="absolute left-0 hidden group-hover:block mt-1 w-40 bg-white/95 backdrop-blur-sm border rounded-md shadow-lg py-1">
                        {dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Desktop "Request Schedule" Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                to="/contact"
                className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-4 py-1.5 rounded text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-600 p-1.5"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {openNav && (
            <div className="lg:hidden py-3 border-t bg-white">
              <ul className="space-y-3">
                {routes.map(({ name, path, dropdownItems }) => (
                  <li key={name} className="group">
                    <Link
                      to={path}
                      className="flex items-center justify-between text-gray-800 hover:text-blue-600 font-medium text-sm uppercase px-3"
                    >
                      {name}
                      {dropdownItems && <ChevronDown className="w-3 h-3 ml-1" />}
                    </Link>
                    {dropdownItems && (
                      <div className="pl-3 mt-1 space-y-1 bg-gray-50">
                        {dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-3 py-1.5 text-xs text-gray-700 hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-3 space-y-3 px-3">
                <div className="flex items-center justify-around">
                  <button className="text-gray-600 hover:text-blue-600 p-1.5">
                    <Search className="w-5 h-5" />
                  </button>
                  <div className="flex items-center">
                    <ShoppingCart className="w-5 h-5 text-yellow-600 mr-1.5" />
                    <span className="text-sm text-gray-600">Cart ({cartCount})</span>
                  </div>
                </div>
                {/* Additional quick links for mobile */}
                <div className="flex justify-between mt-3 pb-3 border-b border-gray-100">
                  <Link to="/careers" className="text-sm text-gray-600 hover:text-blue-600">Careers</Link>
                  <Link to="/faq" className="text-sm text-gray-600 hover:text-blue-600">FAQs</Link>
                </div>
                {/* Mobile "Request Schedule" Button */}
                <Link 
                  to="/contact"
                  className="block w-full text-center border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-4 py-1.5 rounded text-sm font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

Navbar.defaultProps = {
  routes: []
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
