import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function BasicCard({ cardData }) {
  // const [cardZoom, setCardZoom] = React.useState(false);
  return (
    <Card
      sx={{
        borderRadius: "20px",
        width: "35vw",
        zIndex: 1,
        height: "35vh",
        textAlign: "center",
        boxShadow: "2px -3px 27px 15px rgba(0,0,0,0.55);",
        transition: "transform 0.2s ease-in-out",
        backgroundImage: "url('gradient.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ":hover": {
          transform: "scale(1.1)",
          backgroundImage: "url('gradient.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={cardData.img}
          alt="green iguana"
          sx={{
            height: "17vh",
            width: "18vh",
            display: "inline",
            borderRadius: "50%",
            marginTop: "2vh",
          }}
        />
        <CardContent sx={{ padding: "2vh" }}>
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              lineHeight: 1.2,
              marginBottom: "0vh",
              fontWeight: "700",
              color: "white",
            }}
          >
            {cardData.number}
          </Typography>
          <Typography
            // variant="h6"
            color="text.secondary"
            sx={{ fontSize: "1.3em", fontWeight: "700", color: "white" }}
          >
            {cardData.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
