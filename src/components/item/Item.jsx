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
          height: "120px",
          width: "60%",
          position: "absolute",
          top: "5%",
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
