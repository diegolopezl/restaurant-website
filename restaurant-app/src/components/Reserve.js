import ReserveForm from "./ReserveForm";
export default function Reserve() {
  return (
    <section className="reserve-section">
      <div id="res"></div>
      <div className="blur-bg"></div>
      <div className="reserve-top">
        <h1>RESERVA UNA MESA</h1>
      </div>
      <div className="reserve-bottom">
        <ReserveForm />
        <div className="time-info">
          <h4>HORARIO</h4>
          <div>
            <div className="horario">
              <p>Lunes a Jueves & Domingo</p>
              <p>12:00pm a 10:45pm</p>
            </div>
            <div className="horario">
              <p>Viernes & Sabado</p>
              <p>12:00pm a 11:00pm </p>
            </div>
            <span>Descanso de 5:00pm a 6:00pm (Sábado & Domingo.)</span>
          </div>
          <p>Av. Roberto Pastoriza #115, Santo Domingo</p>
        </div>
      </div>
    </section>
  );
}
