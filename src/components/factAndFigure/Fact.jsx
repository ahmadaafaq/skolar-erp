import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Fact = ({ factData }) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        height: "auto", // Allow height to adjust based on content
        backgroundImage: "url('/fact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5vh 2vh", // Add padding for better spacing on smaller screens
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "black",
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
          flexWrap: "wrap", // Allow wrapping for smaller screens
          justifyContent: "center", // Center items
          gap: { xs: "3vh", sm: "4vh", md: "5vh" }, // Responsive spacing between cards
        }}
      >
        {factData.map((card, i) => (
          <Box
            key={i} // Moved `key` to the parent element
            sx={{
              height: { xs: "30vh", sm: "35vh" }, // Responsive height
              width: { xs: "80vw", sm: "40vh", md: "35vh" }, // Adjust width for screens
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#bdb8d9",
              borderRadius: "20px",
              padding: "2vh",
              textAlign: "center", // Center-align text
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Add a shadow for better visibility
            }}
          >
            <img
              height="50%"
              style={{
                marginBottom: "1.5vh",
                objectFit: "contain", // Ensure the image fits well
              }}
              src={card.href}
              alt={card.title} // Add alt attribute for accessibility
            />
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" }, // Responsive font size
              }}
            >
              {card.num}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Responsive font size
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
