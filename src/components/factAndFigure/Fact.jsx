import React from "react";

import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Fact = ({ factData }) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        height: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5vh 2vh",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "white",
          marginBottom: "4vh",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        Facts and Figures
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: "3vh", sm: "4vh", md: "5vh" },
        }}
      >
        {factData.map((card, i) => (
          <Box
            key={i}
            sx={{
              height: { xs: "30vh", sm: "35vh" },
              width: { xs: "80vw", sm: "40vh", md: "35vh" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundImage: "url('gradient1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
              padding: "2vh",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              height="50%"
              style={{
                marginBottom: "1.5vh",
                objectFit: "contain",
              }}
              src={card.href}
              alt={card.title}
            />
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
                color: "white",
              }}
            >
              {card.num}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                color: "white",
              }}
            >
              {card.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Fact;
