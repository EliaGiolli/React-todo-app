
//components
import Navbar from "../layouts/Navbar"
import HeroSection from "../layouts/HeroSection"
import Footer from '../layouts/Footer'
import About from "../layouts/About"
import Contacts from "../layouts/Contacts"
import Projects from "../layouts/Projects"




function Homepage() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="bg-inherit mx-auto py-8">
        <About />
        <Projects />
        <Contacts />
      </main>   
      <Footer />
    </>
  )
}

export default Homepage