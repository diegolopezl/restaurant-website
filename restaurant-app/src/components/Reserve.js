import Form from "./Form";
export default function Reserve() {
  return (
    <section className="reserve-section">
      <div className="reserve-top">
        <h1>RESERVA UNA MESA</h1>
      </div>
      <div className="reserve-bottom">
        <Form />
        <div className="time-info">
          <h4>HORARIO</h4>
          <div>
            <span>Lunes a Jueves & Domingo</span>
            <p>12:00pm a 10:45pm</p>
            <span>Viernes & Sabado</span>
            <p>12:00pm a 11:00pm </p>
            <span>Descanso de 5:00pm a 6:00pm (Sábado & Domingo.)</span>
          </div>
          <p>Av. Roberto Pastoriza #115, Santo Domingo</p>
        </div>
      </div>
    </section>
  );
}
