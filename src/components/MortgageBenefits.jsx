import React from 'react'
import { FcHome } from "react-icons/fc";
import { BsChatLeftDots } from "react-icons/bs";
import { GoDot } from "react-icons/go";
import {motion} from 'framer-motion';

const MortgageBenefits = () => {
  return (
    <div className='w-full md:h-screen py-8 space-y-14 bg-green-100 flex flex-col'>   
        {/* Benefits of Mortgage header */}
        <div className='flex px-3  flex-col text-center items-center space-y-3 justify-center'>
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            viewport={{ amount: 0.9, once: true }}
          className='md:text-4xl text-3xl font-playfair font-semibold text-stone-700 flex md:gap-2'><span className='hidden md:flex'><FcHome/></span>When to Use a Mortgage Calculator</motion.h1>
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            viewport={{ amount: 0.9, once: true }}
          className='md:text-2xl text-lg'>A mortgage calculator is helpful before or during the home-buying process:</motion.p>
        </div>
        {/* Benefits of Mortgage content */}
        <div className='w-full flex flex-col space-y-3 px-4 sm:px-8 md:px-14 lg:px-28 xl:px-44'>
           <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ amount: 0.5, once: true }} 
            className='flex flex-col space-y-4'>
              <h1 className='md:text-3xl text-2xl font-semibold font-playfair '>1. Before buying a house</h1>
              <ul className='pl-4 space-y-2 md:text-lg   text-stone-700'>
                <li className='flex gap-2 items-center'> <BsChatLeftDots className='hidden md:flex' /> Helps users understand affordability</li>
                <li className='flex gap-2 items-center'> <BsChatLeftDots  className='hidden md:flex'  />They can try different values for price, down payment, interest rate, and see what fits their budget</li>               
              </ul>
           </motion.div>

            <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ amount: 0.5, once: true }} 
            className='flex flex-col space-y-4'>
             <h1 className='md:text-3xl text-2xl font-semibold font-playfair'>2. Loan comparison</h1>
              <ul className='pl-4 space-y-2 text-lg text-stone-700'>
                <li className='flex gap-2 items-center'> <GoDot  className='hidden md:flex' /> Compare interest rates between banks</li>
                <li className='flex gap-2 items-center'> <GoDot  className='hidden md:flex' /> See how total interest changes if loan tenure is 15 vs 30 years</li>               
              </ul>
           </motion.div>

            <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ amount: 0.5, once: true }} 
            className='flex flex-col space-y-4'>
             <h1 className='md:text-3xl text-2xl font-semibold font-playfair'> 3. Planning EMIs</h1>
              <ul className='pl-4 space-y-2 text-lg text-stone-700'>
                 <li className='flex gap-2 items-center'> <BsChatLeftDots  className='hidden md:flex' />Estimate monthly EMI and total cost over the loan period</li>
                 <li className='flex gap-2 items-center'> <BsChatLeftDots  className='hidden md:flex' />Avoid surprises later (like extra tax, insurance)</li>               
              </ul>
           </motion.div>

            <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ amount: 0.5, once: true }}
            className='flex flex-col space-y-4'>
              <h1 className='md:text-3xl text-2xl font-semibold font-playfair '>4. Investors / Real Estate Portals</h1>
              <ul className='pl-4 space-y-2 text-lg text-stone-700'>
                <li className='flex gap-2 items-center'> <GoDot  className='hidden md:flex' />helps property investors calculate ROI and total cost</li>
               <li className='flex gap-2 items-center'> <GoDot  className='hidden md:flex' />Useful for agents to guide customers with quick demos</li>               
              </ul>
           </motion.div>           
        </div>
    </div>
  )
}

export default MortgageBenefits