import { useState, useEffect } from "react";
export default function About() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowFullDescription(window.innerWidth >= 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
    const description = document.querySelector(".about-description");
    description.classList.toggle("expanded");
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    const reserveSection = document.getElementById("contact");
    reserveSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <article id="about" className="about-section">
      <section>
        <div className="about-top">
          <div className="corner-box top-left"></div>
          <h1 className="section-title">
            SOBRE <br />
            <span>IL CAMINETTO</span>
          </h1>
        </div>
        <div className="about-description">
          {showFullDescription ? (
            <div>
              <p>
                Bienvenidos a il Caminetto, mi nombre es Francesco Curcio. Abri
                las puertas a finales de 2013, como objetivo principal hacer la
                mejor pizza usando tecnicas modernas y seleccionando los mejores
                ingredientes disponibles en el mercado. A finales de 2018 logre
                ser certificado como "Vera Pizza Napoletana" #755, por la
                Associazione Vera Pizza en Napoli, Italia. La unica pizzeria
                certificada en Republica Dominicana.
              </p>
              <br />
              <p>
                La pizza que hacemos aqui en il Caminetto es napoletana,
                contiene solo 4 ingredientes: Agua, Levadura, Sal y Harina. La
                masa es fina, coccion de 50 segundos en horno hecho en Napoli,
                el resultado es una pizza que se derrite en la boca.
                <br />
                <br />
                <span className="read-more" onClick={toggleDescription}>
                  LEER MENOS
                </span>
              </p>
            </div>
          ) : (
            <div>
              <p>
                Bienvenidos a il Caminetto, mi nombre es Francesco Curcio. Abri
                las puertas a finales de 2013, como objetivo principal hacer la
                mejor pizza usando tecnicas modernas y seleccionando los mejores
                ingredientes disponibles en el mercado. A finales de 2018 logre
                ser certificado como "Vera Pizza Napoletana" #755, por la
                Associazione Vera Pizza en Napoli, Italia. La unica pizzeria
                certificada en Republica Dominicana.
                <br />
                <br />
                <span className="read-more" onClick={toggleDescription}>
                  LEER MAS
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="about-bottom">
          <a href="#contact">
            <button
              className="black-slide-btn border-btn"
              onClick={handleContactClick}
            >
              DIRECCION
            </button>
          </a>
          <div className="corner-box bottom-right"></div>
        </div>
      </section>
      <figure></figure>
    </article>
  );
}
