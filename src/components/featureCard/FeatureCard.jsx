import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

import { featureCardData } from "../../data/data";

export default function FeatureCard() {
  const [showMedia, setShowMedia] = React.useState(true);
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: "30px",
        paddingBottom: "40px",
      }}
    >
      {featureCardData.map((card, i) => (
        <Card
          sx={{
            maxWidth: 345,
            background: "#D5CFF4",
            boxShadow: "0px 4px 4px 0px",
            border: "1px solid #745fdb",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          {/* {shoMedia && ( */}
          <CardMedia
            sx={{
              height: 100,
              borderRadius: "50%",
              width: "30%",
              margin: "0 auto",
            }}
            image={card.img}
            title={card.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Manual Examination
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our module showcases a comprehensive list featuring vehicle
              number, maximum seat allocation, insurance renewal date, contact
              number, and driver details.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
