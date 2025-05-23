import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'; // ✅ Import the cancel icon

const Login = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/loginpic.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                <motion.div
                    className="relative border-2 border-white shadow-lg px-10 rounded-lg pt-6 pb-8 w-full  bg-black/30 backdrop-blur-md max-w-md"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* ✅ React Icon Cancel Button */}
                    <button
                        onClick={() => navigate('/')}
                        className="absolute top-3 right-3 text-white hover:text-red-500 text-2xl"
                        aria-label="Close"
                    >
                        <AiOutlineClose />
                    </button>

                    <motion.div className="mb-4" variants={itemVariants}>
                        <label className="block text-white text-lg font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent placeholder-white"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </motion.div>

                    <motion.div className="mb-6" variants={itemVariants}>
                        <label className="block text-white text-lg font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent placeholder-white"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </motion.div>

                    <motion.div className="flex items-center justify-center gap-4" variants={itemVariants}>
                        <button
                            className="border-2 text-white font-bold py-1 hover:bg-blue-400 transition duration-300 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In
                        </button>
                        <RouterLink
                            to="/forgot-password"
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-white transition duration-300"
                        >
                            Forgot Password?
                        </RouterLink>
                    </motion.div>

                    <motion.div className="text-center mt-4" variants={itemVariants}>
                        <RouterLink
                            to="/signup"
                            className="inline-block align-baseline font-bold text-sm text-blue-500 transition duration-300"
                        >
                            Don't have an account? <span className='hover:text-white hover:underline transition duration-300'>Sign Up</span> 
                        </RouterLink>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
