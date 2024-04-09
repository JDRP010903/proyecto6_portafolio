import { useState } from 'react';

import "../styles/styles-contactomodal.css"

const ContactoModal = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Gestiona el cambio en los campos del formulario, actualizando el estado
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Limpia los campos del formulario reseteando el estado
    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowMessage(true);

        resetForm();

        setTimeout(() => {
            setShowMessage(false);
        }, 5000);
    };


    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Contacto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        { showMessage && <div className="alert alert-success">Tu mensaje ha sido enviado exitosamente.</div> }
                            <form onSubmit={handleSubmit} action="https://formsubmit.co/danireaprado@gmail.com" method="POST">
                                <input type="hidden" name="_captcha" value="false" />
                                <div className="mb-3">
                                    <label htmlFor="contactName" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="contactName" value={formData.name} onChange={handleChange} name="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactEmail" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="contactEmail" value={formData.email} onChange={handleChange} name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactSubject" className="form-label">Asunto</label>
                                    <input type="text" className="form-control" id="contactSubject" value={formData.subject} onChange={handleChange} name="subject" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactMessage" className="form-label">Mensaje</label>
                                    <textarea className="form-control" id="contactMessage" name="message" value={formData.message} onChange={handleChange} rows="3" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-custom">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactoModal;
