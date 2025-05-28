import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DotLoader from "../components/DotLoader";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const images = [
  "/images/laptop1.jpg",
  "/images/laptop2.jpg",
  "/images/laptop3.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const location = useLocation();

  // Scroll to section if provided in route state
  useEffect(() => {
    const section = location.state?.scrollTo;
    if (section) {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });

      // Clear only scrollTo from history state
      const newState = { ...(location.state || {}) };
      delete newState.scrollTo;
      window.history.replaceState(newState, document.title);
    }
  }, [location.state]);

  // Image slider auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 30 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="relative w-full h-screen shadow-lg overflow-hidden">
      {/* Background image slider */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Hero background image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex items-center justify-center h-full text-center"
      >
        <div className="space-y-6 px-5">
          <motion.h1
            variants={item}
            custom={0}
            className="md:text-6xl text-4xl font-semibold text-white hover:scale-105 transition duration-500"
          >
            Retro Real Estate Management Pvt Ltd
          </motion.h1>

          <motion.p
            variants={item}
            custom={1}
            className="md:text-3xl text-2xl font-semibold text-white italic transition duration-500 hover:scale-105"
          >
            Discover luxury properties in your favorite locations.
          </motion.p>

          <RouterLink to="/property">
            <motion.button
              variants={item}
              custom={2}
              className="py-1 px-4 md:text-2xl text-lg text-white border border-white hover:border-black/80 hover:font-semibold transition cursor-pointer duration-300 hover:scale-105 hover:bg-white hover:text-black rounded-lg"
            >
              Explore
            </motion.button>
          </RouterLink>
        </div>
      </motion.div>

      {/* Dot loader at bottom */}
      <div className="absolute bottom-10 z-40 flex mt-2 justify-center w-full">
        <DotLoader />
      </div>
    </section>
  );
};

export default HeroSection;
