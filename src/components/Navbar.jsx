import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";

const dropDownVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ useLocation instead of custom tracking

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? "" : name));
  };

  const closeDropdown = () => setOpenDropdown("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isScrolled ? "bg-black shadow-md text-white" : "bg-transparent text-white";

  const navigateToSection = (page, section) => {
    closeDropdown();
    setMobileMenuOpen(false);
    navigate(page, { state: { scrollTo: section } });
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-around transition-all duration-300 ${navBg}`}>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="w-10" src="logo.svg" alt="logo" />
        <h1 className="text-2xl font-bold text-white">Retro Real Estate</h1>
      </div>

      {/* Nav Items */}
      <div>
        <ul className="hidden md:flex items-center gap-2 md:gap-6 md:text-lg text-md text-orange-500 md:font-bold">
          {/* Home Dropdown */}
          <li className="relative flex items-center justify-center gap-1 ">
            <button
              onClick={() => navigateToSection("/", "")}
              className={`${location.pathname === "/" ? "text-cyan-500 font-bold" : ""}`}
            >
              Home
            </button>
            <button onClick={() => toggleDropdown("home")}>
              <IoMdArrowDropdown className={`w-6 h-6 transition-transform ${openDropdown === "home" ? "rotate-270" : ""}`} />
            </button>

            <AnimatePresence>
              {openDropdown === "home" && (
                <motion.div
                  className="absolute top-full left-0 z-50 bg-white/90 text-black rounded shadow-md mt-2 w-40"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropDownVariant}
                  transition={{ duration: 0.5 }}
                >
                  {["hero", "about", "review", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => navigateToSection("/", section)}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer capitalize text-left w-full"
                    >
                      {section}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Mortgage Dropdown */}
          <li className="relative flex items-center justify-center gap-1 ">
            <button
              onClick={() => navigateToSection("/mortgage", "")}
              className={`${location.pathname === "/mortgage" ? "text-cyan-500 font-bold" : ""}`}
            >
              Mortgage
            </button>
            <button onClick={() => toggleDropdown("mortgage")}>
              <IoMdArrowDropdown className={`w-6 h-6 transition-transform ${openDropdown === "mortgage" ? "rotate-270" : ""}`} />
            </button>

            <AnimatePresence>
              {openDropdown === "mortgage" && (
                <motion.div
                  className="absolute top-full left-0 z-50 bg-white/80 text-black rounded shadow-md mt-2 w-50"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropDownVariant}
                  transition={{ duration: 0.4 }}
                >
                  {["mortgagebenefits", "calculator"].map((section) => (
                    <button
                      key={section}
                      onClick={() => navigateToSection("/mortgage", section)}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer capitalize text-left w-full"
                    >
                      {section}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Property */}
          <li>
            <button
              onClick={() => navigateToSection("/property", "")}
              className={`${location.pathname === "/property" ? "text-cyan-500 font-bold" : ""}`}
            >
              Property
            </button>
          </li>

          {/* Map */}
          <li>
            <button
              onClick={() => navigateToSection("/map", "")}
              className={`${location.pathname === "/map" ? "text-cyan-500 font-bold" : ""}`}
            >
              Map
            </button>
          </li>
        </ul>
      </div>

      {/* Login */}
      <div>
        <button onClick={() => navigateToSection("/login", "")}>
          <span className="text-white hidden md:flex font-bold border-2 px-2 rounded-lg cursor-pointer text-lg hover:text-green-500 hover:underline transition duration-300">
            Sign In
          </span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen((prev) => !prev)}>
          {mobileMenuOpen ? (
            <IoMdClose className="text-white w-7 h-7 cursor-pointer hover:text-red-600 transition duration-300" />
          ) : (
            <IoMdMenu className="text-white w-7 h-7 cursor-pointer hover:text-blue-500 transition duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-black/80 text-white flex flex-col items-center text-center px-6 py-4 gap-2 md:hidden z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={() => navigateToSection("/", "")} 
            className="py-2 w-full transition duration-300 hover:underline">
              Home
            </button>
            <button onClick={() => navigateToSection("/mortgage", "")} 
            className="py-2 w-full transition duration-300 hover:underline">
              Mortgage
            </button>
            <button onClick={() => navigateToSection("/property", "")} 
            className="py-2 w-full transition duration-300 hover:underline">
              Property
            </button>
            <button onClick={() => navigateToSection("/map", "")} 
            className="py-2 w-full transition duration-300 hover:underline">
              Map
            </button>
            <button onClick={() => navigateToSection("/login", "")}
             className="py-2 w-full transition duration-300 hover:underline">
              Sign In
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
