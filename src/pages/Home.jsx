import { Element } from "react-scroll"
import Hero from "../components/Hero"
import About from "../components/About"
import ServiceSection from "../components/Service"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import SponsorSlider from "../components/Sponsor"
import ReviewSlider from "../components/Review"

const Home = () => {
  return (
    <div>
       
        <Element name="hero" > 
                   <Hero/> 
                </Element>
        <Element name="about" > 
                   <About/>
         </Element>
        <Element name="sponsor" > 
                   <SponsorSlider/>
         </Element>
        <Element name="service" > 
                   <ServiceSection/>
         </Element>
         <Element name="contact" > 
                   <Contact/>
         </Element>
         <Element name="review" > 
                   <ReviewSlider/>
         </Element>

    </div>
  )
}

export default Home