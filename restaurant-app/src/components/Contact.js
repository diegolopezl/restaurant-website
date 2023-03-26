import {
  FaFacebookSquare,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
export default function Contact() {
  return (
    <section className="page-contact">
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
          <FaInstagram />
          <FaFacebookSquare />
        </div>
        <button className="white-slide-btn border-btn">
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
    </section>
  );
}
