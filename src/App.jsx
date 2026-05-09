import AboutSection from "./features/About/AboutSection"
import Footer from "./features/Footer/Footer"
import Hero from "./features/Hero/Hero"
import HowItWorksSection from "./features/HowItWorks/HowItWorksSection"
import Navbar from "./features/Navigation/Navbar"
import PopularProfilesSection from "./features/PopularProfiles/PopularProfilesSection"
import TestimonialsSection from "./features/Testimonials/TestimonialSection"



function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero/>
      <div className="w-full h-px bg-gray-400 shadow-[0_10px_15px_rgba(0,0,0,0.25)] relative z-20"></div>
      <AboutSection/>
      <div className="w-full h-px bg-gray-400 shadow-[0_10px_15px_rgba(0,0,0,0.25)] relative z-20"></div>
      <HowItWorksSection/>
      <div className="w-full h-px bg-gray-400 shadow-[0_10px_15px_rgba(0,0,0,0.25)] relative z-20"></div>
      <PopularProfilesSection/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  )
}

export default App