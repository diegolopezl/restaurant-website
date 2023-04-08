import Menu from "./Menu";
import About from "./About";
import Reserve from "./Reserve";

export default function MainContent() {
  return (
    <main>
      <About />
      <Menu />
      <Reserve />
      <section className="order-section">
        <div className="order-img"></div>
        <section className="order-txt">
          <div className="order-top">
            <h1 className="section-title">
              PUEDES ORDENAR <br />
              <span>EN LINEA</span>
            </h1>
          </div>
          <div className="order-middle">
            <p>
              Puedes ordenar para Retiro o Delivery aqui en nuestra pagina,
              PedidosYa y Uber Eats. Nuestro horario es de 12:00PM - 9:00PM de
              Lunes a Domingo
            </p>
          </div>
          <div className="order-bottom">
            <button className="black-slide-btn border-btn">ORDENAR</button>
          </div>
        </section>
      </section>
    </main>
  );
}
