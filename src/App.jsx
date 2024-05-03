import React from 'react';
import { Carousel } from './components/carousel/Carousel';
import slidesData from './components/data/carouselData.json';
import Header from './components/header/Header'

function App() {
  const { slides } = slidesData;

  return (
    <div className="App">
      <Header />

      <Carousel data={slides} />
    </div>
  );
}

export default App;
