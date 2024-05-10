
import {Routes , Route } from "react-router-dom" 

import Home from "./components/home/Home";
import ResponsiveAppBar from "./components/appbar/Appbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

import "./app.css";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
