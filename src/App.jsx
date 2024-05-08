
import {Routes , Route } from "react-router-dom" 

import Home from "./components/home/Home";
import ResponsiveAppBar from "./components/appbar/Appbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Advantages from "./components/advantages/Advantages";

import "./app.css";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advantage-of-school" element={<Advantages />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
