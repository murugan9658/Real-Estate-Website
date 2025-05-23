import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const DotLoader = () => {
  return (
    <div className="flex flex-col space-y-4">
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          animate={{ y: ["0%", "-100%", "0%"] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0,
          }}
          className="flex items-center justify-center"
        >
          {i === 3 ? (
            <IoIosArrowDown className="text-white w-6 h-6" />
          ) : (
            <span className="w-3 h-3 bg-white rounded-full shadow shadow-white" />
          )}
        </motion.span>
      ))}
    </div>
  );
};

export default DotLoader;
