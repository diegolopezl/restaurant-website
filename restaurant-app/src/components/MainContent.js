import Menu from "./Menu";
import About from "./About";
import Reserve from "./Reserve";

export default function MainContent() {
  return (
    <main>
      <About />
      <Menu />
      <Reserve />
      <section>
        <div></div>
        <section></section>
      </section>
    </main>
  );
}
