import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Footer from "./Common/Footer";
import Navigation from "./Common/Navigation";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Avatour from "./Pages/Portfolio/Avatour";
import Ecare from "./Pages/Portfolio/Ecare";
import Ecommerce from "./Pages/Portfolio/Ecommerce";
import Jasmin from "./Pages/Portfolio/Jasmin";
import Radical from "./Pages/Portfolio/Radical";
import Resturant from "./Pages/Portfolio/Resturant";
import Ronnies from "./Pages/Portfolio/Ronnies";
import WebsitePortfolio from "./Pages/Portfolio/WebsitePortfolio";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/portfolio" element={<WebsitePortfolio />} />
        <Route path="/portfolio/ronnieshouseforhope" element={<Ronnies />} />
        <Route path="/portfolio/jasminshah" element={<Jasmin />} />
        <Route path="/portfolio/resturant" element={<Resturant />} />
        <Route path="/portfolio/ecare" element={<Ecare />} />
        <Route path="/portfolio/radicalgrief" element={<Radical />} />
        <Route path="/portfolio/press" element={<Avatour />} />
        <Route path="/portfolio/ecommerce" element={<Ecommerce />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
