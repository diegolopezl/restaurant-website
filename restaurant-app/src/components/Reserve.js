import Form from "./Form";
export default function Reserve() {
  return (
    <section className="reserve-section">
      <div className="reserve-top">
        <h1>RESERVA UNA MESA</h1>
      </div>
      <div className="reserve-middle">
        <Form />
        <div></div>
      </div>
      <div className="reserve-bottom">
        <button className="white-slide-btn border-btn">RESERVAR</button>
      </div>
    </section>
  );
}
