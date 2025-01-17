import { Container } from "@mui/material";
import { featureCardData } from "../../data/data";
import FeatureCardItem from "./featureCardItem";

export default function FeatureCard() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center", // Center cards horizontally
        rowGap: "7vh",
        columnGap: "20px", // Add horizontal spacing between cards
        padding: { xs: "5vh 2vh", sm: "8vh 5vh", md: "10vh 20vh" }, // Adjust padding for different screen sizes
      }}
    >
      {featureCardData.map((card, i) => (
        <FeatureCardItem card={card} key={i} />
      ))}
    </Container>
  );
}
