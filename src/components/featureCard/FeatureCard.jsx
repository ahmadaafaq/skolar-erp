import { Container } from "@mui/material";

import { featureCardData } from "../../data/data";
import FeatureCardItem from "./featureCardItem";

export default function FeatureCard() {
  return (
    <Container
      maxWidth={"false"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        rowGap: "7vh",
        padding: "10vh 20vh",
      }}
    >
      {featureCardData.map((card, i) => (
        <FeatureCardItem card={card} key={i} />
      ))}
    </Container>
  );
}
