import { useState } from 'react';
import 'boxicons';

const tabs = [
    { id: 'experiencia', label: 'Experiencia', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512">
            <path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z"></path>
        </svg>
    )},
    { id: 'educacion', label: 'Educación', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 640 512">
            <path d="M337.8 5.4c-10.8-7.2-24.8-7.2-35.6 0L166.3 96H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256v-96zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64zM232 176a88 88 0 1 1 176 0 88 88 0 1 1-176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16z"></path>
        </svg>
    )},
    { id: 'certificados', label: 'Certificados', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 297 297" fill="currentColor">
            <path d="M148.5 69.022H44.969c-5.775 0-10.458 4.683-10.458 10.458 0 5.774 4.683 10.457 10.458 10.457H148.5c5.775 0 10.458-4.683 10.458-10.457 0-5.776-4.683-10.458-10.458-10.458zM148.5 103.532H44.969c-5.775 0-10.458 4.682-10.458 10.457s4.683 10.458 10.458 10.458H148.5c5.775 0 10.458-4.683 10.458-10.458s-4.683-10.457-10.458-10.457zM148.5 138.041H44.969c-5.775 0-10.458 4.683-10.458 10.458s4.683 10.458 10.458 10.458H148.5c5.775 0 10.458-4.683 10.458-10.458s-4.683-10.458-10.458-10.458z"></path>
            <path d="M270.855 17.255H26.144C11.728 17.255 0 28.983 0 43.399v175.69c0 14.416 11.728 26.145 26.144 26.145H181.18v24.054a10.459 10.459 0 0 0 16.257 8.702l20.083-13.388 20.082 13.388a10.449 10.449 0 0 0 10.736.519 10.458 10.458 0 0 0 5.522-9.22v-24.054h16.994c14.416 0 26.145-11.729 26.145-26.145V43.399c.001-14.416-11.728-26.144-26.144-26.144zM217.521 193.59c-15.281 0-27.714-12.487-27.714-27.835 0-15.347 12.433-27.834 27.714-27.834 15.281 0 27.713 12.487 27.713 27.834 0 15.348-12.431 27.835-27.713 27.835zm5.801 49.739a10.448 10.448 0 0 0-5.801-1.756c-2.022 0-4.045.585-5.801 1.756l-9.625 6.416v-37.769a48.279 48.279 0 0 0 15.426 2.528c5.391 0 10.575-.896 15.425-2.528v37.769l-9.624-6.416zm52.763-24.241c0 2.834-2.396 5.229-5.23 5.229h-16.994V198.1c7.637-8.612 12.288-19.94 12.288-32.345 0-26.88-21.814-48.75-48.628-48.75s-48.629 21.87-48.629 48.75c0 12.404 4.651 23.732 12.288 32.345v26.217H26.144c-2.834 0-5.229-2.395-5.229-5.229V43.399c0-2.834 2.395-5.229 5.229-5.229h244.711c2.834 0 5.23 2.395 5.23 5.229v175.689z"></path>
        </svg>
    )},
    { id: 'tecnologias', label: 'Tecnologías', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor">
            <path d="M176 88v40h160V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0v-76.1C0 215.2 5.1 203 14.1 194L66 142.1c9-9 21.2-14.1 33.9-14.1H128zM0 416v-80h128v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h128v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h128v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"></path>
        </svg>
    )},
    { id: 'idiomas', label: 'Idiomas', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 640 512">
            <path d="M0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zm320 0v256h256V128H320zm-141.7 47.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144a20 20 0 1 0 36.6 16.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2l19 42.8h-38l19-42.8zM448 164c11 0 20 9 20 20v4h60c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5a196.7 196.7 0 0 1-39.6 65.4c.9.6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9L467 333.8c-4.5-2.7-8.8-5.5-13.1-8.5-10.6 7.5-21.9 14-34 19.4l-3.6 1.6a20 20 0 1 1-16.2-36.6l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8L410 286.1c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6.5.5c12.4-13.1 22.5-28.3 29.8-45H376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"></path>
        </svg>
    )},
];

