import "../styles/styles-footersection.css"

const FooterSection = () => {
    return (
        <>
            <footer className="p-3 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-between">
                            <a href="https://www.facebook.com/share/B5FaszuyboG8oVHr/?mibextid=LQQJ4d" target="_blank" className="text-light mx-2">
                                <i className="bx bxl-facebook-square bx-cssSize"/>
                            </a>
                            <a href="https://wa.me/5529180715?text=Hola%20me%20gustaría%20saber%20más%20información%20sobre..." target="_blank" className="text-light mx-2">
                                <i className="bx bxl-whatsapp bx-cssSize" />
                            </a>
                            <a href="https://www.instagram.com/_jorgerea_/" target="_blank" className="text-light mx-2">
                                <i className="bx bxl-instagram bx-cssSize" />
                            </a>
                            <a href="https://www.linkedin.com/in/jorgerea03/" target="_blank" className="text-light mx-2">
                                <i className="bx bxl-linkedin bx-cssSize" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterSection
