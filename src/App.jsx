import "./App.css";
import { Carousel } from "./components/carousel/Carousel";
 
// import footer from "./components/footer/footer"
// import header from "./components/header/header"
// import Navbar from "./components/navbar/navbar"
// import { useState } from 'react'

import { slides } from "./components/data/carouselData.json"


function App() {
  return (
    <div className="App">
      {/* <navbar/> */}
      <Carousel data={slides} />
      
    </div>
  );
}

export default App;