
import { Routes, Route } from "react-router-dom"

import Home from "./components/home/Home";
import ResponsiveAppBar from "./components/appbar/Appbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { ThemeProvider } from "@mui/material";

import { useMode } from "./theme"

import "./app.css";

const App = () => {
  const [theme] = useMode()

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
