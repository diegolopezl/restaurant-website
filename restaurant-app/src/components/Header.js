import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { useRef, useState } from "react";

export default function Header({ position }) {
  const navbarRef = useRef();
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
    if (!showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };
  return (
    <header className="page-header" style={{ position }}>
      <button className="nav-btn nav-toggle" onClick={toggleNav}>
        {showNav ? <HiXMark /> : <HiBars3CenterLeft />}
      </button>
      <nav ref={navbarRef} className={`nav-bar ${showNav ? "show-nav" : ""}`}>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#menu">MENU</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACTO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
