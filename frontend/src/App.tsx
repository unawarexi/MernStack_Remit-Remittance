import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Partners from "./sections/Partners";
import Reviews from "./sections/Reviews";
import FinanceForm from "./sections/FinanceForm";
import ConfirmID from "./sections/confirmation/ConfirmID";
import "./App.css";

import MainHeroImage from "./assets/MainHeroImage.jpg";
import sub1 from "./assets/sub1.png";
import sub2 from "./assets/sub2.png";
import card1 from "./assets/card1-removebg-preview.png";
import card2 from "./assets/card2-removebg-preview.png";
import cluster from "./assets/cluster.png";

function App() {
  return (
    <Router basename="frontend">
      <Nav />
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/remittance" element={<FinanceForm />} />
        <Route path="/verification" element={<ConfirmID />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function LandingPage() {
  return (
    <>
      <Hero
        MainHeroImage={MainHeroImage}
        cluster={cluster}
        card1={card1}
        card2={card2}
        sub1={sub1}
        sub2={sub2}
      />
      <Features />
      <Partners />
      <Reviews />
    </>
  );
}

export default App;
