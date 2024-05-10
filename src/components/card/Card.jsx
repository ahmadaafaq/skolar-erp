import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Zoom } from "@mui/material";

export default function BasicCard({ cardData }) {
  const [cardZoom, setCardZoom] = React.useState(false);
  return (
    <Card
      sx={{
        borderRadius: "20px",
        width: 200,
        zIndex: 1,
        height: 200,
        textAlign: "center",
        background: "#D5CFF4",
        boxShadow: "2px -3px 27px 15px rgba(0,0,0,0.55);",
        ...(cardZoom && {
          height: 210,
          width: 210,
          transition: "0.3s",
          background: "white",
        }),
      }}
      onMouseOver={() => setCardZoom(true)}
      onMouseOut={() => setCardZoom(false)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100px"
          image={cardData.img}
          alt="green iguana"
          sx={{
            width: "50%",
            display: "inline",
            borderRadius: "50%",
            marginTop: "10px",
          }}
        />
        <CardContent sx={{ padding: "0px" }}>
          <Typography
            gutterBottom
            variant="h4"
            sx={{ lineHeight: 1.2, marginBottom: "0px" }}
          >
            {cardData.number}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {cardData.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
