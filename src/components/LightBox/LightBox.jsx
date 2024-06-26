import { useState } from 'react';
import 'atropos/css'
import Atropos from 'atropos/react';
import './LightBox.css'
const LightboxComponent = () => {
    const [lightboxVisible, setLightboxVisible] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');
    const [lightboxText, setLightboxText] = useState('');

    const handleClickImagen = (imagen) => {
        setLightboxImage(imagen);
        setLightboxVisible(true);
    };

    const handleClickFigura = (contenido) => {
        setLightboxText(contenido);
    };

    const handleLightboxClick = (e) => {
        setLightboxVisible(!lightboxVisible);
        console.log(lightboxVisible)
        handleClickImagen(e.target.attributes[0].textContent)
        handleClickFigura(e.target.nextElementSibling.outerText)
    };

    return (
        <div className='flex flex-wrap mr-5 items-center justify-evenly'>
            <div className="cont-virtud animacion" onClick={handleLightboxClick}>
                <figure className="myFigure">
                    <img src="/img/Code Development.svg" alt="Development" className="img-virtud"/>
                    <figcaption className="hidden text-white">En mi enfoque de desarrollo de software, 
                        fusiono creatividad y precisión para dar vida a soluciones tecnológicas efectivas. 
                        A través de un proceso colaborativo, transformo ideas en código eficiente y escalable, 
                        buscando constantemente la excelencia en cada línea de código. Mi pasión por la 
                        programación me impulsa a superar desafíos y entregar productos de calidad que 
                        impulsen el éxito de los proyectos.
                    </figcaption>
                </figure>
                <h3 className="n-virtud text-white">Coding</h3>
            </div>
            <div className="cont-virtud animacion" onClick={handleLightboxClick}>
                <figure className="myFigure">
                    <img src="/img/Team building.svg" alt="Team building" className="img-virtud"/>
                    <figcaption className="hidden text-white">En mi trayectoria en el mundo del desarrollo de software, 
                        he experimentado el poder del trabajo en equipo. Colaborar con profesionales apasionados 
                        y comunicarse eficazmente nos ha permitido superar desafíos y ofrecer soluciones innovadoras. Creo firmemente que el trabajo en equipo potencia nuestras habilidades individuales y nos impulsa a alcanzar resultados excepcionales juntos.
                    </figcaption>
                </figure>
                <h3 className="n-virtud text-white">Team Work</h3>
            </div>
            <div className="cont-virtud animacion" onClick={handleLightboxClick}>
                <figure className="myFigure">
                    <img src="/img/Artificial Intelligence.svg" alt="AI" className="img-virtud"/>
                    <figcaption className="hidden text-white">Como desarrollador en el campo del desarrollo de 
                        software, tengo experiencia en el manejo de APIs, aprovechando su potencial para 
                        integrar servicios web y mejorar la funcionalidad de mis aplicaciones. He trabajado 
                        con diversas APIs, realizando consultas, envío y recepción de datos, y automatizando 
                        tareas. Esto me ha permitido crear soluciones eficientes y conectadas, brindando una 
                        experiencia de usuario mejorada.
                    </figcaption>
                </figure>
                <h3 className="n-virtud text-white">Manejo de APIS's</h3>
            </div>
            <div className="cont-virtud animacion" onClick={handleLightboxClick}>
                <figure className="myFigure">
                    <img src="/img/Data and settings.svg" alt="Data" className="img-virtud"/>
                    <figcaption className="hidden text-white">Como desarrollador, tengo experiencia 
                        en la gestión de datos, desde la recolección hasta el análisis. 
                        Utilizo técnicas avanzadas para garantizar la integridad y disponibilidad 
                        de los datos, desbloqueando su valor y permitiendo decisiones informadas.
                    </figcaption>
                </figure>
                <h3 className="n-virtud text-white">Gestión de datos</h3>
            </div>

            {
                lightboxVisible && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center imagen-light z-[1000]" >
                        <img src="/img/bxClose.svg" alt="" className="close absolute sm:top-10 sm:right-12 sm:w-10 md:top-20 md:right-20 md:w-10 lg:top-20 lg:right-20 lg:w-10 cursor-pointer" onClick={() => setLightboxVisible(false)}/>
                        <div className='mx-10'>
                            <Atropos
                                rotate={true}
                                shadowScale={1.05}
                                className='h-auto mx-auto shadow-2xl rounded-2xl [box-sizing:border-box]'
                            >
                                <div className="cuadrado-blanco h-3/4 flex items-center justify-between w-11/12 p-5 bg-white rounded-xl" data-atropos-offset="0">
                                    <img src={lightboxImage} alt="Virtud" className="w-3/5 md:w-2/5 lg:w-2/5 xl:w-3/5"/>
                                    <p>{lightboxText}</p>   
                                </div>
                                
                            </Atropos>
                        </div>
                    </div>
                )
            }
        {/* Resto de tu componente */}
        </div>
    );
};

export default LightboxComponent;
