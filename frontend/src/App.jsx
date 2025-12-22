import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Menu />

      <section className="info-grid">
        <div>
          <Reservation />
          <Contact />
        </div>
        <About />
      </section>

      <Footer />
    </>
  );
}

export default App;

