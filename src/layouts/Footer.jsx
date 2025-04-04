//External libraries
import { Link } from 'react-router-dom'
import { Link as ScrollLink}  from 'react-scroll'
//React icons
import { FaFacebookF } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from 'react-icons/fa'
function Footer() {
  return (
    <>
        <footer className="footerStyle">
            <div className="container w-full px-4 py-8">
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2">
                        <ScrollLink to="heroSection" smooth={true} duration={500} >
                            <img src="/img/logo.jpg" alt="Logo Giolli Design" className="w-12 h-11 object-cover rounded" />
                        </ScrollLink>
                        <h6 className="subtitle">GIOLLI DESIGN</h6>
                    </div>
                <h5 className="text-2xl">Connettiti con me!</h5>
                <p className="paragraph">Mail: info@giollidesign.com</p>
                    <div className="flex justify-center gap-8">
                        <Link to="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white transition-colors">
                            <IoLogoInstagram className="icon" />
                        </Link>
                        <Link to="https://m.me/your-username" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="icon" />
                        </Link>
                        <Link href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white transition-colors">
                            <FaLinkedinIn className="icon" />
                        </Link>
                        <Link href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white transition-colors">
                            <FaGithub className="icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer