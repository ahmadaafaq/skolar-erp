import { Container, Box, Typography, Card } from "@mui/material";

function Item(props) {
  return (
    <Container
      maxWidth={"false"}
      sx={{
        height: "800px",
        backgroundImage: `url(${props.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          color: "black",
          textShadow: ` 1px 1px 0px white, 
          1px -1px 0px white, 
            -1px 1px 0px white, 
            -1px -1px 0px white, 
            1px 0px 0px white, 
            0px 1px 0px white, 
            -1px 0px 0px white, 
            0px -1px 0px white;`,
          height: "120px",
          width: "60%",
          position: "absolute",
          top: "7%",
          left: "5%",
          fontStyle: "inherit",
        }}
      >
        <Typography variant="h1" component="h1" fontWeight={600} fontFamily=" Georgia, serif">
          {props.title}
        </Typography>
        <Typography variant="h3" component="h3" fontWeight={700} letterSpacing={1}>
          {props.subTitle}
        </Typography>
      </Box>
    </Container>
  );
}
export default Item;
