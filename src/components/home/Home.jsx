import CardContainer from "../cardContainer/CardContainer";
import ImgCarousel from "../carousel/Carousel";
import ProductAndService from "../productAndService/ProductAndService";

import { cardData, sliderData, dataFact, clientsData } from "../../data/data";
import Fact from "../fact and figer/Fact";
import Clients from "../clientsdata/Clients";

export default function Home() {
    return (
        <>
            <ImgCarousel sliderImages={sliderData} />
            <CardContainer cardData={cardData} />
            <ProductAndService />
            <Fact dataFact={dataFact}/>
            <Clients clientsData={clientsData}/>
        </>
    )
}