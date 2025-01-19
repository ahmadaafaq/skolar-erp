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
        maxWidth: { xs: "100%", sm: "345px" },
        minWidth: { sm: "300px" },
        textAlign: "center",
        borderRadius: "20px",
        paddingTop: "10px",
        minHeight: "250px",
        flex: "1 1 calc(33.33% - 20px)",
        boxSizing: "border-box",
        backgroundImage: "url('gradient1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        border: "2px solid white",
        "@media (max-width: 768px)": {
          flex: "1 1 calc(50% - 20px)",
        },
        "@media (max-width: 480px)": {
          flex: "1 1 100%",
        },
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
              backgroundColor: "black",
              height: "24vh",
              marginTop: "2vh",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                color: "white",
                fontSize: ".9rem",
                fontWeight: "bold",
              }}
            >
              {card.description}
            </Typography>
          </CardContent>
        </>
      ) : (
        <>
          <Slide direction="down" in={!showMedia} timeout={300}>
            <CardContent
              sx={{
                position: "relative",
                backgroundColor: "black",
                bottom: "2vh",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "white",
                  fontSize: ".9rem",
                  fontWeight: "bold",
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </Slide>
          <Slide direction="up" in={!showMedia} timeout={300}>
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
      )}
    </Card>
  );
}
