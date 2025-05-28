
import {motion} from 'framer-motion'

const About = () => {


  return (
    <div className=' w-full items-center px-7 py-4  bg-fuchsia-200 '>
        <h1 className='flex items-center justify-center py-4 text-center'>
            <a className='text-gray-600 py-0.5 px-3 rounded-md hover:scale-105 transition duration-500  border-2 border-white hover:font-semibold bg-transparent font-playfair text-lg' >About Us</a></h1>

        <div className='md:flex gap-4 py-3 items-center justify-center '>
                 {/*about image*/}

            <div className=' overflow-hidden w-full rounded-lg md:w-1/2'>
                <motion.img src="images/about.jpg"
                initial={{opacity:0, scale:0.9  }}
                whileInView ={{opacity:1, scale:1 }}               
                transition={{duration:0.8, ease:"easeInOut" }}
                viewport={{once:false, amount:0.2 }}
                className=' w-full h-auto object-cover hover:scale-105 transition duration-500 ease-in-out rounded-lg shadow-lg ' />
            </div>

                {/* about content */}

             <motion.div
              initial={{opacity:0, scale:0.9  }}
              whileInView ={{opacity:1, scale:1 }}               
              transition={{duration:0.8, ease:"easeInOut" }}
              viewport={{once:false, amount:0.2 }}
             className='p-5 flex:2 space-y-6 w-full md:w-1/2 '>
                <p>
                    At Retro Real Estate, we believe that homes should tell a story. Our mission is to connect people with properties that reflect timeless beauty, architectural character, and the warmth of the past. From quaint cottages to stately vintage estates, we handpick every listing with care and appreciation for classic design. 
                </p> 
                <p>
                    Whether you're a history lover, a design enthusiast, or simply searching for a home with heart, we're here to help you find a space that feels like it’s always been yours. 
                </p>
                    <ul className='space-y-3'>
                        <li> "Founded in 2018 with a passion for restoration"</li>

                        <li> "Over 500 happy homeowners" </li> 

                        <li> "Sustainably focused and heritage-driven" </li>
                    </ul>
             </motion.div>

        </div>
    </div>

  )
}

export default About