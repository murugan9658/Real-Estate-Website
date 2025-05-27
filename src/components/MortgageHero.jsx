import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MortgageHero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/images/mortgage2.jpg"
          alt="mortgagepic"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-6 md:px-36 h-full space-y-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-semibold text-white"
          variants={itemVariants}
        >
          Mortgage Calculator
        </motion.h1>

        <motion.p
          className="md:text-2xl text-lg italic text-white"
          variants={itemVariants}
        >
          A mortgage calculator is an invaluable tool for prospective
          homebuyers and homeowners. It helps estimate monthly payments for a
          home loan by factoring in critical variables like loan amount,
          interest rates, loan terms, and additional costs such as property
          taxes and insurance.
        </motion.p>

        <motion.div
          className="flex gap-3 flex-wrap justify-center"
          variants={itemVariants}
        >
          <ScrollLink
            to="calculator"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <button className="py-1 px-4 rounded-lg border-2 capitalize md:text-2xl text-lg text-white border-white hover:bg-white hover:text-black transition duration-300">
              calculate
            </button>
          </ScrollLink>
          <ScrollLink
            to="mortgagebenefits"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <button className="py-1 px-4 rounded-lg border-2 capitalize md:text-2xl text-lg text-white border-white hover:bg-white hover:text-black transition duration-300">
              learn...
            </button>
          </ScrollLink>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MortgageHero;
