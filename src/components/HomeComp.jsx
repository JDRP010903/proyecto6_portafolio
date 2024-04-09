import "../styles/styles-homecomp.css"

import fotoJorge from "../assets/images/fotoJorge.jpg"

const HomeComp = () => {
    return (
        <div className="home-section">
            <div className="row py-lg-5">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-lg-center imgSection">
                    <img src={fotoJorge} alt="Jorge Rea" className="img-fluid rounded-circle mb-3" style={{ maxWidth: '150px' }} />
                </div>
                <div className="col-12 col-md-6 sectionBody">
                    <h1 className="fw-light tituloHomeSection">Hola, soy Jorge</h1>
                    <p className="lead text-muted subtituloHomeSection">Desarrollador Full Stack JR | Freelancer</p>
                    <p className="parrafoHomeSection">Soy un desarrollador Junior con un enfoque fresco y entusiasta hacia la creación de soluciones tecnológicas innovadoras. Mi curiosidad insaciable y mi capacidad para aprender rápidamente me distinguen en el mundo del desarrollo de software. Como dijo Steve Jobs, &quot;La única forma de hacer un gran trabajo es amar lo que haces&quot;, y esa pasión es el motor de mi crecimiento profesional.</p>
                    <div className="d-flex justify-content-around">
                        <button  className="btn btn-custom2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contacta conmigo</button>
                        <a href="#portafolio" className="btn btn-custom2">Ver Portafolio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp
