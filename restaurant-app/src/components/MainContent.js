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
          <p className="order-middle">
            Puedes ordenar para Retiro o Delivery por PedidosYa y Uber Eats.
            Nuestro horario es de 12:00PM - 9:00PM de Lunes a Domingo
          </p>
        </section>
      </section>
    </main>
  );
}
