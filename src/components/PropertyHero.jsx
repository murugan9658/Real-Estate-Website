import { motion } from "framer-motion";
import DotLoader from "../components/DotLoader"; // Adjust the import path as necessary
import{Link as ScrollLink} from 'react-scroll'

const PropertyHero = () => {


  const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 50 }, // start from below
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  }),
};

  return (
  
        <div className='w-full h-screen relative items-center justify-center'>
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className='absolute w-full h-full  z-20'>

                 <img src="/images/propertylandingpic.jpg"
                  alt="landingpicture"
                  className=' absolute inset-0 w-full h-full object-cover ' />

            </motion.div>
             <div className="absolute inset-0 bg-black/70 z-20"></div>

            <div className='absolute inset-0 z-30 flex flex-col space-y-4 justify-center items-center text-white text-center px-6'>
               
                    
                <motion.h1
                variants ={scaleInVariant}
                initial="hidden"
                 whileInView="visible" 
                custom={1}
                viewport={{ once: true }}               
                className='text-3xl md:text-4xl font-playfair  text-gray-200 md:text-start font-bold '> 
                 Get Your 
                    <span className='text-green-600 font-bold block text-4xl md:text-6xl '>
                        Dream House
                    </span>
                </motion.h1>
                
                <motion.p 
                 variants ={scaleInVariant}
                initial="hidden"
                 whileInView="visible" 
                custom={2}
                viewport={{ once: true }} 
                className="text-2xl md:text-3xl ">Find the perfect property for you and your family</motion.p>

                <motion.p 
                 variants ={scaleInVariant}
                initial="hidden"
                 whileInView="visible" 
                custom={3}
                viewport={{ once: true }} 
                className="text-sm md:text-md font-dancing">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi in cum voluptatum est <br />temporibus ipsum ipsa porro expedita laborum.</motion.p>
                <ScrollLink to="propertysection" smooth={true}  duration={500} offset={-70} >
                    <motion.button
                    variants ={scaleInVariant}
                    initial="hidden"
                    whileInView="visible" 
                    custom={3}
                    viewport={{ once: true }} 
                    className="text-lg py-1 px-2 bg-blue-500 rounded-lg font-playfair cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300 text-gray-100">Get Start</motion.button >
                </ScrollLink>
            </div>

            <div className="absolute bottom-10 z-40 flex justify-center mt-2 w-full">
               <DotLoader />
            </div>
        </div>
    
  )
}

export default PropertyHero