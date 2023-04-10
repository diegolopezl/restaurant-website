import React, { useState, useEffect } from "react";

export default function ViewReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data))
      .catch((err) => console.error("Error fetching reservations: ", err));
  }, []);

  const handleStatusChange = (id, newStatus) => {
    fetch(`/api/reservations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ estado: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        // update the reservations array with the updated reservation
        setReservations((prevReservations) =>
          prevReservations.map((reservation) =>
            reservation.reservaID === id
              ? { ...reservation, estado: newStatus }
              : reservation
          )
        );
      })
      .catch((err) =>
        console.error("Error updating reservation status: ", err)
      );
  };

  return (
    <div className="reservations">
      <div className="reservation-grid">
        <div className="grid-header">ID</div>
        <div className="grid-header">Name</div>
        <div className="grid-header"># of People</div>
        <div className="grid-header">Status</div>
        <div className="grid-header">Date</div>
        <div className="grid-header">Time</div>
        <div className="grid-header">Action</div>
        {reservations.map((reservation) => (
          <React.Fragment key={reservation.reservaID}>
            <div>{reservation.reservaID}</div>
            <div>{reservation.nombre}</div>
            <div>{reservation.num_personas}</div>
            <div>{reservation.estado}</div>
            <div>{reservation.dia}</div>
            <div>{reservation.tiempo}</div>
            <div>
              <button
                onClick={() =>
                  handleStatusChange(reservation.reservaID, "completed")
                }
              >
                Complete
              </button>
              <button
                onClick={() =>
                  handleStatusChange(reservation.reservaID, "pending")
                }
              >
                Pending
              </button>
              <button
                onClick={() =>
                  handleStatusChange(reservation.reservaID, "cancelled")
                }
              >
                Cancel
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
