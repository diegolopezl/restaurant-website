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

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
    toggleNav();
  };

  return (
    <header className="page-header" style={{ position }}>
      <button className="nav-btn nav-toggle" onClick={toggleNav}>
        {showNav ? <HiXMark /> : <HiBars3CenterLeft />}
      </button>
      <nav ref={navbarRef} className={`nav-bar ${showNav ? "show-nav" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={handleClick}>
              HOME
            </a>
          </li>
          <li>
            <a href="#menu" onClick={handleClick}>
              MENU
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleClick}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClick}>
              CONTACTO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
