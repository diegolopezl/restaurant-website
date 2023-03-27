import { useState } from "react";

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/api/reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, numPeople, date, time }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <form className="reserve-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="NOMBRE"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="CANT. DE PERSONAS"
        value={numPeople}
        onChange={(e) => setNumPeople(e.target.value)}
      />
      <input
        type="date"
        placeholder="DIA"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        placeholder="HORA"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit" className="white-slide-btn border-btn">
        RESERVAR
      </button>
    </form>
  );
}
