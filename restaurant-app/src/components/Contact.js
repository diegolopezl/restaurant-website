import { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import axios from "axios";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [contactForm, setContactForm] = useState(false);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/send-email", formData);
      setFormSubmitted(true);
      setFormError(false);
    } catch (error) {
      console.log(error);
      setFormError(true);
      setFormSubmitted(false);
    }
  };

  const toggleForm = () => {
    setContactForm(!contactForm);
    setFormError(false);
    setFormSubmitted(false);
  };

  if (contactForm) {
    document.body.classList.add("show-form");
  } else {
    document.body.classList.remove("show-form");
  }

  return (
    <section id="contact" className="page-contact">
      <article className="contact-info">
        <h1>CONTACTO</h1>
        <p>
          Av. Roberto Pastoriza #115 esq. Alberto Larancuent, Plaza Peniel,
          Santo Domingo
        </p>
        <p>
          <FaPhone /> Tel. (809) 732-5219
        </p>
        <p>
          <FaEnvelope /> ilcaminettord@gmail.com
        </p>
        <div className="social-media">
          <a
            href="https://www.instagram.com/ilcaminettord/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://web.facebook.com/ilcaminettord/?_rdc=1&_rdr"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </div>
        <button
          className="white-slide-btn border-btn show-contact-form"
          onClick={toggleForm}
        >
          ENVIANOS UN MENSAJE
        </button>
      </article>
      <div className="map">
        <iframe
          title="Mapa con la ubicacion del Restaurante"
          className="google-map"
          src="https://snazzymaps.com/embed/473738"
        ></iframe>
      </div>
      {contactForm && (
        <div className="modal">
          <div onClick={toggleForm} className="overlay"></div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <button className="hide-form" onClick={toggleForm}>
              <HiXMark />
            </button>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              placeholder="NOMBRE"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              placeholder="CORREO ELECTRONICO"
              required
            />
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={handleInputChange}
              placeholder="ASUNTO"
              required
            />
            <textarea
              id="message"
              name="message"
              onChange={handleInputChange}
              placeholder="MENSAJE"
              required
            ></textarea>
            {formSubmitted && (
              <p className="contact-feedback success-message">
                Gracias por contactarnos. Te responderemos pronto.
              </p>
            )}
            {formError && (
              <p className="contact-feedback error-message">
                Error al enviar el mensaje. Inténtelo de nuevo más tarde.
              </p>
            )}
            {!formSubmitted && !formError && (
              <button type="submit" className="black-slide-btn border-btn">
                ENVIAR
              </button>
            )}
          </form>
        </div>
      )}
    </section>
  );
}
