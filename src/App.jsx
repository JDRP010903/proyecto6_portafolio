
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'boxicons/css/boxicons.min.css'

import "./styles/styles-general.css"

import HeaderComp from "./components/HeaderComp";
import HomeComp from "./components/HomeComp";
import ContactoModal from "./components/ContactoModal";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";

const App = () => {

  return (
    <>
      <HeaderComp />
      <main className="container-fluid">
        <section id="homeSection">
          <HomeComp />
        </section>

        <section id="aboutSection">
          <AboutSection />
        </section>
        
        <section id="portfolioSection">
          <PortfolioSection />
        </section>
        <ContactoModal />
      </main>
    </>
  )
}

export default App
