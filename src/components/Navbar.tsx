import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Phone, Calendar } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT ABU HILLS", path: "/about" },
    { name: "AMENITIES", path: "/amenities" },
    { name: "GALLERY", path: "/gallery" },
    { name: "FLOOR PLANS", path: "/floor-plans" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-amber-600 to-orange-600 p-2 rounded-lg"
            >
              <Home className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl lg:text-2xl font-bold text-stone-800">
              Abu Hills
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium text-sm transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-amber-600"
                    : "text-stone-700 hover:text-amber-600"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm"
              >
                <Calendar className="h-4 w-4" />
                <span>Schedule Visit</span>
              </motion.button>
            </Link>
            <a
              href="tel:+919327586040"
              className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91-93275-860-40</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-stone-200"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-amber-600"
                      : "text-stone-700 hover:text-amber-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-stone-200 mt-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="btn-primary w-full text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>Schedule Visit</span>
                  </button>
                </Link>
                <a
                  href="tel:+919327586040"
                  className="flex items-center justify-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">+91-93275-860-40</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
