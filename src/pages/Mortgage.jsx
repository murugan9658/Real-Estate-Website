import MortgageCalculator from "../components/MortgageCalculator"
import { Element,  } from "react-scroll"
import MortgageBenefits from "../components/MortgageBenefits"
import MortgageHero from "../components/MortgageHero"

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll"; 

const Mortgage = () => {

    const location = useLocation();

  useEffect(() => {
    const section = location.state?.scrollTo;

    if (section) {
      // Wait for DOM to render before scrolling
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800, 
          smooth: "easeInOutQuart", // animation easing
          offset: -80 // navbar height
        });
      }, 100); // delay 100ms 
    }
  }, [location]);
  
  return (
    <div >
       <Element name ="mortgagehero">
        <MortgageHero/>
       </Element>
      
       <Element name="mortgagebenefits">
        <MortgageBenefits/>
       </Element>

       <Element name="calculator">
         <MortgageCalculator />
       </Element>
    </div>
    
  )
}

export default Mortgage