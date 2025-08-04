import React from "react";
import { motion } from "framer-motion";
import { Home, MapPin, Calendar, Users, Shield, Wifi } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Home,
      title: "Spacious Living",
      description:
        "Thoughtfully designed spaces with modern architecture and premium finishes",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description:
        "Perfectly situated weekend villas in a serene natural environment",
    },
    {
      icon: Calendar,
      title: "Built in 2018",
      description:
        "Modern construction with contemporary amenities and luxury features",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description:
        "Designed for comfortable family living and entertaining guests",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description:
        "Round-the-clock security and water supply for peace of mind",
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "All modern conveniences for a comfortable weekend retreat",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 mt-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About Abu Hills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-amber-100 max-w-3xl mx-auto"
          >
            Luxury weekend villas where contemporary lifestyle meets serene
            natural living
          </motion.p>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
                Premium Weekend Villas
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Abu Hills offers meticulously designed weekend villas that
                combine luxury with comfort. Each villa is crafted to provide
                the perfect escape from city life while maintaining all modern
                conveniences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-amber-600">2640</h3>
                  <p className="text-stone-600">SQ. FT</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-amber-600">2018</h3>
                  <p className="text-stone-600">Built Year</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Abu Hills Villa"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Why Choose Abu Hills?
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Discover the perfect blend of luxury, comfort, and natural beauty
              in our weekend villas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-stone-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Villa Specifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Spacious Bedrooms",
                description: "Well-ventilated with modern fixtures",
              },
              {
                title: "Modern Bathrooms",
                description: "Premium fittings and contemporary design",
              },
              {
                title: "Elegant Drawing Room",
                description: "Perfect for family gatherings",
              },
              {
                title: "Premium Kitchen",
                description: "Fully equipped with modern appliances",
              },
            ].map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-stone-800 mb-2">
                  {spec.title}
                </h3>
                <p className="text-stone-600">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
