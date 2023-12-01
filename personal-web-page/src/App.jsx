import React, { useState } from 'react'
import { LightboxComponent, TablasComponent, Navbar, SimpleSliders } from './components/index'
import 'boxicons';
import './App.css'
import 'animate.css';

function App() {

    return (
        <>
            <Navbar/>

            <main className='mb-36'>
                <section className="dark:bg-slate-200 bg-gray-900 bg-opacity-75" id="portafolio">
                    <div className="container md:max-w-screen-lg lg:max-w-screen-xl mx-auto my-8 px-20 pb-8"> 
                        <h2 className="subtitulo pt-12">Proyectos</h2> 

                        <SimpleSliders/>
                    </div>
                </section>

                <section className="container xl:max-w-screen-xl mx-auto my-8 px-10 cont-sobremi" id="sobre_mi">

                    <h1 className="subtitulo">Sobre Mí</h1>

                    <div className="container mx-auto my-28">
                        <TablasComponent/>
                    </div>

                    <div className="flex items-center justify-center flex-col-reverse sm:flex-row-reverse sm:items-center sm:justify-end">
                        <section>
                            <LightboxComponent/>
                        </section>
                        <div className="cont-perfil">
                            <img src= "" id="ImgPerfil" className="imagen-perfil" alt="Imagen Perfil"/>
                            <h3 className="n-perfil text-white" id="n-perfil"></h3>
                        </div>
                        
                    </div>
                </section>
            </main>
            
            <footer className='bg-orange-200 w-full' id="contacto">
                <div className="container flex flex-wrap justify-center md:justify-between items-center pt-14 xl:max-w-screen-xl mx-auto">

                    <div className="flex flex-col w-4/5 mb-10 text-center md:w-2/5 md:text-left text-white">
                        <h2 className="mb-4 px-5 text-2xl font-bold leading-none tracking-tight sm:text-4xl lg:text-5xl text-black">Pablo Tomás
                            <span className="text-orange-500 ml-2">Menna</span>
                        </h2>
                        <p className="px-5 text-black">Forjando mi carrera como programador, paso a paso.</p>
                    </div>

                    <div className="social-media px-2">

                        <a href="https://github.com/Another818" target="_blank" rel='noreferrer' className="social-media-icon animacion">
                            <box-icon type='logo' name='github'></box-icon>
                        </a>
                        <a href="https://www.linkedin.com/in/tomás-menna" target="_blank" rel='noreferrer' className="social-media-icon animacion">
                            <box-icon type='logo' name='linkedin-square'></box-icon>
                        </a>
                        <a href="https://www.instagram.com/aurorasoftware06/" target="_blank" rel='noreferrer' className="social-media-icon animacion">
                            <box-icon type='logo' name='instagram'></box-icon>
                        </a>

                    </div>
                    <div className="line"></div>
                </div>
            </footer>
        </>
        )
    }

export default App
