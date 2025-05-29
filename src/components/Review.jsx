import { FaStar, FaUser,FaPenFancy,FaMapMarkerAlt } from "react-icons/fa";
import {motion} from "framer-motion";

const Review = () => {
  return (
    <div className="w-full md:h-screen items-center  space-y-10 bg-lime-100">
            {/* tittle */}
          <div className="flex md:flex-row flex-col  justify-between pt-10 items-center w-full md:px-16 px-10">      
              <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ amount: 0.5, once: true }}
              className="flex flex-col space-y-3 mb-3.5">
                <h1 className="text-3xl font-semibold font-playfair capitalize">Take their word for it</h1>
                <ul className="flex text-lg gap-2">
                  <li className="text-yellow-400"> <FaStar /> </li>
                  <li className="text-yellow-400"> <FaStar /> </li>
                  <li className="text-yellow-400"> <FaStar /> </li>
                  <li className="text-yellow-400"> <FaStar /> </li>
                  <li className="text-yellow-400"> <FaStar /> </li>
                </ul>
                <p className="text-2xl">Have a look at the success stories shared by our clients!</p>
              </motion.div>
          
              {/* take review */}
              <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              viewport={{ amount: 0.5, once: true }}
              >
                <button className="py-2 px-3 flex font-playfair items-center gap-2 bg-blue-400 w-35 font-semibold text-white hover:bg-blue-600 rounded-lg transition duration-300 ">
                  Add Words <FaPenFancy className="text-sm"/>
                </button>
              </motion.div>
            
          </div>

          {/*review container */}
            
              <div className="flex md:flex-row flex-col items-center space-y-5 justify-around  py-10 md:py-16">
                  <motion.div 
                  initial={{ x: -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, type: "tween", duration: 1.5,ease: "easeInOut", }}
                  viewport={{ amount: 0.2, once: true }}
                  className="flex flex-col relative w-[300px]">
                    <div className="md:w-50 w-40 md:h-35 h-30 p-3.5 rounded-tr-full absolute  top-0 left-5 shadow-black shadow-2xl space-y-2 z-10 bg-stone-300 hover:-translate-y-2  transition-transform duration-300">
                        <h1 className="text-lg font-semibold flex items-center gap-1 text-white">
                               <FaUser /> 
                              <span className="text-2xl font-playfair">Hari</span>
                        </h1>
                        <h2 className=" text-white font-bold font-playfair flex items-center gap-1"> <FaMapMarkerAlt /> <span>America</span></h2>
                          <ul className="flex gap-2">
                            <li className="text-yellow-500"> <FaStar /> </li>
                            <li className="text-yellow-600"> <FaStar /> </li>
                            <li className="text-yellow-600"> <FaStar /> </li>
                            <li className="text-yellow-700"> <FaStar /> </li>
                            <li className="text-yellow-800 "> <FaStar /> </li>
                          </ul>
                      </div>

                      <div className=" bg-gray-300 md:space-y-3 space-y-2 shadow-black/50 shadow-lg pt-15 px-8 rounded-lg mt-20 z-0 ">
                        <p className="text-lg text-black/70  md:leading-10 leading-7"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia dolorum culpa libero facere itaque quia quasi fugit vero deleniti?</p>
                        <p className="font-bold text-green-800">04/03/2019</p>
                        <h2 className="text-blue-500 font-semibold underline cursor-pointer hover:text-white/80 transition duration-300 pb-3">Read more...</h2>
                     </div>
                  </motion.div>

                   <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: "tween", duration: 0.9, ease: "easeInOut", }}
                    viewport={{ amount: 0.2, once: true }}
                   className="flex flex-col relative w-[300px]">
                    <div className="md:w-50 w-40 md:h-35 h-30  p-3.5 rounded-tr-full absolute top-0 left-5 shadow-black shadow-2xl space-y-2 z-10 bg-stone-300 hover:-translate-y-2  transition-transform duration-300">
                        <h1 className="text-lg font-semibold flex items-center gap-1 text-white">
                               <FaUser /> 
                              <span className="text-2xl font-playfair">Arun</span>
                        </h1>
                        <h2 className=" text-white font-bold font-playfair flex items-center gap-1"><FaMapMarkerAlt /> <span>UK</span></h2>
                          <ul className="flex gap-2">
                            <li className="text-yellow-500"> <FaStar /> </li>
                            <li className="text-yellow-600"> <FaStar /> </li>
                            <li className="text-yellow-600"> <FaStar /> </li>
                            <li className="text-yellow-700"> <FaStar /> </li>
                            <li className="text-yellow-800 "> <FaStar /> </li>
                          </ul>
                      </div>

                      <div className=" bg-gray-300 md:space-y-3 space-y-2 shadow-black/50 shadow-lg pt-15 px-8 rounded-lg mt-20 z-0 ">
                        <p className="text-lg text-black/70 md:leading-10 leading-7"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia dolorum culpa libero facere itaque quia quasi fugit vero deleniti?</p>
                        <p className="font-bold text-green-800">02/11/2019</p>
                        <h2 className="text-blue-500 font-semibold underline cursor-pointer hover:text-white/80 transition duration-300 pb-3">Read more...</h2>
                     </div>
                  </motion.div>

                   <motion.div 
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "tween", duration: 1.5,ease: "easeInOut", }}
                    viewport={{ amount: 0.2, once: true }}
                   className="flex flex-col relative w-[300px]">
                    <div className="md:w-50 w-40 md:h-35 h-30  p-3.5 rounded-tr-full absolute top-0 left-5 shadow-black shadow-2xl space-y-2 z-10 bg-stone-300 hover:-translate-y-2  transition-transform duration-300">
                        <h1 className="text-lg font-semibold flex items-center gap-1 text-white">
                               <FaUser /> 
                              <span className="text-2xl font-playfair">Kamal</span>
                        </h1>
                        <h2 className=" text-white font-bold flex font-playfair items-center gap-1"> <FaMapMarkerAlt /> <span>Singapore</span></h2>
                          <ul className="flex gap-2">
                            <li className="text-yellow-500"> <FaStar /> </li>
                            <li className="text-yellow-600"> <FaStar /> </li>
                            <li className="text-yellow-600"> <FaStar /> </li>
                            <li className="text-yellow-700"> <FaStar /> </li>
                            <li className="text-yellow-800 "> <FaStar /> </li>
                          </ul>
                      </div>

                      <div className=" bg-gray-300 md:space-y-3 space-y-2 shadow-black/50 shadow-lg pt-15 px-8 rounded-lg mt-20 z-0 ">
                        <p className="text-lg text-black/70 md:leading-10 leading-7"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia dolorum culpa libero facere itaque quia quasi fugit vero deleniti?</p>
                        <p className="font-bold text-green-800">05/09/2018</p>
                        <h2 className="text-blue-500 font-semibold underline cursor-pointer hover:text-white/80 transition duration-300 pb-3">Read more...</h2>
                     </div>
                  </motion.div >
                  
              </div>

         
    </div>
  )
}

export default Review