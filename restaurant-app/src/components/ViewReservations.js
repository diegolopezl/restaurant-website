import React, { useState, useEffect } from "react";
import {
  MdBlock,
  MdDone,
  MdPendingActions,
  MdDeleteOutline,
} from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";

export default function ViewReservations() {
  const [reservations, setReservations] = useState([]);
  const [counts, setCounts] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    cancelled: 0,
  });

  useEffect(() => {
    fetch("/api/reservations")
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
        setCounts(
          data.reduce(
            (prev, cur) => {
              prev.total += 1;
              prev[cur.estado.toLowerCase()] += 1;
              return prev;
            },
            { total: 0, pending: 0, completed: 0, cancelled: 0 }
          )
        );
      })
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div className="reservation-stats">
        <div className="reservation-stats-item">
          <div>
            <TbCalendarTime className="stat-icon" />
          </div>
          <div>
            <p className="res-amt">{counts.total}</p>
            <p className="res-type">Total Reservations</p>
          </div>
        </div>
        <div className="reservation-stats-item">
          <div>
            <MdPendingActions className="stat-icon" />
          </div>
          <div>
            <p className="res-amt">{counts.pending}</p>
            <p className="res-type">Pending Reservations</p>
          </div>
        </div>
        <div className="reservation-stats-item">
          <div>
            <AiOutlineFileDone className="stat-icon" />
          </div>
          <div>
            <p className="res-amt">{counts.completed}</p>
            <p className="res-type">Completed Reservations</p>
          </div>
        </div>
        <div className="reservation-stats-item">
          <div>
            <MdDeleteOutline className="stat-icon" />
          </div>
          <div>
            <h1 className="res-amt">{counts.cancelled}</h1>
            <h4 className="res-type">Cancelled Reservations</h4>
          </div>
        </div>
      </div>
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
              <div className="table-data">{reservation.reservaID}</div>
              <div className="table-data">{reservation.nombre}</div>
              <div className="table-data">{reservation.num_personas}</div>
              <div className="table-data">{reservation.estado}</div>
              <div className="table-data">{formatDate(reservation.dia)}</div>
              <div className="table-data">{reservation.tiempo}</div>
              <div className="action-col table-data">
                <button
                  onClick={() =>
                    handleStatusChange(reservation.reservaID, "Completed")
                  }
                >
                  <MdDone className="done-btn action-btn" />
                </button>
                <button
                  onClick={() =>
                    handleStatusChange(reservation.reservaID, "Pending")
                  }
                >
                  <HiOutlineDotsHorizontal className="pending-btn action-btn" />
                </button>
                <button
                  onClick={() =>
                    handleStatusChange(reservation.reservaID, "Cancelled")
                  }
                >
                  <MdBlock className="cancel-btn action-btn" />
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
