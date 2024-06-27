import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Gradient } from "@mui/icons-material";
import BasicCard from "../card/Card";
import { Card, dividerClasses } from "@mui/material";

const Fact = ({ factData }) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        height: "65vh",
        backgroundImage: "url('/fact-bg.jpg')",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "900",
          paddingTop: "4vh",
        }}
      >
        Facts and Figures
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", margin: "5vh" }}
      >
        {factData.map((card, i) => (
          <Box
            height={"35vh"}
            width={"35vh"}
            my={2}
            gap={2}
            p={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#bdb8d9 ",
              borderRadius: "20px",
            }}
          >
            <img
              height={"95vh"}
              style={{ marginTop: "3vh" }}
              key={i}
              src={card.href}
            />
            <Typography variant="h4" fontWeight={800} key={i}>
              {card.num}
            </Typography>
            <Typography variant="h5" fontWeight={900} key={i}>
              {card.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Fact;
