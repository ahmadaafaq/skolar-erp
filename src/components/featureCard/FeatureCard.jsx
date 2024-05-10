import { Container } from "@mui/material";

import { featureCardData } from "../../data/data";
import FeatureCardItem from "./featureCardItem";

export default function FeatureCard() {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: "30px",
        padding: "50px 20px",
      }}
    >
      {featureCardData.map((card, i) => (
        <FeatureCardItem card={card} key={i} />
      ))}
    </Container>
  );
}
