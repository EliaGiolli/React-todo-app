import React from 'react'
import { Parallax } from 'react-parallax'
import ParallaxImg from '../../public/assets/img/parallaxImg.jpg'
import { useTheme } from '../contexts/ThemeContext'

function ParallaxSection() {
    const { themeMode } = useTheme()

    return (
        <Parallax
            bgImage={ParallaxImg}
            bgImageAlt='gray rectangles'
            strength={800}
            className='relative h-screen'
        >
            <div className='flex items-center justify-center flex-col h-screen w-full sm:max-w-3xl mx-auto'>
                <div className={`flex flex-col justify-center items-center text-center max-h-lg py-5 p-3 text-lg rounded-lg shadow-xl ${themeMode === 'light' ? 'bg-secondary text-primary' : 'bg-gray-800 text-white'}`}>
                    <h2 className='uppercase text-tertiary text-2xl sm:text-3xl font-bold p-4 mb-4'>TaskFlow - L'app per organizzare la tua giornata</h2>
                    <h3 className='text-lg sm:text-xl text-primary'>Gestisci le tue attività con facilità e rimani sempre produttivo.</h3>
                    <p className='text-lg sm:text-2xl px-4 my-5'>
                        TaskFlow ti aiuta a organizzare impegni e scadenze in modo semplice ed efficace. Aggiungi, modifica e completa le tue attività con un'interfaccia intuitiva, pensata per chi vuole 
                        <strong className={`ml-1 ${themeMode =='light' ? 'text-red-500':'text-blue-700'}`}>massimizzare la produttività senza stress</strong>.</p>
                </div>
            </div>
        </Parallax>
    )
}

export default ParallaxSection