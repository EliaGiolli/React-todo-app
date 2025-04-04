import { useState} from 'react';

import Card from './Card'
import Button from '../components/Button';
import { projectsData } from '../data/projectsData'

//React icons
import { FaJs, FaReact,FaCss3Alt,FaGithub, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript,SiAxios } from 'react-icons/si';
import { TbBrandVite } from "react-icons/tb";

//external libraries
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';



function Projects() {

  //LOGIC FOR THE PREV/CURRENT PROJECT
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const currentProject = projectsData[currentProjectIndex];

  const nextProject = () => {
      setCurrentProjectIndex((prevIndex) => 
          prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
      );
  };

  const prevProject = () => {
      setCurrentProjectIndex((prevIndex) => 
          prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
      );
  };

  const getTechIcon = (tech) => {

          switch (tech) {
              case 'Javascript':
                  return <FaJs className='icon'/>;
              case 'React':
                  return <FaReact className='icon'/>;
              case 'CSS':
                  return <FaCss3Alt className='icon'/>;
              case 'Tailwind CSS':
                  return < RiTailwindCssFill className='icon'/>;
              case 'Typescript':
                  return < SiTypescript className='icon'/>;
              case 'Axios':
                return <SiAxios className='icon'/>;
              case 'Vite':
                return <TbBrandVite className='icon'/>;
              default:
                  return null;
          }
      };


  return (
    <>
      
      <section className='bg-inherit max-w-3xl mx-auto p-8 my-11'>
        <h2 className="subtitle">Scopri le mie creazioni, sviluppate con React e con le tecnologie di ultima generazione</h2>
        <p className="paragraph px-3">
          Dai progetti front-end dinamici alle applicazioni interattive, questa sezione raccoglie i lavori che rappresentano la mia crescita come sviluppatore. 
          Qui potrete vedere i miei ultimi quattro progetti. Se volete vedere tutti i miei progetti, andate sul mio <Link to='https://github.com/projects'><strong className='text-accent'>Github</strong></Link>
        </p>
      </section>
      
        
      <Element name='projects' className='carousel-div'>
            <Card variant="project">
                <div className="flex flex-col text-white">
                  <div className='max-w-3xl'>
                    <img src={currentProject.imageUrl} alt={currentProject.title} className='object-cover rounded-lg mb-4' />
                  </div>
                    <h2 className="subtitle mb-2">{currentProject.title}</h2>
                    <p className="paragraph mb-4">{currentProject.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {currentProject.technologies.map((tech, index) => (
                            <span key={index} className="bg-text-tretiary/20 px-2 py-1 rounded text-sm flex items-center">
                                {getTechIcon(tech)}
                                <span className="ml-1">{tech}</span>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center my-6">
                    <Button 
                        to={currentProject.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      
                    >
                        Demo
                    </Button>
                    <Link 
                        to={currentProject.githubLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-2xl text-white hover:text-sky-300 cursor-pointer" />
                    </Link>
                </div>
                <div className='flex justify-center items-center w-full gap-5 p-2 my-4'>
                    <FaRegArrowAltCircleLeft className='icon cursor-pointer' onClick={prevProject} />
                    <FaRegArrowAltCircleRight className='icon cursor-pointer' onClick={nextProject} />
                </div>
            </Card>
        </Element>
    </>
  )
}

export default Projects