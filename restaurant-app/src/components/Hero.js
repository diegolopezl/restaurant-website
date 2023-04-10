import arrow from "../images/arrow-hero.svg";

export default function Hero() {
  const handleReserveClick = (event) => {
    event.preventDefault();
    const reserveSection = document.getElementById("reserve");
    reserveSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="page-hero">
      <div className="page-title">
        <h1>IL CAMINETTO</h1>
        <h2>── FRANCESCO CURCIO ──</h2>
      </div>
      <div className="call-to-action">
        <a href="#reserve" onClick={handleReserveClick}>
          <button className="white-slide-btn border-btn">RESERVA AHORA</button>
        </a>
        <img className="arrow-hero" src={arrow} alt="arrow" />
      </div>
    </section>
  );
}
