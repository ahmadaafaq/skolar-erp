import CardContainer from "../cardContainer/CardContainer";
import ImgCarousel from "../carousel/Carousel";
import ProductAndService from "../productAndService/ProductAndService";

import { cardData, sliderData } from "../../data/data";

export default function Home() {
    return (
        <>
            <ImgCarousel sliderImages={sliderData} />
            <CardContainer cardData={cardData} />
            <ProductAndService />
        </>
    )
}