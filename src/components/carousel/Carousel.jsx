import Carousel from "react-material-ui-carousel";
import Item from "../item/Item";

export default function ImgCarousel({ sliderImages }) {
  return (
    <Carousel autoPlay={true} height="80vh" sx={{ width: "100%" }}>
      {/* we are running loop of sliderImages array,and populating the data(object) */}
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
