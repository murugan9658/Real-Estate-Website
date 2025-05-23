import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sponsors = [
  "/images/spon1.png",
  "/images/spon2.png",
  "/images/spon3.png",
  "/images/spon4.png",
  "/images/spon5.png",
];

function SponsorSlider() {
  return (
    <div className="w-full overflow-hidden py-8">
      <motion.div
        className="flex"
        animate={{
          x: `-100%`, // Scroll to the left by one full loop
        }}
        transition={{
          duration: 30, 
          ease: "linear", 
          repeat: Infinity, 
        }}
      >
        {/* Duplicate the sponsor logos multiple times */}
        {sponsors.concat(sponsors, sponsors, sponsors, sponsors).map((logo, index) => (
          <div
            key={index}
            className="w-40 sm:w-48 md:w-72 h-auto mx-3 flex-shrink-0"
          >
            <img
              src={logo} // Directly using the path from sponsors array
              alt={`Sponsor ${index}`}
              className="w-full h-auto transition-transform hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default SponsorSlider;
