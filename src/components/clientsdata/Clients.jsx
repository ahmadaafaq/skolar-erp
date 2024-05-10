import React from "react";

import { Box, Typography, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Clients = ({ clientsData }) => {
  return (
    <Container sx={{ marginTop: "50px", paddingBottom: "30px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "600", marginBottom: "50px" }}
      >
        {"Our Clients"}
      </Typography>
      <Carousel
        autoPlay={false}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {clientsData.map((client, i) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              height: "300px",
              width: "px",
              borderRadius: "20px",
            }}
          >
            <img height={200} key={i} src={clientsData[i].img} />
            <img
              height={200}
              key={i}
              src={
                clientsData[i + 1]
                  ? clientsData[i + 1].img
                  : clientsData[0]?.img
              }
            />
            <img
              height={200}
              key={i}
              src={
                clientsData[i + 2]
                  ? clientsData[i + 2].img
                  : clientsData[1]?.img
              }
            />
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};

export default Clients;
