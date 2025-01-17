import { Container, Box, Typography } from "@mui/material";

function Item(props) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "85vh", // Full viewport height
        backgroundImage: `url(${props.src})`,
        backgroundSize: "cover", // Cover the entire container
        backgroundRepeat: "no-repeat", // Prevent repeating
        backgroundPosition: "center",
        display: "flex", // Flexbox to center content
        alignItems: "center", // Vertically center
        justifyContent: "center", // Horizontally center
        position: "relative",
        overflow: "hidden", // Ensure no overflow
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          zIndex: 1,
        }}
      ></Box>

      {/* Centered Content */}
      <Box
        sx={{
          color: "white",
          zIndex: 2, // Above overlay
          textAlign: "center", // Center text
          padding: "2rem",
          maxWidth: "80%", // Limit text width for readability
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight={700}
          fontFamily="Georgia, serif"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)", // Subtle text shadow for readability
            marginBottom: "1rem", // Spacing below title
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          fontWeight={500}
          letterSpacing={1}
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }, // Responsive font size
            textShadow: "1px 1px 8px rgba(0, 0, 0, 0.7)", // Text shadow for subtitle
          }}
        >
          {props.subTitle}
        </Typography>
      </Box>
    </Container>
  );
}

export default Item;
