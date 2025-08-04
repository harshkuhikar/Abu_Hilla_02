import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Home as HomeIcon,
  Calendar,
  Phone,
  Bed,
  Bath,
  Square,
  Shield,
  Droplets,
  Wifi,
  Car,
  Trees,
  Dumbbell,
} from "lucide-react";
import img1 from "../Abu_Photos/Abu_01.jpg";
import img2 from "../Abu_Photos/Abu_02.jpg";
import img3 from "../Abu_Photos/Abu_03.jpg";
import img4 from "../Abu_Photos/Abu_04.jpg";

const Home = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const scrollY = useMotionValue(0);
  const springScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const propertyDetails = [
    { icon: HomeIcon, label: "BUILT YEAR", value: "2018" },
    { icon: Square, label: "AREA", value: "2640 SQ. FT" },
    { icon: Bed, label: "BEDROOMS", value: "Spacious" },
    { icon: Bath, label: "BATHROOMS", value: "Modern" },
    { icon: HomeIcon, label: "DRAWING ROOMS", value: "Elegant" },
    { icon: HomeIcon, label: "KITCHENS", value: "Premium" },
  ];

  const amenities = [
    {
      icon: Droplets,
      title: "24/7 Water Supply",
      description: "Continuous water supply",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round the clock security",
    },
    {
      icon: Trees,
      title: "Landscape Garden",
      description: "Soul satisfying gardens",
    },
    {
      icon: Dumbbell,
      title: "Swimming Pool",
      description: "Premium swimming facility",
    },
    { icon: Car, title: "Club House", description: "Well-designed club house" },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "All modern facilities",
    },
  ];

  const features = [
    {
      title: "EXCELLENT STRUCTURE",
      description:
        "Earthquake proof R.C.C. frame structure for the safety aspect.",
      image: img1,
    },
    {
      title: "IN GREEN AREA",
      description:
        "It's so cheerful and peaceful, your time at the Abu Hills is going to be so pleasant and worthy!",
      image: img2,
    },
    {
      title: "PREMIUM QUALITY",
      description:
        "Premium quality vitrified floor, designer tiles with concealed pipes and premium accessories.",
      image: img3,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 lg:pt-20"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <motion.div
          style={{ y: springScrollY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-amber-900/60 z-10" />
          <img
            src={img2}
            alt="Abu Hills luxury villa"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Abu Hills
              <span className="block text-amber-400 text-3xl md:text-4xl lg:text-5xl mt-2">
                Luxury Weekend Villas
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-stone-200 mb-8 max-w-3xl leading-relaxed"
            >
              Perfectly situated at a priceless location where the sprawling
              life of the city gives way to the natural landscape, Abu Hills
              exemplifies the perfect blend of contemporary lifestyle and serene
              living that nature offers.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Visit</span>
                </motion.button>
              </Link>
              <a href="tel:+919327586040">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary border-white text-white hover:bg-white hover:text-stone-900 text-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Property Details
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover the specifications and features of your dream weekend
              villa
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {propertyDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-stone-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <detail.icon className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-amber-600 mb-1">
                  {detail.value}
                </div>
                <div className="text-stone-600 text-sm font-medium">
                  {detail.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-6">
                About Abu Hills
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Perfectly situated at a priceless location where the sprawling
                life of the city gives way to the natural landscape of the
                city's outskirt, Abu Hills exemplifies the perfect blend of the
                contemporary lifestyle of the affluent class and the serene
                living that nature offers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">
                    Earthquake proof R.C.C. frame structure
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">
                    Double coated exterior finish
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">
                    Premium quality floors and finishes
                  </span>
                </div>
              </div>
              <Link to="/about" className="inline-block mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={img4}
                  alt="Abu Hills villa exterior"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Premium Amenities
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Never before facilities and amenities to a contemporary weekend
              home lifestyle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-stone-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <amenity.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-stone-600">{amenity.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/amenities">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg"
              >
                <span>View All Amenities</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Features of Abu Hills Weekend Homes
            </h2>
          </motion.div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-2xl font-bold text-stone-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience Luxury Living?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Schedule your visit today and discover the perfect blend of
              contemporary lifestyle and serene natural living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary bg-white text-amber-600 hover:bg-stone-100 text-lg"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Visit</span>
                </motion.button>
              </Link>
              <a href="tel:+919327586040">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary border-white text-white hover:bg-white hover:text-amber-600 text-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now: +91-93275-860-40</span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
