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
          fontSize: "40px",
          fontWeight: "900",
          paddingTop: "20px",
        }}
      >
        Facts and Figures
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", margin: "20px" }}
      >
        {factData.map((card, i) => (
          <Box
            height={200}
            width={200}
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
              height={70}
              style={{ marginTop: "10px" }}
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
