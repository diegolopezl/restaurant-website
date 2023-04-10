import React from "react";
import { RxDashboard, RxClipboard, RxExit } from "react-icons/rx";
import { RiPlayListAddLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="dashboard-sidebar">
      <h2>Admin</h2>
      <ul className="dashboard-routes">
        <li>
          <Link
            to="/dashboard"
            className={
              "dashboard-link " +
              (location.pathname === "/dashboard" ? "active-link" : "")
            }
          >
            <RxDashboard className="dashboard-route-icon" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/reservations"
            className={
              "dashboard-link " +
              (location.pathname === "/dashboard/reservations"
                ? "active-link"
                : "")
            }
          >
            <RxClipboard className="dashboard-route-icon" />
            Reservations
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/add"
            className={
              "dashboard-link " +
              (location.pathname === "/dashboard/add" ? "active-link" : "")
            }
          >
            <RiPlayListAddLine className="dashboard-route-icon" />
            Add Reservation
          </Link>
        </li>
      </ul>
      <Link to="/" className="back-home">
        <RxExit className="dashboard-route-icon" />
        Exit to Home Page
      </Link>
    </aside>
  );
}
