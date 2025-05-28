
import { FaFacebook, FaInstagram ,FaTwitter} from "react-icons/fa";
import {motion} from "framer-motion";




const Contact = () => {


  return (
    <div className='w-full md:h-screen space-y-3 py-6 items-center justify-center bg-green-100 md:flex gap-5 text-black/60'>
      {/*contact content */}
        <div className='flex-1  px-10 space-y-5 '>
          <div className='space-y-6  '>
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ amount: 0.9, once: true }} 
            className='text-3xl font-playfair font-semibold capitalize'>
              let's <span className='underline text-orange-500'>contact</span> with us
            </motion.h1>
            <motion.p
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ amount: 0.6, once: true }}
            className='text-lg  '>
               <span className='text-black text-lg'>Retro Real Estate</span>   is the best sit amet, consectetur adipiscing elitgula nunc a diam nunc laoreet penatibus mi odio. Dictum suspendisse semper curabitur libero, ultrices. Velit cursus ultricies lectus quam
            </motion.p>
          </div>

          <div >
            <motion.form             
              className='flex flex-col w-full space-y-6'>
              <motion.input
               type="text"
               name="name" 
               placeholder='name'
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ amount: 0.9, once: true }} 
               className='p-3.5 rounded-lg border-2 bg-gray-100 placeholder:text-lg placeholder:text-gray-600 placeholder:italic  focus:outline-none focus:border-blue-400' />

              <motion.input
               type="email" 
               name="email"
               placeholder='email'
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
               viewport={{ amount: 0.9, once: true }} 
               className='p-3.5 rounded-lg border-2 bg-gray-100 placeholder:text-lg placeholder:text-gray-600 placeholder:italic  focus:outline-none focus:border-blue-400' />

              <motion.textarea 
              name="message"
              placeholder='message' 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ amount: 0.5, once: true }} 
              className='p-3.5 rounded-lg border-2 h-30 bg-gray-100 placeholder:text-lg  placeholder:text-gray-600 placeholder:italic  focus:outline-none focus:border-blue-400' >
              </motion.textarea >
              <motion.button 
              type="submit"
               initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ amount: 0.9, once: true }} 
              className='py-1.5 px-3 w-40 hover:bg-blue-400 text-lg font-playfair transition duration-300 cursor-pointer hover:text-white hover:font-semibold border-2 rounded-lg '
              >submit</motion.button >
            </motion.form>
          </div>
        </div>

        {/*contact img */}

        <div className='flex-1 space-y-6 px-10'>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.2, once: true }} 
            className='overflow-hidden rounded-lg'>
            <img 
             src="/images/contactpic.jpg"
             alt="contactpic"
             className='rounded-lg hover:scale-105 object-cover transition-transform duration-500'
             />
          </motion.div>
          <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ amount: 0.2, once: true }} 
             className='flex flex-col space-y-3'>
            <h1 className='text-3xl font-playfair text-black font-semibold'>
            Contact info
            </h1>
            <p>
            256D, Southern City, Veltex Tower, Main Town
            main road, New York, Usa
            </p>
            <h2 className='text-blue-600  text-2xl hover:scale-102 transition duration-300'>
            Call us: 01234 567 890
            </h2>
            <p>
              contact@example.com          
            </p>
                <div className='flex gap-3 text-2xl'>
                  <FaFacebook className='hover:scale-105 transition duration-300' />
                  <FaInstagram  className='hover:scale-105 transition duration-300' />
                  <FaTwitter  className='hover:scale-105 transition duration-300' />
                </div>
          </motion.div>

        </div>
    </div>
  )
}

export default Contact