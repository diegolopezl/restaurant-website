import { useState } from "react";

export default function ReserveForm() {
  const [name, setName] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/api/reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, numPeople, date, time }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFormSubmitted(true);
        setName("");
        setNumPeople("");
        setDate("");
        setTime("");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Error submitting reservation. Please try again.");
      });
  }

  return (
    <form className="reserve-form" onSubmit={handleSubmit}>
      {formSubmitted ? (
        <p className="reserve-feedback">Su reservacion ha sido enviada!</p>
      ) : (
        <p className="reserve-feedback error">{errorMessage}</p>
      )}
      <input
        type="text"
        placeholder="NOMBRE"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="NUMERO DE PERSONAS"
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
