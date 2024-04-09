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
                            <a href="https://twitter.com" target="_blank" className="text-light mx-2">
                                <i className="bx bxl-twitter bx-cssSize" />
                            </a>
                            <a href="https://instagram.com" target="_blank" className="text-light mx-2">
                                <i className="bx bxl-instagram bx-cssSize" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" className="text-light mx-2">
                                <i className="bx bxl-tiktok bx-cssSize" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterSection
