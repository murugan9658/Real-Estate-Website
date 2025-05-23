import PropertyHero from "../components/PropertyHero";
import PropertySection from "../components/PropertySection";
import { Element } from "react-scroll";

const Property = () => {


  return (
    <div>
         <Element name="propertyhero" >
            <PropertyHero />
          </Element>

          <Element name="propertysection" >
             <PropertySection />
          </Element>

          
    </div>
  );
}

export default Property