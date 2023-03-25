import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";
export default function App() {
  return (
    <>
      <Header position="absolute" />
      <Hero />
      <MainContent />
      <Footer />
    </>
  );
}
