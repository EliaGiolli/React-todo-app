import Card from './Card'
import Button from '../components/Button'
import immagineLaurea from '../../public/img/foto-laurea.jpg'

//LIBRARIES
import { ReactTyped } from 'react-typed'
import { Element, Link } from 'react-scroll'
//ICONS
import { FaLaptopCode } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { TiTick } from "react-icons/ti";


function About() {
  
  
  return (
    <>
    
      <Element name='about' className="flex flex-col w-full h-fit p-2 mb-10 sm:mb-16">
        {/* Profile Card Example */}
        <Card variant="profile" className="mb-11">
         
            <article className="flex flex-col justify-around items-center text-center p-3 my-4 w-full">
              <div className="flex flex-col items-center text-center md:text-left p-8">
                
                <h3 className="subtitle-secondary">Elia Giolli</h3>
                <span className="text-3xl sm:text-5xl text-tretiary font-bold my-6">
                  <ReactTyped
                    strings={[
                      "Jr React developer",
                      "Jr Front-end developer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </span>
                <p className="paragraph"> Ciao, sono Giolli Elia, un React Developer orientato alla costruzione di design interattivi e accessibili.</p>
                <p className='paragraph mb-3'>Sviluppo soluzioni web scalabili e multilingue, ideali per chi vuole espandere il proprio business oltre i confini nazionali.</p>
              </div>
          </article>
        </Card>
        <Card variant='profile' className='cards'>
          <article className="flex flex-col sm:grid md:grid-cols-3 gap-3">
            <div className="foto-container hidden md:block">
              <img src={immagineLaurea} alt="immagine della mia laurea" className="foto"/>
            </div>
            <div className="grid col-span-2 px-4">
              <h2 className="subtitle">Creo interfacce moderne e con React e TypeScript, per siti web veloci e performanti.</h2>
                <p className="paragraph">Il tuo sito sarà: </p>
                <ul className='flex flex-col justify-center items-center text-center p-3'>
                  <li className='text-primary md:text-xl text-center p-2 flex items-center'>
                    <FaLaptopCode size={30} className='mr-3'/>
                      Responsivo su tutti i dispositivi    
                  </li>
                  <li className='text-primary md:text-xl text-center p-2 flex items-center'>
                    <TbManualGearbox size={30} className='mr-3' />
                      Ottimizzato per la velocità e la SEO
                    </li>
                  <li className='text-primary md:text-xl text-center p-2 flex items-center'>
                    <TiTick size={30} className='mr-3' />
                    Facile da navigare per i tuoi clienti
                  </li>
                </ul>
                <p className='paragraph text-accent-secondary mb-4'>Prenota una call gratuita e trasformiamo la tua idea in un sito web efficace e professionale!</p>
              <Button>
               <Link to="contacts" smooth={true} duration={500}>Contattami!</Link>
              </Button>
            </div>
          </article>
        </Card>

      </Element>

    </>
  )
}

export default About