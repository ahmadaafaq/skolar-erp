import CardContainer from "../cardContainer/CardContainer";
import ImgCarousel from "../carousel/Carousel";
import ProductAndService from "../productAndService/ProductAndService";
import FeatureCard from "../featureCard/FeatureCard";

import { cardData, sliderData, featureCardData } from "../../data/data";

export default function Home() {
  return (
    <>
      <ImgCarousel sliderImages={sliderData} />
      <CardContainer cardData={cardData} />
      <ProductAndService />
      <FeatureCard featureCardData={featureCardData} />
    </>
  );
}
