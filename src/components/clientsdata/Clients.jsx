import React from "react";

import { Box, Typography, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Clients = ({ clientsData }) => {
  return (
    <Container sx={{ marginTop: "8vh", marginBottom: "20vh" }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "600",
          paddingTop: "4vh",
          marginBottom: "4vh",
          color: "black",
        }}
      >
        {"Our Clients"}
      </Typography>
      <Carousel
        autoPlay={true}
        interval={3000}
        indicators={true}
        animation="slide"
        navButtonsAlwaysVisible={false}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          height: { xs: "400px", sm: "400px", md: "400px" }, // Adjust height
        }}
      >
        {clientsData.map((client, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "space-evenly" }, // Center for mobile, spaced for desktop
              height: "100%",
              flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
              gap: { xs: 2, md: 2 }, // Gap between images
            }}
          >
            {[0, 1, 2].map((offset) => {
              const clientIndex =
                i + offset < clientsData.length
                  ? i + offset
                  : (i + offset) % clientsData.length;
              return (
                (offset === 0 || offset < 3) && (
                  <img
                    key={offset}
                    src={clientsData[clientIndex]?.img}
                    alt={`Client ${clientIndex}`}
                    style={{
                      maxWidth: "100%", // Responsive width
                      width: "30%", // Ensure consistent width on desktop
                      height: "auto", // Maintain aspect ratio
                      objectFit: "contain", // Prevent distortion
                      borderRadius: "10px",
                    }}
                  />
                )
              );
            })}
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};

export default Clients;
