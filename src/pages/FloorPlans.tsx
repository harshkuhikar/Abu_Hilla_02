import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Maximize, Home, Bed, Bath, Square, Eye, X, ZoomIn, ZoomOut } from 'lucide-react';

const FloorPlans = () => {
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const floorPlanDetails = [
    { icon: Square, label: 'Total Area', value: '2640 SQ. FT' },
    { icon: Bed, label: 'Bedrooms', value: 'Spacious' },
    { icon: Bath, label: 'Bathrooms', value: 'Modern' },
    { icon: Home, label: 'Drawing Rooms', value: 'Elegant' },
    { icon: Home, label: 'Kitchens', value: 'Premium' },
    { icon: Home, label: 'Built Year', value: '2018' }
  ];

  const specifications = [
    {
      room: 'Drawing Room',
      dimensions: '16\' x 12\'',
      features: ['Premium flooring', 'Natural lighting', 'Modern design']
    },
    {
      room: 'Bedroom',
      dimensions: '14\' x 12\'',
      features: ['Built-in wardrobe', 'Attached balcony', 'Premium fixtures']
    },
    {
      room: 'Kitchen',
      dimensions: '10\' x 8\'',
      features: ['Granite platform', 'Premium SS sink', 'Designer tiles']
    },
    {
      room: 'Bathroom',
      dimensions: '8\' x 6\'',
      features: ['Designer tiles', 'Premium accessories', 'Concealed plumbing']
    }
  ];

  const handleDownloadFloorPlan = () => {
    // Create a downloadable floor plan
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    
    // Draw floor plan
    ctx.fillStyle = '#f5f5f4';
    ctx.fillRect(0, 0, 800, 600);
    
    // Draw rooms
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 3;
    ctx.strokeRect(50, 50, 300, 200); // Drawing Room
    ctx.strokeRect(450, 50, 280, 200); // Bedroom
    ctx.strokeRect(50, 350, 200, 160); // Kitchen
    ctx.strokeRect(450, 350, 160, 160); // Bathroom
    
    // Add labels
    ctx.fillStyle = '#292524';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Drawing Room', 120, 140);
    ctx.fillText('16\' x 12\'', 140, 160);
    ctx.fillText('Bedroom', 550, 140);
    ctx.fillText('14\' x 12\'', 560, 160);
    ctx.fillText('Kitchen', 120, 440);
    ctx.fillText('10\' x 8\'', 130, 460);
    ctx.fillText('Bathroom', 500, 440);
    ctx.fillText('8\' x 6\'', 510, 460);
    
    // Add title
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = '#d97706';
    ctx.fillText('Abu Hills Villa Floor Plan - 2640 SQ. FT', 200, 30);
    
    // Download
    const link = document.createElement('a');
    link.download = 'abu-hills-floor-plan.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleViewFullSize = () => {
    setIsFloorPlanOpen(true);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 lg:pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Floor plans"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
              Detailed Floor Plans
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-stone-100 leading-relaxed px-4">
              A detailed plan of the villa with all the dimensions and specifications. 
              Discover the thoughtful layout designed for modern luxury living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floor Plan Details */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Villa Specifications
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-4">
              Comprehensive details of your luxury weekend villa layout and dimensions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-16">
            {floorPlanDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rich-card p-4 md:p-6 text-center hover-lift"
              >
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <detail.icon className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                </div>
                <div className="text-lg md:text-2xl font-bold luxury-text mb-1">
                  {detail.value}
                </div>
                <div className="text-stone-600 text-xs md:text-sm font-medium">{detail.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Floor Plan */}
      <section className="py-12 md:py-16 lg:py-20 premium-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Interactive Floor Plan
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-4">
              Click to explore the detailed layout with room dimensions and specifications.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rich-card shadow-luxury overflow-hidden max-w-6xl mx-auto interactive-hover"
          >
            {/* Floor Plan Display */}
            <div className="aspect-[4/3] md:aspect-[16/10] bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center relative p-4 md:p-8">
              <div className="text-center w-full">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-2">Abu Hills Villa Floor Plan</h3>
                <p className="text-stone-600 mb-6 text-sm md:text-base">2640 SQ. FT | Luxury Villa | Built 2018</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button 
                    onClick={handleDownloadFloorPlan}
                    className="btn-primary text-sm md:text-base"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Plan</span>
                  </button>
                  <button 
                    onClick={handleViewFullSize}
                    className="btn-secondary text-sm md:text-base"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Full Size</span>
                  </button>
                </div>
              </div>
              
              {/* Room Layout Overlay */}
              <div className="absolute inset-4 md:inset-8">
                <div className="relative w-full h-full border-2 border-amber-600 rounded-lg bg-white/50">
                  {/* Drawing Room */}
                  <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium shadow-md">
                    Drawing Room<br />16' x 12'
                  </div>
                  
                  {/* Bedroom */}
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium shadow-md">
                    Bedroom<br />14' x 12'
                  </div>
                  
                  {/* Kitchen */}
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium shadow-md">
                    Kitchen<br />10' x 8'
                  </div>
                  
                  {/* Bathroom */}
                  <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium shadow-md">
                    Bathroom<br />8' x 6'
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Room Specifications */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Room Specifications
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-4">
              Detailed specifications and premium features for each room in your villa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="rich-card p-6 hover-lift"
              >
                <h3 className="text-lg md:text-xl font-bold luxury-text mb-2">
                  {spec.room}
                </h3>
                <p className="text-xl md:text-2xl font-bold text-stone-800 mb-4">
                  {spec.dimensions}
                </p>
                <ul className="space-y-2">
                  {spec.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex-shrink-0"></div>
                      <span className="text-stone-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 md:py-16 lg:py-20 premium-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-6">
              Get Detailed Floor Plans
            </h2>
            <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl mx-auto px-4">
              Download the complete floor plan with detailed dimensions, specifications, 
              and technical drawings for your reference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadFloorPlan}
                className="btn-primary text-lg"
              >
                <Download className="h-5 w-5" />
                <span>Download Floor Plan</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="btn-secondary text-lg"
              >
                <Home className="h-5 w-5" />
                <span>Schedule Site Visit</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Size Floor Plan Modal */}
      {isFloorPlanOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsFloorPlanOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-stone-200">
              <h3 className="text-xl font-bold text-stone-800">Abu Hills Villa Floor Plan</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleZoomOut}
                  className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
                  disabled={zoomLevel <= 0.5}
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <span className="text-sm text-stone-600 min-w-[60px] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
                  disabled={zoomLevel >= 3}
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsFloorPlanOpen(false)}
                  className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Floor Plan Content */}
            <div className="overflow-auto max-h-[calc(90vh-80px)]">
              <div 
                className="p-8 bg-gradient-to-br from-stone-50 to-stone-100 min-h-[500px] flex items-center justify-center"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
              >
                <div className="relative w-full max-w-4xl">
                  <div className="aspect-[4/3] border-4 border-amber-600 rounded-lg bg-white/80 relative">
                    {/* Detailed Room Layout */}
                    <div className="absolute inset-4">
                      {/* Drawing Room */}
                      <div className="absolute top-0 left-0 w-2/5 h-2/5 border-2 border-amber-500 bg-amber-50 rounded flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-bold text-amber-800">Drawing Room</div>
                          <div className="text-sm text-amber-600">16' x 12'</div>
                        </div>
                      </div>
                      
                      {/* Bedroom */}
                      <div className="absolute top-0 right-0 w-2/5 h-2/5 border-2 border-amber-500 bg-orange-50 rounded flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-bold text-orange-800">Bedroom</div>
                          <div className="text-sm text-orange-600">14' x 12'</div>
                        </div>
                      </div>
                      
                      {/* Kitchen */}
                      <div className="absolute bottom-0 left-0 w-1/3 h-2/5 border-2 border-amber-500 bg-yellow-50 rounded flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-bold text-yellow-800">Kitchen</div>
                          <div className="text-sm text-yellow-600">10' x 8'</div>
                        </div>
                      </div>
                      
                      {/* Bathroom */}
                      <div className="absolute bottom-0 right-0 w-1/4 h-2/5 border-2 border-amber-500 bg-red-50 rounded flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-bold text-red-800">Bathroom</div>
                          <div className="text-sm text-red-600">8' x 6'</div>
                        </div>
                      </div>
                      
                      {/* Hallway */}
                      <div className="absolute top-1/2 left-1/3 w-1/3 h-1/4 border border-stone-300 bg-stone-100 rounded flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm font-medium text-stone-600">Hallway</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dimensions */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-stone-600">
                      Total Area: 2640 SQ. FT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Make It Yours?
            </h2>
            <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-2xl mx-auto px-4">
              Schedule a visit to see the actual villa layout and experience the 
              thoughtfully designed spaces in person.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="btn-secondary bg-white text-amber-600 hover:bg-stone-100 text-lg border-white"
            >
              Schedule Your Visit
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default FloorPlans;