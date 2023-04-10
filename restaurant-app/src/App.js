import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import ViewReservations from "./components/ViewReservations";
import AddReservations from "./components/AddReservations";
import DashboardHeader from "./components/DashboardHeader";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header position="absolute" />
      <Hero />
      <MainContent />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

function DashboardLayout() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let title = "Dashboard";
  if (location.pathname === "/dashboard/reservations") {
    title = "View Reservations";
  } else if (location.pathname === "/dashboard/add") {
    title = "Add Reservations";
  }

  return (
    <>
      {isMobile ? (
        <p>No access for mobile devices</p>
      ) : (
        <section className="dashboard">
          <Sidebar />
          <DashboardHeader title={title} />
          <div className="dashboard-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/reservations" element={<ViewReservations />} />
              <Route path="/add" element={<AddReservations />} />
            </Routes>
          </div>
        </section>
      )}
    </>
  );
}
