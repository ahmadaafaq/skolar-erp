import { Container, Box, Typography, Card } from "@mui/material";

function Item(props) {
  return (
    <Container
      sx={{
        height: "800px",
        backgroundImage: `url(${props.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        maxWidth: "1400px !important",
      }}
    >
      <Box
        sx={{
          color: "black",
          textShadow: "-1px 1px 5px rgba(0, 0, 0, 0.55)",
          height: "120px",
          width: "60%",
          position: "absolute",
          top: "15%",
          left: "5%",
          fontStyle: "inherit",
        }}
      >
        <Typography variant="h3" component="h2">
          {props.title}
        </Typography>
        <Typography variant="h6" component="h6">
          {props.subTitle}
        </Typography>
      </Box>
    </Container>
  );
}
export default Item;
