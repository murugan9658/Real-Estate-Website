import React from 'react'
import {Link as ScrollLink} from "react-scroll"

const MortgageHero = () => {
  return (
    <div>
          <div className='w-full h-screen realtive overflow-hidden items-center justify-center'> 
            <div className='absolute inset-0 z-0 '>
                <img 
                src="/images/mortgage2.jpg" 
                alt="mortgagepic"
                className='w-full h-full ' />
            </div>
            <div className='relative z-10 flex flex-col items-center justify-center px-14 md:px-36 h-full space-y-10 text-center'>
                    <h1 className='text-4xl font-semibold text-center text-white'>
                        Mortgage Calculator
                    </h1>
                    <p className='md:text-2xl text-lg text-center italic text-white'>
                        A mortgage calculator is an invaluable tool for prospective homebuyers and homeowners. It helps estimate monthly payments for a home loan by factoring in critical variables like loan amount, interest rates, loan terms, and additional costs such as property taxes and insurance.
                    </p>

                    <div className="flex  gap-2 items-center">
                        <div>
                          <ScrollLink to="calculator" smooth={true} duration={500} offset={-70}>
                            <button className="py-1 px-3 rounded-lg border-2 capitalize md:text-2xl text-lg text-white border-white hover:bg-white hover:text-black cursor-pointer transition duration-300"> calculate </button>
                            </ScrollLink>
                        </div>
                        <div>
                            <ScrollLink to="mortgagebenefits" smooth={true} duration={500} offset={-70}>
                            <button className="py-1 px-3 rounded-lg border-2 capitalize md:text-2xl text-lg text-white border-white hover:bg-white hover:text-black cursor-pointer transition duration-300"> learn...</button>
                            </ScrollLink>
                        </div>
                    </div> 
            </div>
       </div>
    </div>
  )
}

export default MortgageHero