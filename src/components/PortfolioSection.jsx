import proyecto1 from "../assets/images/proyecto1.png"
import proyecto2 from "../assets/images/proyecto2.png"
import proyecto3 from "../assets/images/proyecto3.png"
import proyecto4 from "../assets/images/proyecto4.png"
import proyecto5 from "../assets/images/proyecto5.png"
import proyecto6 from "../assets/images/proyecto6.png"

import "../styles/styles-portfoliosection.css"

const PortfolioSection = () => {

    const proyectos = [
        {
            titulo: "PROYECTO 1: Landing de Negocio",
            descripcion: 'Este proyecto está enfocado en construir una página "landing" para un negocio.',
            tecnologias: ["HTML", "CSS", "JavaScript"],
            imagen: proyecto1,
            demoUrl: "https://jdrp010903.github.io/LandingPage/",
        },
        {
            titulo: "PROYECTO 2: Aplicación CRUD",
            descripcion: 'Este proyecto está enfocado en construir un sistema CRUD, donde los datos se almacenan en el localStorage',
            tecnologias: ["HTML", "CSS", "JavaScript"],
            imagen: proyecto2,
            demoUrl: "https://jdrp010903.github.io/proyecto2_sistemaCRUD/",
        },
        {
            titulo: "PROYECTO 3: Tablero de Datos (Dashboard)",
            descripcion: 'Este proyecto está enfocado en construir un dashboard, consumiendo una API de criptomonedas para mostrar datos',
            tecnologias: ["HTML", "CSS", "JavaScript"],
            imagen: proyecto3,
            demoUrl: "https://lyerena07.github.io/PROY3-API-COINCAP--MOD2/",
        },
        {
            titulo: "PROYECTO 4: Aplicación Restaurante",
            descripcion: 'Este proyecto está enfocado en construir una aplicación web para un restaurante, permitiendo reservar, pedir para pick up y enviar sugerencias, almacenando todo en una base de datos',
            tecnologias: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
            imagen: proyecto4,
            demoUrl: "https://main--dapper-cheesecake-95446d.netlify.app/",
        },
        {
            titulo: "PROYECTO 5: Aplicación de Comercio Electrónico",
            descripcion: 'Este proyecto está enfocado en construir una aplicación web para un comercio electrónico. Permitiendo el registro de usuarios e inicio de sesión, añadir productos al carrito de compras y pagar con una extensión de PayPal. Almacenando todo en una base de datos no relacionañ',
            tecnologias: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "NodeJS"],
            imagen: proyecto5,
            demoUrl: "https://main--melodious-starlight-87f715.netlify.app/",
        },
        {
            titulo: "PROYECTO 6: Portafolio",
            descripcion: 'Este proyecto está enfocado en construir un portafolio donde se muestran todos mis proyectos',
            tecnologias: ["HTML", "CSS", "JavaScript", "React"],
            imagen: proyecto6,
            demoUrl: "https://dazzling-dieffenbachia-6061ea.netlify.app/",
        }

    ];


    return (
        <>
            <div className="mt-5 portfolioSection">
                <h1 className="text-center mb-5 portfolio-title">PORTAFOLIO</h1>
                <div className="row">
                    {proyectos.map((proyecto, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 shadow-sm portfolio-card">
                                <img src={proyecto.imagen} className="card-img-top portfolio-image" alt={proyecto.titulo} />
                                <div className="card-body">
                                    <h5 className="card-title portfolio-project-title">{proyecto.titulo}</h5>
                                    <p className="card-text portfolio-project-description">{proyecto.descripcion}</p>
                                    <p className="card-text"><small className="text-muted">Tecnologías: {proyecto.tecnologias.join(', ')}</small></p>
                                </div>
                                <div className="card-footer bg-white d-flex justify-content-center">
                                    <a href={proyecto.demoUrl} className="btn btn-custom2    d-flex justify-content-center w-100" target="_blank" rel="noopener noreferrer">Ver Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default PortfolioSection
