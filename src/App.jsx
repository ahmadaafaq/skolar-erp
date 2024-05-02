import React from 'react';
import { Carousel } from './components/carousel/Carousel';
import slidesData from './components/data/carouselData.json';

function App() {
  const { slides } = slidesData;

  return (
    <div className="App">
      <h1>My App</h1>
      <Carousel data={slides} />
    </div>
  );
}

export default App;
