import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Navbar/Nav";
import About from "./Containers/Aboutcontainer/About";
import Contact from "./Containers/ContactContainer/Contact";
import Home from "./Containers/HomeContainer/Home";
import Portfolio from "./Containers/PortfolioContainer/Portfolio";
import Service from "./Containers/ServiceContainer/Service";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
