import { useState, useEffect, useCallback } from 'react'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { PDF } from "../index";
import Typewriter from 'typewriter-effect';
import "./Navbar.css";

function Navbar() {

    const [scrolled, setScrolled] = useState(false)
    const [pdfVisible, setPdfVisible] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)

    const handleMenu = () => {
        setMenuVisible(prev => !prev);
    }

    const listenScrollEvent = useCallback(() => {
        setScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, [listenScrollEvent]);

    return (
        <div>
            <header className={`w-full fixed z-50 py-3 transition-all duration-300 ${
                scrolled 
                    ? 'bg-navy-900/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5' 
                    : 'bg-transparent'
            }`}>
                <div className="container mx-auto flex items-center justify-between px-5 md:px-10">
                    <a href="/" className="flex items-center gap-3 group">
                        <img src="/img/Logo.png" className="transition-transform duration-300 group-hover:scale-110" width={45} height={45} alt="Logo"/>
                        <span className="text-lg font-bold text-white tracking-tight">
                            Tomás <span className="text-cyan-400">Menna</span>
                        </span>
                    </a>

                    <div className="md:flex items-center">
                        
                        <ul className="flex items-center space-x-8 max-md:hidden">
                            <li>
                                <a className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium tracking-wide" href="#portafolio">Proyectos</a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium tracking-wide" href="#sobre_mi">Sobre Mí</a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium tracking-wide" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                        <div className='relative'>
                            <div className="mr-5 flex md:hidden">
                                <button className="z-50 bg-navy-700/80 backdrop-blur-sm border border-cyan-500/20 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 px-3 py-2 rounded-lg text-base font-medium transition-all duration-300" onClick={handleMenu}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        >
                                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                                    </svg>
                                </button>
                            </div>
                            {
                            menuVisible 
                            &&
                            <div className="absolute top-12 bottom-12 right-1 z-50 shadow-xl md:hidden">
                                <div className="px-3 pt-3 pb-4 bg-navy-800/95 backdrop-blur-xl rounded-xl border border-cyan-500/10">
                                    <a href="#portafolio" className="block text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200" onClick={handleMenu}>Inicio</a>
                                    <a href="#portafolio" className="block text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200" onClick={handleMenu}>Portafolio</a>
                                    <a href="#sobre_mi" className="block text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200" onClick={handleMenu}>Sobre Mí</a>
                                    <a href="#contacto" className="block text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200" onClick={handleMenu}>Contacto</a>
                                </div>
                            </div>
                        }
                        </div>

                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
                {/* Background orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
                
                <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6 animate__animated animate__fadeInDown">
                            Desarrollador Full Stack
                        </span>
                    </div>
                    
                    <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white animate__animated animate__backInLeft">
                        Pablo Tomás
                        <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Menna
                        </span>
                    </h1>
                    
                    <div className="mb-8 text-lg md:text-xl text-gray-400 animate__animated animate__backInUp min-h-[2rem]">
                        <Typewriter
                            options={{
                                strings: [
                                    'Estudiante de Ingeniería en Sistemas de Información',
                                    'Desarrollador .NET & React',
                                    'Apasionado por el código limpio'
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 1,
                            }}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate__animated animate__fadeInUp">
                        <a href="#contacto" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:ring-4 focus:ring-cyan-500/30 font-medium rounded-xl text-sm px-7 py-3 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path>
                                <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
                            </svg>
                            Contactame
                        </a>
                        
                        <div 
                            onMouseEnter={() => setPdfVisible(true)}
                            onMouseLeave={() => setPdfVisible(false)}
                            className="relative"
                        >
                            <PDFDownloadLink document={<PDF/>} fileName="Curriculum - Menna Pablo Tomás.pdf" className="inline-flex items-center gap-2 text-cyan-400 bg-navy-700/50 hover:bg-navy-700 border border-cyan-500/20 hover:border-cyan-500/40 font-medium rounded-xl text-sm px-7 py-3 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                                    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                                </svg>
                                Descargar CV
                            </PDFDownloadLink>
                            {
                                pdfVisible
                                && <div className='max-w-2xl w-full h-[38rem] absolute top-14 right-0 z-50 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-cyan-500/10'>
                                    <PDFViewer className='w-full h-full'>
                                        <PDF/>
                                    </PDFViewer>
                                </div>
                            }
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