const TablasComponent = () => {
    const [activeTab, setActiveTab] = useState('experiencia');

    return (
        <>
            <div className="flex flex-wrap justify-center gap-2 text-sm font-medium text-gray-400 mb-8" role="tablist">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 ${
                            activeTab === tab.id
                                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                                : 'bg-navy-700/30 border border-transparent hover:border-cyan-500/10 hover:text-gray-300'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                        type="button"
                    >
                        {tab.icon}{tab.label}
                    </button>
                ))}
            </div>

            <div className={activeTab === 'experiencia' ? 'block' : 'hidden'}>
                <div className="glass-card p-6 text-center">
                    <p className="text-gray-400 text-lg">Proximamente...</p>
                </div>
            </div>

            <div className={activeTab === 'educacion' ? 'block' : 'hidden'}>
                <div className="glass-card overflow-hidden">
                    <table className="table-auto w-full text-sm">
                        <thead>
                            <tr className="border-b border-cyan-500/10">
                                <th className="font-semibold p-4 text-left text-cyan-400/80 uppercase tracking-wider text-xs">Institución</th>
                                <th className="font-semibold p-4 text-left text-cyan-400/80 uppercase tracking-wider text-xs">Título</th>
                                <th className="font-semibold p-4 text-left text-cyan-400/80 uppercase tracking-wider text-xs">Ingreso</th>
                                <th className="font-semibold p-4 text-left text-cyan-400/80 uppercase tracking-wider text-xs">Finalizado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-white/5 hover:bg-cyan-500/5 transition-colors duration-200">
                                <td className="flex items-center p-4 text-gray-300">
                                    <img alt="" loading="lazy" width="100" height="100" className="h-8 w-8 mr-3 rounded-full bg-white p-1" src="/img/proa.svg"/>
                                    Escuelas ProA
                                </td>
                                <td className="p-4 text-gray-300">Bachiller en Desarrollo de Software</td>
                                <td className="p-4 text-gray-400">2015</td>
                                <td className="p-4 text-gray-400">2021</td>
                            </tr>
                            <tr className="hover:bg-cyan-500/5 transition-colors duration-200">
                                <td className="flex items-center p-4 text-gray-300">
                                    <img alt="" loading="lazy" width="100" height="100" className="h-8 w-8 mr-3 rounded-full bg-white p-1" src="/img/utn.svg"/>
                                    Universidad Tecnológica Nacional
                                </td>
                                <td className="p-4 text-gray-300">Ingeniero en Sistemas de Información</td>
                                <td className="p-4 text-gray-400">2021</td>
                                <td className="p-4 text-gray-400">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={activeTab === 'certificados' ? 'block' : 'hidden'}>
                <div className="glass-card overflow-hidden">
                    <table className="table-auto w-full text-sm">
                        <thead>
                            <tr className="border-b border-cyan-500/10">
                                <th className="font-semibold p-4 text-left text-cyan-400/80 uppercase tracking-wider text-xs">Emisor</th>
                                <th className="font-semibold p-4 text-left text-cyan-400/80 uppercase tracking-wider text-xs">Descripción</th>
                                <th className="font-semibold p-4 text-left text-cyan-400/80 uppercase tracking-wider text-xs">Expedición</th>
                                <th className="font-semibold p-4 text-left text-cyan-400/80 uppercase tracking-wider text-xs">Credencial</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-white/5 hover:bg-cyan-500/5 transition-colors duration-200">
                                <td className="p-4 flex items-center text-gray-300">
                                    <div className='h-8 w-8 mr-3 rounded-full flex justify-center items-center bg-cyan-500/10 border border-cyan-500/20'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#22d3ee"><path d="M12 14h6v2h-6zM6.293 9.707 8.586 12l-2.293 2.293 1.414 1.414L11.414 12 7.707 8.293z"></path><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path></svg>
                                    </div>
                                    Argentina Programa (1° Etapa)
                                </td>
                                <td className="p-4 text-gray-300">Fundamentos de programación</td>
                                <td className="p-4 text-gray-400">2022-06-09</td>
                                <td className="p-4">
                                    <a href="https://mumuki.io/argentina-programa/certificates/verify/_0W4djGSfEp88BW-" target="_blank" rel='noreferrer' className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                                        Ver credencial
                                    </a>
                                </td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-cyan-500/5 transition-colors duration-200">
                                <td className="p-4 flex items-center text-gray-300">
                                    <img alt="" loading="lazy" width="100" height="100" className="h-8 w-8 mr-3 rounded-full bg-white p-1" src="/img/utn.svg"/>
                                    Desarrollo Full Stack .NET
                                </td>
                                <td className="p-4 text-gray-300">Desarrollo Full Stack .NET - Nivel Intermedio</td>
                                <td className="p-4 text-gray-400">2023-09-24</td>
                                <td className="p-4">
                                    <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:144c3fa1-fd0f-413a-b29f-e3066ac505af" target="_blank" rel='noreferrer' className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                                        Ver credencial
                                    </a>
                                </td>
                            </tr>
                            <tr className="hover:bg-cyan-500/5 transition-colors duration-200">
                                <td className="p-4 flex items-center text-gray-300">
                                    <div className='h-8 w-8 mr-3 rounded-full flex justify-center items-center bg-cyan-500/10 border border-cyan-500/20'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#22d3ee"><path d="M12 14h6v2h-6zM6.293 9.707 8.586 12l-2.293 2.293 1.414 1.414L11.414 12 7.707 8.293z"></path><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path></svg>
                                    </div>
                                    Argentina Programa 4.0 (2° Etapa)
                                </td>
                                <td className="p-4 text-gray-300">Desarrollo web con React JS</td>
                                <td className="p-4 text-gray-400">2023-12-01</td>
                                <td className="p-4">
                                    <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:62cad600-efd3-4c08-8a5b-81ba358839ca" target="_blank" rel='noreferrer' className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                                        Ver credencial
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={activeTab === 'tecnologias' ? 'block' : 'hidden'}>
                <div className="glass-card p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'Python', icon: <box-icon type="logo" name="python" color='#22d3ee'></box-icon> },
                            { name: 'Django', icon: <box-icon type="logo" name="django" color='#22d3ee'></box-icon> },
                            { name: 'MySQL', icon: <img alt="" loading="lazy" className="h-7 w-7" src="/img/mysql.svg"/> },
                            { name: 'Git', icon: <box-icon name='git' type='logo' color='#22d3ee'></box-icon> },
                            { name: 'JavaScript', icon: <box-icon name='javascript' type='logo' color='#22d3ee'></box-icon> },
                            { name: 'React', icon: <box-icon name='react' type='logo' color='#22d3ee'></box-icon> },
                            { name: 'C#', icon: <img alt="" loading="lazy" className="h-7 w-7" src="/img/c-sharp.svg"/> },
                            { name: 'TailwindCSS', icon: <box-icon name='tailwind-css' type='logo' color='#22d3ee'></box-icon> },
                        ].map((tech) => (
                            <div key={tech.name} className="flex items-center gap-3 p-3 rounded-xl bg-navy-700/30 border border-cyan-500/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300">
                                <div className="text-center">
                                    {tech.icon}
                                </div>
                                <span className="text-gray-300 font-medium text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={activeTab === 'idiomas' ? 'block' : 'hidden'}>
                <div className="glass-card p-6 text-center">
                    <p className="text-gray-400 text-lg">Proximamente...</p>
                </div>
            </div>
        </>
    );
};

export default TablasComponent;
