import { useState } from "react";
export default function MenuSection() {
  const menuImages = [
    require("../images/antipasti.png"),
    require("../images/clasiche.png"),
    require("../images/nostre-pizze.png"),
    require("../images/calzoni.png"),
    require("../images/dolci.png"),
  ];
  const menuText = [
    "LE CLASICHE",
    "I NOSTRI CALZONI",
    "ANTIPASTI",
    "LE NOSTRE PIZZE",
    "I DOLCI",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="menu-section">
      <div className="menu-top">
        <h1 className="section-title">
          EXPLORA EL <br />
          <span>MENU</span>
        </h1>
      </div>
      <figure className="menu-middle">
        {menuText.map((text, index) => (
          <h2 key={index} className="menu-text">
            {text}
          </h2>
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`grid-img-${i + 1}`}
            style={{ backgroundImage: `url(${menuImages[i]})` }}
            onClick={() => setSelectedImage(i)}
          >
            {selectedImage === i && <div className="overlay"></div>}
          </div>
        ))}
      </figure>
      <div className="menu-bottom">
        <button className="white-slide-btn border-btn">VER MENU</button>
      </div>
    </section>
  );
}
