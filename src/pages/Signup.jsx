import { useState } from 'react';
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'; // ✅ Import the cancel icon

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      alert("Passwords do not match");
      return;
    }
    setPasswordMatch(true);
    alert("Signup Successful");
    console.log('Form submitted', { name, email, password });
  };
  const navigate = useNavigate();

  // 🔁 Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full h-screen flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* 🔽 Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/signpic.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

      {/* 🔽 Animated Signup Form */}
      <motion.div
        className="relative z-10 border-4 border-green-500 p-8 rounded-lg shadow-lg max-w-md w-full bg-black/40 backdrop-blur-md"
        variants={containerVariants}
      >
          <motion.h2
            className="text-2xl font-bold mb-6 text-center text-green-300"
            variants={itemVariants}
          >
            Sign Up
          </motion.h2>
                            {/* ✅ React Icon Cancel Button */}
                <button
                 onClick={() => navigate('/')}
                 className="absolute top-3 right-3 text-green-400 hover:text-red-500 text-2xl"
                 aria-label="Close"
                 >
                     <AiOutlineClose />
                 </button>

        <motion.form onSubmit={handleSubmit} className="space-y-4" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <label className="block text-white text-lg mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border-2 border-white text-white bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-white text-lg mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border-2 border-white text-white bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-white text-lg mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border-2 border-white text-white bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-white text-lg mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border-2 border-white text-white bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {!passwordMatch && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
            variants={itemVariants}
          >
            Sign Up
          </motion.button>
        </motion.form>

        <motion.p
          className="mt-4 text-center text-sm text-white"
          variants={itemVariants}
        >
          Already have an account?{' '}
          <a
            href="/login"
            className="text-green-300 text-lg font-semibold hover:text-white transition duration-300 hover:underline"
          >
            Log In
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
