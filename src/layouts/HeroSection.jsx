//React components
import Button from '../components/Button'

//External libraries
import { Link, Element } from 'react-scroll'


//React icons
import { FaHtml5 } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiTypescript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"

function HeroSection() {
  return (
    <>
        <Element name='heroSection' className="relative bg-[url('img/hero-section-img.png')] bg-cover bg-center h-screen w-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black to-transparent z-20"></div>
            <div className="flex flex-col items-center justify-start md:items-end relative z-30 text-white px-8 py-4 mt-10 h-full">
                <h3 className="text-2xl md:text-xl bold text-center sm:text-right py-4 md:py-3">Vuoi un sito web veloce, responsive e ottimizzato per la SEO?</h3>
                <h1 className="title-primary">Trasformiamo la tua idea in un sito web efficace e professionale!</h1>
                <p className="paragraph my-5">Sono esperto in: </p>
                <div className="w-full flex flex-col items-center md:items-end justify-center p-4">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 p-1 md:p-4 mb-8 max-w-5xl">
                            <FaHtml5 className="icon"/>
                            <FaCss3 className="icon"/>
                            <IoLogoJavascript className="icon"/>
                            <SiTypescript className="icon"/>
                            <FaReact className="icon"/>
                            <FaNodeJs className="icon"/>
                    </div>
                    <Button className='buttons'>
                        <Link to="contacts" smooth={true} duration={500}>Contattami!</Link>
                    </Button>
                </div>
            </div>
        </Element>
    </>
  )
}

export default HeroSection