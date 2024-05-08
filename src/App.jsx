import ResponsiveAppBar from "./components/appbar/Appbar";
import ImgCarousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import ProductAndService from "./components/productAndService/ProductAndService";
import CardContainer from "./components/cardContainer/CardContainer";
import { cardData, sliderData } from "./data/data";

import "./app.css";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <ImgCarousel sliderImages={sliderData} />
      <CardContainer cardData={cardData} />
      <ProductAndService />
      <Footer />
    </>
  );
};

export default App;
