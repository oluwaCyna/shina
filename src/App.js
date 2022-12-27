import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Footer from "./Common/Footer";
import Navigation from "./Common/Navigation";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import SinglePortfolio from "./Pages/Portfolio/SinglePortfolio";
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
        <Route path="/single" element={<SinglePortfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
