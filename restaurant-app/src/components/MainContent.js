import aboutImg from "../images/about-image.png";

export default function MainContent() {
  return (
    <main>
      <article className="about-section">
        <section>
          <h1 className="about-title">
            SOBRE <br />
            <span>IL CAMINETTO</span>
          </h1>
          <p className="about-description">
            Bienvenidos a il Caminetto, mi nombre es Francesco Curcio. Abri las
            puertas a finales de 2013, como objetivo principal hacer la mejor
            pizza usando tecnicas modernas y seleccionando los mejores
            ingredientes disponibles en el mercado. A finales de 2018 logre ser
            certificado como "Vera Pizza Napoletana" #755, por la Associazione
            Vera Pizza en Napoli, Italia. La unica pizzeria certificada en
            Republica Dominicana.
          </p>
        </section>
        <figure>
          <img src={aboutImg} alt="owner and pizza" />
        </figure>
      </article>
      <section>
        <div></div>
        <figure></figure>
        <div></div>
      </section>
      <section>
        <div></div>
        <div>
          <form></form>
          <div></div>
        </div>
      </section>
      <section>
        <div></div>
        <section></section>
      </section>
    </main>
  );
}
