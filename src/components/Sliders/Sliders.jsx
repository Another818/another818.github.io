import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export default class SimpleSliders extends Component {
    render() {
        const { gitLinks = {} } = this.props;

        const settings_1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        };

        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <Slider {...settings_1}>
                    <div className="px-2">
                        <div className="glass-card overflow-hidden">
                            <img src="/img/Imagenes Portafolio/AsistenteVirtual/1.webp" alt="Asistente Virtual" className="img-galeria"/>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="glass-card overflow-hidden relative">
                            <img src="/img/Imagenes Portafolio/AsistenteVirtual/2.webp" alt="Asistente Virtual" className="img-galeria"/>
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/80 p-6">
                                <h3 className="text-lg font-bold mb-2 text-white sm:text-xl md:text-2xl">Asistente Virtual para PC</h3>
                                <p className="mb-4 px-2 text-sm text-gray-300 sm:text-base">Integración de ChatGPT y herramientas de asistencia a Windows.</p>
                                {gitLinks.git1 ? (
                                    <a href={gitLinks.git1} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-2.5 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25">
                                        Ver en GitHub
                                    </a>
                                ) : (
                                    <span className="bg-cyan-500/30 text-cyan-300 font-semibold text-sm py-2.5 px-6 rounded-lg opacity-60">Cargando...</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="px-2">
                        <div className="glass-card overflow-hidden">
                            <img src="/img/Imagenes Portafolio/AsistenteVirtual/3.webp" alt="Asistente Virtual" className="img-galeria"/>
                        </div>
                    </div>
                                
                    <div className="px-2">
                        <div className="glass-card overflow-hidden">
                            <img src="/img/Imagenes Portafolio/AsistenteVirtual/4.webp" alt="Asistente Virtual" className="img-galeria"/>
                        </div>
                    </div>
                </Slider>

                <Slider {...settings_1}>
                    <div className="px-2">
                        <div className="glass-card overflow-hidden">
                            <img src="/img/Imagenes Portafolio/Proyecto_6/1.webp" alt="Vivero Fenix" className="img-galeria"/>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="glass-card overflow-hidden relative">
                            <img src="/img/Imagenes Portafolio/Proyecto_6/2.webp" alt="Vivero Fenix" className="img-galeria"/>
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/80 p-6">
                                <h3 className="text-lg font-bold mb-2 text-white sm:text-xl md:text-2xl">Vivero Fenix CRUD</h3>
                                <p className="mb-4 px-2 text-sm text-gray-300 sm:text-base">CRUD creado como proyecto final de secundaria.</p>
                                {gitLinks.git2 ? (
                                    <a href={gitLinks.git2} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-2.5 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25">
                                        Ver en GitHub
                                    </a>
                                ) : (
                                    <span className="bg-cyan-500/30 text-cyan-300 font-semibold text-sm py-2.5 px-6 rounded-lg opacity-60">Cargando...</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="glass-card overflow-hidden">
                            <img src="/img/Imagenes Portafolio/Proyecto_6/3.webp" alt="Vivero Fenix" className="img-galeria"/>
                        </div>
                    </div>
                </Slider>

                <Slider {...settings_1}>
                    <div className="px-2">
                        <div className="glass-card overflow-hidden">
                            <img src="/img/Imagenes Portafolio/crud_asp_net/1.webp" alt="CRUD ASP.NET" className="img-galeria"/>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="glass-card overflow-hidden relative">
                            <img src="/img/Imagenes Portafolio/crud_asp_net/2_1.webp" alt="CRUD ASP.NET" className="img-galeria"/>
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/80 p-6">
                                <h3 className="text-lg font-bold mb-2 text-white sm:text-xl md:text-2xl">CRUD ASP.NET</h3>
                                <p className="mb-4 px-2 text-sm text-gray-300 sm:text-base">Proyecto final del curso intermedio de ASP.NET.</p>
                                {gitLinks.git3 ? (
                                    <a href={gitLinks.git3} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-2.5 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25">
                                        Ver en GitHub
                                    </a>
                                ) : (
                                    <span className="bg-cyan-500/30 text-cyan-300 font-semibold text-sm py-2.5 px-6 rounded-lg opacity-60">Cargando...</span>
                                )}
                            </div>
                        </div>
                    </div>
                            
                    <div className="px-2">
                        <div className="glass-card overflow-hidden">
                            <img src="/img/Imagenes Portafolio/crud_asp_net/3.webp" alt="CRUD ASP.NET" className="img-galeria"/>
                        </div>
                    </div>
                </Slider>

                <Slider {...settings_1}>
                    <div className="px-2">
                        <div className="glass-card overflow-hidden">
                            <img src="/img/Imagenes Portafolio/crud_django_react/1.webp" alt="CRUD Django React" className="img-galeria"/>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="glass-card overflow-hidden relative">
                            <img src="/img/Imagenes Portafolio/crud_django_react/2.webp" alt="CRUD Django React" className="img-galeria"/>
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/80 p-6">
                                <h3 className="text-lg font-bold mb-2 text-white sm:text-xl md:text-2xl">CRUD Django con React</h3>
                                <p className="mb-4 px-2 text-sm text-gray-300 sm:text-base">Backend, APIs y Frontend con Django y React.</p>
                                {gitLinks.git4 ? (
                                    <a href={gitLinks.git4} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-2.5 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25">
                                        Ver en GitHub
                                    </a>
                                ) : (
                                    <span className="bg-cyan-500/30 text-cyan-300 font-semibold text-sm py-2.5 px-6 rounded-lg opacity-60">Cargando...</span>
                                )}
                            </div>
                        </div>
                    </div>
                            
                    <div className="px-2">
                        <div className="glass-card overflow-hidden">
                            <img src="/img/Imagenes Portafolio/crud_django_react/3.webp" alt="CRUD Django React" className="img-galeria"/>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
