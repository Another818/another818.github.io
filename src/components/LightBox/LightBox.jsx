import { useState } from 'react';
import 'atropos/css'
import Atropos from 'atropos/react';
import './LightBox.css'

const skills = [
    {
        id: 'coding',
        title: 'Coding',
        icon: '/img/Code Development.svg',
        description: 'En mi enfoque de desarrollo de software, fusiono creatividad y precisión para dar vida a soluciones tecnológicas efectivas. A través de un proceso colaborativo, transformo ideas en código eficiente y escalable, buscando constantemente la excelencia en cada línea de código.'
    },
    {
        id: 'teamwork',
        title: 'Team Work',
        icon: '/img/Team building.svg',
        description: 'He experimentado el poder del trabajo en equipo. Colaborar con profesionales apasionados y comunicarse eficazmente nos ha permitido superar desafíos y ofrecer soluciones innovadoras.'
    },
    {
        id: 'apis',
        title: 'APIs',
        icon: '/img/Artificial Intelligence.svg',
        description: 'Tengo experiencia en el manejo de APIs, aprovechando su potencial para integrar servicios web y mejorar la funcionalidad de mis aplicaciones. He trabajado con diversas APIs realizando consultas, envío y recepción de datos.'
    },
    {
        id: 'data',
        title: 'Gestión de datos',
        icon: '/img/Data and settings.svg',
        description: 'Tengo experiencia en la gestión de datos, desde la recolección hasta el análisis. Utilizo técnicas avanzadas para garantizar la integridad y disponibilidad de los datos.'
    }
];

const LightboxComponent = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 w-full'>
            {skills.map((skill) => (
                <div 
                    key={skill.id}
                    className="group glass-card p-10 cursor-pointer text-center hover:shadow-glow transition-all duration-300"
                    onClick={() => handleSkillClick(skill)}
                >
                    <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img 
                            src={skill.icon} 
                            alt={skill.title} 
                            className="w-24 h-24 mx-auto relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <h3 className="text-cyan-400 font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                        {skill.title}
                    </h3>
                </div>
            ))}

            {
                selectedSkill && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center imagen-light z-[1000]" >
                        <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm" onClick={() => setSelectedSkill(null)}></div>
                        <button 
                            className="absolute top-6 right-6 z-[1001] text-gray-400 hover:text-white transition-colors duration-200"
                            onClick={() => setSelectedSkill(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className='mx-5 relative z-[1001] max-w-4xl w-full'>
                            <Atropos
                                rotate={true}
                                shadowScale={1.05}
                                className='h-auto mx-auto'
                            >
                                <div className="glass-card p-10 flex flex-col md:flex-row items-center gap-8" data-atropos-offset="0">
                                    <div className="relative shrink-0">
                                        <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl"></div>
                                        <img 
                                            src={selectedSkill.icon} 
                                            alt={selectedSkill.title} 
                                            className="w-40 h-40 relative z-10"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-4">{selectedSkill.title}</h3>
                                        <p className="text-gray-300 leading-relaxed text-lg">{selectedSkill.description}</p>
                                    </div>
                                </div>
                            </Atropos>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default LightboxComponent;
