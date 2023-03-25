import arrow from "../images/arrow-hero.svg";
export default function Hero() {
  return (
    <section className="page-hero">
      <div className="page-title">
        <h1>IL CAMINETTO</h1>
        <h2>── FRANCESCO CURCIO ──</h2>
      </div>
      <div className="call-to-action">
        <button className="white-slide-btn border-btn">RESERVA AHORA</button>
        <img className="arrow-hero" src={arrow} alt="arrow" />
      </div>
    </section>
  );
}
