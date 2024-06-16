import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Partners from "./sections/Partners";
import Reviews from "./sections/Reviews";
import FinanceForm from "./sections/FinanceForm";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/remittance" element={<FinanceForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Partners />
      <Reviews />
    </>
  );
}

export default App;
