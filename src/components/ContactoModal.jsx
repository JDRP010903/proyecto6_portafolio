import "../styles/styles-contactomodal.css"

const ContactoModal = () => {
    return (
        <>
            { /* Modal */ }
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Contacto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="contactName" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="contactName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactEmail" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="contactEmail" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactSubject" className="form-label">Asunto</label>
                                <input type="text" className="form-control" id="contactSubject" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactMessage" className="form-label">Mensaje</label>
                                <textarea type="text" className="form-control" id="contactMessage" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-custom">Enviar</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactoModal
