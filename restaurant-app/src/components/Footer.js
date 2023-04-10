export default function Footer() {
  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="page-footer">
      <div className="footer-line"></div>
      <div className="footer-items">
        <div className="links">
          <a href="#home" onClick={handleClick}>
            HOME
          </a>
          <a href="#menu" onClick={handleClick}>
            MENU
          </a>
          <a href="#about" onClick={handleClick}>
            ABOUT
          </a>
          <a href="#contact" onClick={handleClick}>
            CONTACTO
          </a>
        </div>
        <div className="copyright">
          <p>2023 © IL CAMINETTO</p>
        </div>
      </div>
    </footer>
  );
}
