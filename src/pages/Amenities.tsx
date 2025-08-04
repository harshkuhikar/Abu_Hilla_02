import React from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Shield,
  Waves,
  Trees,
  Building,
  Loader as Road,
  Car,
  Zap,
  Wifi,
  MapPin,
} from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Droplets,
      title: "24/7 Water Supply",
      description: "Uninterrupted water supply throughout the day",
      category: "Essential",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security for your peace of mind",
      category: "Essential",
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Refreshing swimming pool for relaxation and recreation",
      category: "Recreation",
    },
    {
      icon: Trees,
      title: "Landscape Garden",
      description: "Beautifully maintained gardens and green spaces",
      category: "Recreation",
    },
    {
      icon: Building,
      title: "Club House",
      description: "Community club house for social gatherings",
      category: "Recreation",
    },
    {
      icon: Road,
      title: "Internal R.C.C. Road",
      description: "Well-constructed internal roads for easy access",
      category: "Infrastructure",
    },
    {
      icon: Car,
      title: "Parking Space",
      description: "Dedicated parking spaces for residents",
      category: "Infrastructure",
    },
    {
      icon: Zap,
      title: "Power Backup",
      description: "Reliable power backup for uninterrupted electricity",
      category: "Essential",
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Fast and reliable internet connectivity",
      category: "Modern",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Strategically located for easy accessibility",
      category: "Location",
    },
  ];

  const categories = [
    "All",
    "Essential",
    "Recreation",
    "Infrastructure",
    "Modern",
    "Location",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredAmenities =
    selectedCategory === "All"
      ? amenities
      : amenities.filter((amenity) => amenity.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      Essential: "from-red-500 to-red-600",
      Recreation: "from-blue-500 to-blue-600",
      Infrastructure: "from-green-500 to-green-600",
      Modern: "from-purple-500 to-purple-600",
      Location: "from-amber-500 to-amber-600",
    };
    return (
      colors[category as keyof typeof colors] || "from-gray-500 to-gray-600"
    );
  };

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
            Premium Amenities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-amber-100 max-w-3xl mx-auto"
          >
            Experience luxury living with our comprehensive range of world-class
            amenities
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
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
              World-Class Facilities
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Every amenity is designed to enhance your living experience and
              provide ultimate comfort
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAmenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${getCategoryColor(
                    amenity.category
                  )}`}
                ></div>
                <div className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getCategoryColor(
                      amenity.category
                    )} text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <amenity.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-stone-600 mb-3">{amenity.description}</p>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(
                      amenity.category
                    )} text-white`}
                  >
                    {amenity.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-stone-800 to-stone-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Luxury Living?
            </h2>
            <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
              Schedule a visit to Abu Hills and discover how these premium
              amenities can enhance your weekend lifestyle
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Schedule Your Visit Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
