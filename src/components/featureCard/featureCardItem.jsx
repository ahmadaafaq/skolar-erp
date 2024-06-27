import * as React from "react";

import { Box, Slide } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function FeatureCardItem({ card }) {
  const [showMedia, setShowMedia] = React.useState(true);
  return (
    <Card
      sx={{
        maxWidth: "345px",
        minWidth: "300px",
        background: "#D5CFF4",
        boxShadow: "2px -3px 10px 10px rgba(210,210,220,0.55)",
        border: "1px solid #745fdb",
        textAlign: "center",
        borderRadius: "20px",
        paddingTop: "10px",
        minHeight: "250px",
      }}
      onMouseOver={() => setShowMedia(false)}
      onMouseOut={() => setShowMedia(true)}
    >
      {showMedia ? (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "white",
              margin: "0 auto",
              height: "90px",
              width: "90px",
              position: "relative",
            }}
          >
            <CardMedia
              sx={{
                margin: "0 auto",
                height: "70px",
                width: "70px",
                verticalAlign: "middle",
              }}
              image={card.img}
              title={card.title}
            />
          </Box>
          <CardContent
            sx={{
              position: "relative",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
        </>
      ) : (
        <>
          <>
            <Slide direction="down" in={!showMedia} timeout={"0.3s"}>
              <CardContent
                sx={{
                  position: "relative",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 700, fontFamily: "inherit" }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 900 }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Slide>
            <Slide direction="up" in={!showMedia} timeout={"0.3s"}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  margin: "0 auto",
                  height: "90px",
                  width: "90px",
                  position: "relative",
                }}
              >
                <CardMedia
                  sx={{
                    margin: "0 auto",
                    height: "70px",
                    width: "70px",
                    verticalAlign: "middle",
                  }}
                  image={card.img}
                  title={card.title}
                />
              </Box>
            </Slide>
          </>
        </>
      )}
    </Card>
  );
}
