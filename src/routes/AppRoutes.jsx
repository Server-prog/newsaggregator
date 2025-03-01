import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Details from "../pages/Details";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
