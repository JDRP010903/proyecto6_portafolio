import { useState } from "react"

import "../styles/styles-aboutsection.css"

const AboutSection = () => {
    const [activeTab, setActiveTab] = useState('quienSoy');

    return (
        <>
            <h1 className="text-center mt-5">SOBRE MÍ</h1>
            <div className="aboutSection">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'quienSoy' ? 'active' : ''}`}
                            onClick={() => setActiveTab('quienSoy')}
                        >
                            Quién soy
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'habilidades' ? 'active' : ''}`}
                            onClick={() => setActiveTab('habilidades')}
                        >
                            Mis habilidades
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'conocimientos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('conocimientos')}
                            >
                            Mis conocimientos
                        </button>
                    </li>
                </ul>

                <div className="tab-content mt-3">
                    <div className={`tab-pane fade ${activeTab === 'quienSoy' ? 'show active' : ''}`}>
                        <h2>Quién soy</h2>
                        <hr />
                        <p>Soy un estudiante de Ingeniería en Tecnologías Computacionales en el Tecnológico de Monterrey y desarrollador Full Stack Junior con experiencia en HIR Seguros y Johnson Controls Inc. Destaco en la automatización de procesos y el desarrollo de aplicaciones web, respaldado por un dominio de C++, C#, Python, Java, JavaScript, PHP, R, Matlab, Clojure, Kotlin, así como en herramientas clave como Arduino IDE, Android Studio, Unity, y plataformas como AWS y Google Cloud. Mi educación y experiencia laboral me han permitido desarrollar soluciones tecnológicas innovadoras, mientras continúo ampliando mis habilidades en las últimas tecnologías y prácticas, incluidos NodeJS, Express, y React.</p>
                    </div>

                    <div className={`tab-pane fade ${activeTab === 'habilidades' ? 'show active' : ''}`}>
                        <h2>Habilidades Clave</h2>
                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Tecnologías Principales</h4>
                                <ul className="list-unstyled">
                                    <li><i className="bx bxl-python"></i> Python - Desarrollo backend y automatización</li>
                                    <li><i className="bx bxl-javascript"></i> JavaScript - Desarrollo Full Stack</li>
                                    <li><i className="bx bxl-react"></i> React - Interfaces de usuario modernas</li>
                                    <li><i className="bx bxl-nodejs"></i> NodeJS - Aplicaciones en tiempo real</li>
                                    <li><i className="bx bxl-html5"></i> HTML + <i className="bx bxl-css3"></i> CSS - Estructura y estilo web</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h4>Habilidades Blandas Destacadas</h4>
                                <ul className="list-unstyled">
                                    <li><i className="bx bx-rocket"></i> Iniciativa - Emprender proyectos y soluciones innovadoras</li>
                                    <li><i className="bx bx-group"></i> Trabajo en equipo - Colaborar eficazmente con diversidad de equipos</li>
                                    <li><i className="bx bx-check"></i> Resolución de problemas - Enfoque analítico para soluciones efectivas</li>
                                    <li><i className="bx bx-chat"></i> Comunicación - Expresar ideas claramente y escuchar activamente</li>
                                    <li><i className="bx bx-adjust"></i> Adaptabilidad - Flexibilidad ante los cambios y desafíos</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`tab-pane fade ${activeTab === 'conocimientos' ? 'show active' : ''}`}>
                        <h2>Mis conocimientos</h2>
                        <hr />
                        <p>Como estudiante de Ingeniería en Tecnologías Computacionales en el ITESM y desarrollador Full Stack JR, he adquirido una base sólida en múltiples áreas del desarrollo tecnológico y la innovación. Aquí hay un resumen de mis conocimientos y experiencias más relevantes:</p>
                        
                        <h4>Educación y formación continua:</h4>
                        <ul>
                            <li>Formación en Ingeniería en Tecnologías Computacionales, especializado en desarrollo de software y tecnologías emergentes.</li>
                            <li>Curso de Python Total en Udemy, que me proporcionó una comprensión profunda del desarrollo backend y automatización de procesos.</li>
                            <li>Participación activa en cursos de desarrollo web, programación en C++, y redes, ampliando mis habilidades en desarrollo full stack y comprensión de infraestructura de red.</li>
                        </ul>

                        <h4>Experiencia Profesional:</h4>
                        <ul>
                            <li>Desarrollo Full Stack con Python, JavaScript y React en HIR Seguros, enfocado en soluciones eficientes para el lado del cliente y del servidor.</li>
                            <li>Automatización de procesos y administración de plataformas en Johnson Controls Inc., logrando una notable optimización y eficiencia operativa.</li>
                        </ul>

                        <h4>Proyectos Destacados:</h4>
                        <ul>
                            <li>Implementación de IoT para la medición de calidad del aire, aplicando conocimientos de sensores y análisis de datos en tiempo real.</li>
                            <li>Desarrollo de una página web y videojuego educativo para demostrar la diversión en la programación, utilizando herramientas como Unity y Android Studio.</li>
                            <li>Desarrollo de una aplicación móvil y web para DIF Atizapán, mejorando la accesibilidad a los servicios comunitarios.</li>
                        </ul>

                        <p>Estos conocimientos y experiencias reflejan mi compromiso con la excelencia, la innovación y el aprendizaje continuo en el campo de las tecnologías computacionales.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutSection
