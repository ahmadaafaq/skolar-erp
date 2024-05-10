import CardContainer from "../cardContainer/CardContainer";
import ImgCarousel from "../carousel/Carousel";
import ProductAndService from "../productAndService/ProductAndService";
import Fact from "../fact and figer/Fact";
import Clients from "../clientsdata/Clients";

import { cardData, sliderData, factData, clientData} from "../../data/data"

export default function Home() {
    return (
        <>
            <ImgCarousel sliderImages={sliderData} />
            <CardContainer cardData={cardData} />
            <ProductAndService />
            <Fact factData={factData}/>
            <Clients clientsData={clientData}/>

        </>
    )
}