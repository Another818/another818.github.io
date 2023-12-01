import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSliders extends Component {
    render() {
        const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        };
        return (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14">
                <Slider {...settings}>
                    <div>
                        <img src="/img/Imagenes Portafolio/AsistenteVirtual/1.webp" alt="Vivero fenix" className="img-galeria"/>
                    </div>
                    <div className="relative">
                        <img src="/img/Imagenes Portafolio/AsistenteVirtual/2.webp" alt="Asistente Virtual" className="img-galeria"/>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white">
                            <h1 className="text-lg font-bold mb-2 sm:text-2xl md:text-lg lg:text-2xl">Asistente virtual para PC.</h1>
                            <p className="mb-4 px-2 text-xs sm:text-base md:text-xs lg:text-base xl:text-xl">Este proyecto surge de la idea de integrar ChatGpt y otras comodades de asistencia a Windows.</p>
                            <a href="" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-xs sm:text-base md:text-xs lg:text-base text-white font-bold py-2 px-4 rounded" id="git1">Learn more</a>
                        </div>
                    </div>

                    <div>
                        <img src="/img/Imagenes Portafolio/AsistenteVirtual/3.webp" alt="Vivero fenix" className="img-galeria"/>
                    </div>
                                
                    <div>
                        <img src="/img/Imagenes Portafolio/AsistenteVirtual/4.webp" alt="Vivero fenix" className="img-galeria"/>
                    </div>
                </Slider>

                <Slider>
                    <div>
                        <img src="/img/Imagenes Portafolio/Proyecto_6/1.webp" alt="Asistente Virtual" className="img-galeria"/>
                    </div>
                    <div className="relative">
                        <img src="/img/Imagenes Portafolio/Proyecto_6/2.webp" alt="Vivero fenix" className ="img-galeria"/>
                                
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white">
                            <h1 className="text-lg font-bold mb-2 sm:text-2xl md:text-lg lg:text-2xl">Ejemplo de Vivero Feniz CRUD.</h1>
                            <p className="mb-4 px-2 text-xs sm:text-base md:text-xs lg:text-base xl:text-xl">CRUD creado cómo proyecto final de secundaría.</p>
                            <a href="" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-xs sm:text-base md:text-xs lg:text-base text-white font-bold py-2 px-4 rounded" id="git2">Learn more</a>
                        </div>
                    </div>
                    <div>
                        <img src="/img/Imagenes Portafolio/Proyecto_6/3.webp" alt="Asistente Virtual" className="img-galeria"/>
                    </div>
                </Slider>

                <Slider>
                    <div>
                        <img src="/img/Imagenes Portafolio/crud_asp_net/1.webp" alt="Asistente Virtual" className="img-galeria"/>
                    </div>
                    <div className="relative">
                        <img src="/img/Imagenes Portafolio/crud_asp_net/2_1.webp" alt="Asistente Virtual" className="img-galeria"/>
                                
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white">
                            <h1 className="text-lg font-bold mb-2 sm:text-2xl md:text-lg lg:text-2xl">CRUD ASP.NET</h1>
                            <p className="mb-4 px-2 text-xs sm:text-base md:text-xs lg:text-base xl:text-xl">Proyecto creado para la finalización de curso intermedio de ASP.NET.</p>
                            <a href="" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-xs sm:text-base md:text-xs lg:text-base text-white font-bold py-2 px-4 rounded" id="git3">Learn more</a>
                        </div>
                    </div>
                            
                    <div>
                        <img src="/img/Imagenes Portafolio/crud_asp_net/3.webp" alt="Asistente Virtual" className="img-galeria"/>
                    </div>
                </Slider>

                <Slider>
                    <div>
                        <img src="/img/Imagenes Portafolio/crud_django_react/1.webp" alt="Asistente Virtual" className="img-galeria"/>
                    </div>
                    <div className="relative">
                        <img src="/img/Imagenes Portafolio/crud_django_react/2.webp" alt="Asistente Virtual" className="img-galeria"/>
                                
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white">
                            <h1 className="text-lg font-bold mb-2 sm:text-2xl md:text-lg lg:text-2xl">CRUD Django con React.</h1>
                            <p className="mb-4 px-2 text-xs sm:text-base md:text-xs lg:text-base xl:text-xl">Proyecto de practica con Django con React (Back-End, API'S, Front-End).</p>
                            <a href="" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-xs sm:text-base md:text-xs lg:text-base text-white font-bold py-2 px-4 rounded" id="git4">Learn more</a>
                        </div>
                    </div>
                            
                    <div>
                        <img src="/img/Imagenes Portafolio/crud_django_react/3.webp" alt="Asistente Virtual" className="img-galeria"/>
                    </div>
                </Slider>
            </div>
        );
    }
}