import React, { useState, useEffect } from 'react'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { PDF } from "../index";
import Typewriter from 'typewriter-effect';
import "./Navbar.css";

function Navbar() {

    const [header, setHeader] = useState("#ff900a")
    const [pdfVisible, setPdfVisible] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)

    const pruebaConsoleEnter = () =>{
        setPdfVisible(true)
    }
    
    const pruebaConsoleLeave = () =>{
        setPdfVisible(false)
    }

    const handleMenu = () => {
        if(menuVisible === false){
            console.log(menuVisible)
            setMenuVisible(true)
        }else{
            console.log(menuVisible)
            setMenuVisible(false)
        }
    }

    const listenScrollEvent = () => {
        if (window.scrollY < 73) {
            return setHeader("#ff900a")
        } else if (window.scrollY > 70) {
            return setHeader("transparent")
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, [listenScrollEvent]);

    return (
        <div>
            <header className="w-full fixed z-50 py-3 mb-7 shadow-md" style={{backgroundColor: header}}>
                <div className="container mx-auto flex items-center justify-between">
                    <a href="/" className="flex items-center">
                        <img src="/img/Logo.png" className="me-2" width={60} height={60} alt="Logo"/>
                        <span className="text-xl font-bold text-white">Tomás Menna</span>
                    </a>

                    <div className="md:flex items-center space-x-4">
                        
                        <ul className="flex items-center space-x-4 max-md:hidden mx-5">
                            <li className="">
                                <a className="text-white" aria-current="page" href="#portafolio">Proyectos</a>
                            </li>
                            <li className="">
                                <a className="text-white" href="#sobre_mi">Sobre Mí</a>
                            </li>
                            <li className="">
                                <a className="text-white" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                        <div className='relative'>
                            <div className="mr-5 flex md:hidden">
                                <button className="bottom-16 z-50 bg-orange-600 text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium md:hidden" onClick={handleMenu}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6 mr-1"
                                        fill="currentColor"
                                        >
                                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                                    </svg>
                                </button>
                            </div>
                            {
                            menuVisible 
                            &&
                            <div className="absolute top-12 bottom-12 right-1 z-50 shadow-md md:hidden">
                                <div className="px-2 pt-2 pb-3 sm:px-3 bg-orange-500 rounded-lg">
                                    <a href="#" className="block text-gray-300 hover:bg-orange-300 hover:text-white px-3 py-2 rounded-md text-base font-medium" onClick={handleMenu}>Inicio</a>
                                    <a href="#portafolio" className="block text-gray-300 hover:bg-orange-300 hover:text-white px-3 py-2 rounded-md text-base font-medium" onClick={handleMenu}>Portafolio</a>
                                    <a href="#sobre_mi" className="block text-gray-300 hover:bg-orange-300 hover:text-white px-3 py-2 rounded-md text-base font-medium" onClick={handleMenu}>Sobre Mí</a>
                                    <a href="#contacto" className="block text-gray-300 hover:bg-orange-300 hover:text-white px-3 py-2 rounded-md text-base font-medium" onClick={handleMenu}>Contacto</a>
                                </div>
                            </div>
                        }
                        </div>

                    </div>
                </div>
            </header>
            <div className="container w-screen h-screen flex items-start justify-center text-start flex-col p-0 px-5">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white animate__animated animate__backInLeft">
                        Pablo Tomás
                        <span className="ml-2 text-orange-500">
                            Menna
                        </span>
                    </h1>
                    <div className="mb-4 text-lg font-normal lg:text-xl text-white animate__animated animate__backInUp">
                        <Typewriter
                            options={{
                                strings: ['Estudiante de Ingeniería en Sistemas de Información, apasionado por el mundo de la programación.', 'Programador Full Stack', 'Desarrollador de Software'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 1,
                            }}
                        />
                    </div>
                    <div className="inline-flex pt-4">
                        <div>
                            <a href="#contacto"><button type="button" className="inline-flex items-center mr-5 text-white bg-orange-500 hover:bg-orange-600 focus:ring-orange-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-2" viewBox="0 0 24 24" style={{fill: "#ffffff"}}><path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path></svg>Contactame</button>
                            </a>
                        </div>
                        <div onMouseEnter={pruebaConsoleEnter}>
                            <PDFDownloadLink document={<PDF/>} fileName="Curriculum - Menna Pablo Tomás.pdf" className="text-orange-600 inline-flex items-center focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-white hover:bg-gray-200 focus:outline-none focus:ring-orange-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-2" viewBox="0 0 24 24" style={{fill: "#ff9b00"}}><path d="m12 16 4-5h-3V4h-2v7H8z"></path><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path></svg>
                                Descargar CV
                            </PDFDownloadLink>
                        </div>
                        
                        {/* <a href="https://onedrive.live.com/download?resid=D5DB82698276E2AD%2113724&authkey=!ALppv9_Z3Yf3KIM&em=2"><button type="button" onMouseEnter={pruebaConsoleEnter} className="text-orange-600 inline-flex items-center focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-white hover:bg-gray-200 focus:outline-none focus:ring-orange-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-2" viewBox="0 0 24 24" style={{fill: "#ff9b00"}}><path d="m12 16 4-5h-3V4h-2v7H8z"></path><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path></svg>Descargar CV</button>
                        </a> */}
                    </div>
                </div>
                <div className='flex justify-end'>
                    {
                        pdfVisible
                        && <div className='max-w-2xl w-full h-[38rem] absolute top-20 right-0' onMouseLeave={pruebaConsoleLeave}>
                                <PDFViewer className='w-full h-full'>
                                    <PDF/>
                                </PDFViewer>
                            </div>
                    }
                </div>
                
                
        </div>
    )
}

export default Navbar
