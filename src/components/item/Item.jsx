import { Container, Box, Typography } from "@mui/material";

function Item(props) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "85vh",
        backgroundImage: `url(${props.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></Box>

      {/* Centered Content */}
      <Box
        sx={{
          color: "white",
          zIndex: 2,
          textAlign: "center",
          padding: "2rem",
          maxWidth: "80%",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight={700}
          fontFamily="Georgia, serif"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
            marginBottom: "1rem",
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
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            textShadow: "1px 1px 8px rgba(0, 0, 0, 0.7)",
          }}
        >
          {props.subTitle}
        </Typography>
      </Box>
    </Container>
  );
}

export default Item;
