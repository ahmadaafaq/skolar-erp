import Carousel from "react-material-ui-carousel";
import Item from "../item/Item";

export default function ImgCarousel({ sliderImages }) {
  return (
    <Carousel autoPlay={true} sx={{ width: "100%" }}>
      {sliderImages.map((item, i) => (
        <Item
          key={i}
          src={item.img}
          title={item.title}
          subTitle={item.subTitle}
        />
      ))}
    </Carousel>
  );
}
