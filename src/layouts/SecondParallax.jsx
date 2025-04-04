import React from 'react'
import { Parallax } from 'react-parallax'
import ParallaxImg2 from '../../public/assets/img/ParallaxImg2.jpg'
import { useTheme } from '../contexts/ThemeContext'

function SecondParallax() {
    const { themeMode } = useTheme()

    return (
        <Parallax
            bgImage={ParallaxImg2}
            bgImageAlt='gray rectangles'
            strength={800}
            className='relative h-screen'
        >
            <div className='flex items-center justify-center flex-col h-screen w-full sm:max-w-3xl mx-auto'>
                <div className={`flex flex-col justify-center items-center text-center max-h-lg py-5 p-3 text-lg rounded-lg shadow-xl ${themeMode === 'light' ? 'bg-secondary text-primary' : 'bg-gray-800 text-white'}`}>
                    <h2 className='uppercase text-tertiary text-2xl sm:text-3xl font-bold p-4'>Iscriviti alla nostra newsletter</h2>
                    <p className='text-lg sm:text-2xl px-4 my-5'>Accedi a aggiornamenti, guide gratuite e offerte speciali per un'esperienza indimenticabile. Iscriviti oggi stesso e migliora la tua esperienza con TaskFlow!</p>
                </div>
            </div>
        </Parallax>
    )
}

export default SecondParallax