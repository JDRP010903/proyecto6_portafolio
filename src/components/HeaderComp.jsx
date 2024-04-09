import { Link } from 'react-scroll';

import "../styles/styles-headercomp.css"

const HeaderComp = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg border-bottom border-body p-3 mb-5" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="homeSection" style={{cursor: 'pointer'}}>Jorge Rea</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-100 align-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navList">
                            <li className="nav-item">
                                <Link to="homeSection" className="nav-link" aria-current="page" spy={true} smooth={true} duration={500}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="aboutSection" className="nav-link" spy={true} smooth={true} duration={500}>Sobre mí</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="portfolioSection" className="nav-link" aria-current="page" spy={true} smooth={true} duration={500}>Portafolio</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contacto</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComp
