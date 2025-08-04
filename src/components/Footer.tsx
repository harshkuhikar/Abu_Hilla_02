import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Calendar, FileText } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'About Abu Hills', path: '/about' },
      { name: 'Amenities', path: '/amenities' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Floor Plans', path: '/floor-plans' },
    ],
    'Services': [
      { name: 'Schedule Visit', path: '/contact' },
      { name: 'Property Details', path: '/about' },
      { name: 'Location Map', path: '/contact' },
      { name: 'Brochure Download', action: 'download' },
    ],
    'Contact Info': [
      { name: '+91-93275-860-40', icon: Phone, href: 'tel:+919327586040' },
      { name: '+91-93274-452-76', icon: Phone, href: 'tel:+919327445276' },
      { name: 'info@abuhills.com', icon: Mail, href: 'mailto:info@abuhills.com' },
      { name: 'Weekend Villas Location', icon: MapPin },
    ],
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-amber-600 to-orange-600 p-2 rounded-lg"
              >
                <Home className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-white">Abu Hills</span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-sm">
              Perfectly situated luxury weekend villas where contemporary lifestyle meets serene natural living.
            </p>
            <div className="space-y-2">
              <p className="text-stone-400 text-sm">Vinayak Realty</p>
              <p className="text-stone-500 text-xs">(A Dream Well Designed)</p>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {title === 'Contact Info' ? (
                      <div className="flex items-center space-x-2">
                        {link.icon && <link.icon className="h-4 w-4" />}
                        {link.href ? (
                          <a href={link.href} className="text-stone-400 hover:text-amber-400 transition-colors duration-200">
                            {link.name}
                          </a>
                        ) : (
                          <span className="text-stone-400">{link.name}</span>
                        )}
                      </div>
                    ) : (
                      link.action === 'download' ? (
                      <button
                        onClick={() => {
                          // Create and download brochure
                          const canvas = document.createElement('canvas');
                          const ctx = canvas.getContext('2d');
                          canvas.width = 800;
                          canvas.height = 1000;
                          
                          // Create brochure design
                          ctx.fillStyle = '#f5f5f4';
                          ctx.fillRect(0, 0, 800, 1000);
                          
                          // Header
                          ctx.fillStyle = '#d97706';
                          ctx.fillRect(0, 0, 800, 100);
                          ctx.fillStyle = '#ffffff';
                          ctx.font = 'bold 32px Arial';
                          ctx.fillText('Abu Hills - Luxury Weekend Villas', 50, 60);
                          
                          // Content sections
                          ctx.fillStyle = '#292524';
                          ctx.font = 'bold 24px Arial';
                          ctx.fillText('Property Details', 50, 150);
                          
                          ctx.font = '18px Arial';
                          ctx.fillText('• Total Area: 2640 SQ. FT', 50, 180);
                          ctx.fillText('• Built Year: 2018', 50, 210);
                          ctx.fillText('• Spacious Bedrooms', 50, 240);
                          ctx.fillText('• Modern Bathrooms', 50, 270);
                          ctx.fillText('• Premium Kitchen', 50, 300);
                          ctx.fillText('• Elegant Drawing Room', 50, 330);
                          
                          ctx.font = 'bold 24px Arial';
                          ctx.fillText('Amenities', 50, 380);
                          
                          ctx.font = '18px Arial';
                          ctx.fillText('• 24/7 Water Supply & Security', 50, 410);
                          ctx.fillText('• Swimming Pool', 50, 440);
                          ctx.fillText('• Landscape Garden', 50, 470);
                          ctx.fillText('• Club House', 50, 500);
                          ctx.fillText('• All Internal R.C.C. Road', 50, 530);
                          
                          ctx.font = 'bold 24px Arial';
                          ctx.fillText('Contact Information', 50, 580);
                          
                          ctx.font = '18px Arial';
                          ctx.fillText('Vinayak Realty', 50, 610);
                          ctx.fillText('(A Dream Well Designed)', 50, 640);
                          ctx.fillText('Phone: +91-93275-860-40', 50, 670);
                          ctx.fillText('Email: info@abuhills.com', 50, 700);
                          
                          // Footer
                          ctx.fillStyle = '#d97706';
                          ctx.fillRect(0, 900, 800, 100);
                          ctx.fillStyle = '#ffffff';
                          ctx.font = 'bold 20px Arial';
                          ctx.fillText('Schedule Your Visit Today!', 250, 950);
                          
                          // Download
                          const link = document.createElement('a');
                          link.download = 'abu-hills-brochure.png';
                          link.href = canvas.toDataURL();
                          link.click();
                        }}
                        className="text-stone-400 hover:text-amber-400 transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ready to Visit?</h3>
            <p className="text-stone-400 mb-4 text-sm">
              Schedule your visit to experience the luxury weekend villa lifestyle.
            </p>
            <div className="space-y-3">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Schedule Visit</span>
                </motion.button>
              </Link>
              <button 
                onClick={() => {
                  // Create and download brochure
                  const canvas = document.createElement('canvas');
                  const ctx = canvas.getContext('2d');
                  canvas.width = 800;
                  canvas.height = 1000;
                  
                  // Create brochure design
                  ctx.fillStyle = '#f5f5f4';
                  ctx.fillRect(0, 0, 800, 1000);
                  
                  // Header
                  ctx.fillStyle = '#d97706';
                  ctx.fillRect(0, 0, 800, 100);
                  ctx.fillStyle = '#ffffff';
                  ctx.font = 'bold 32px Arial';
                  ctx.fillText('Abu Hills - Luxury Weekend Villas', 50, 60);
                  
                  // Content sections
                  ctx.fillStyle = '#292524';
                  ctx.font = 'bold 24px Arial';
                  ctx.fillText('Property Details', 50, 150);
                  
                  ctx.font = '18px Arial';
                  ctx.fillText('• Total Area: 2640 SQ. FT', 50, 180);
                  ctx.fillText('• Built Year: 2018', 50, 210);
                  ctx.fillText('• Spacious Bedrooms', 50, 240);
                  ctx.fillText('• Modern Bathrooms', 50, 270);
                  ctx.fillText('• Premium Kitchen', 50, 300);
                  ctx.fillText('• Elegant Drawing Room', 50, 330);
                  
                  ctx.font = 'bold 24px Arial';
                  ctx.fillText('Amenities', 50, 380);
                  
                  ctx.font = '18px Arial';
                  ctx.fillText('• 24/7 Water Supply & Security', 50, 410);
                  ctx.fillText('• Swimming Pool', 50, 440);
                  ctx.fillText('• Landscape Garden', 50, 470);
                  ctx.fillText('• Club House', 50, 500);
                  ctx.fillText('• All Internal R.C.C. Road', 50, 530);
                  
                  ctx.font = 'bold 24px Arial';
                  ctx.fillText('Contact Information', 50, 580);
                  
                  ctx.font = '18px Arial';
                  ctx.fillText('Vinayak Realty', 50, 610);
                  ctx.fillText('(A Dream Well Designed)', 50, 640);
                  ctx.fillText('Phone: +91-93275-860-40', 50, 670);
                  ctx.fillText('Email: info@abuhills.com', 50, 700);
                  
                  // Footer
                  ctx.fillStyle = '#d97706';
                  ctx.fillRect(0, 900, 800, 100);
                  ctx.fillStyle = '#ffffff';
                  ctx.font = 'bold 20px Arial';
                  ctx.fillText('Schedule Your Visit Today!', 250, 950);
                  
                  // Download
                  const link = document.createElement('a');
                  link.download = 'abu-hills-brochure.png';
                  link.href = canvas.toDataURL();
                  link.click();
                }}
                className="w-full bg-stone-800 text-stone-300 px-4 py-2 rounded-lg hover:bg-stone-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <FileText className="h-4 w-4" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">
            © 2024 Abu Hills. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="text-stone-500 text-xs">
              Powered by RareSmart Technosys
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;