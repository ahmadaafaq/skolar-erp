import { Container, Typography } from "@mui/material";

function ProductInfo() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "75%",
        font: "17px",
        padding: "50px 0px 20px",
        fontFamily: "josh,sans-serif",
      }}
    >
      <Typography
        sx={{
          textShadow: "-1px 1px 5px rgba(0, 0, 0, 0.55)",
          color: "#cd211d",
          fontWeight: "800",
          textTransform: "uppercase",
          letterSpacing: "5px",
          display: "block",
          marginTop: "-0.3em",
          margin: "10px",
        }}
        variant="h7"
      >
        OUR PRODUCTS & SERVICES
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "500px",
          letterSpacing: "0em",
          marginBottom: "0.4em",
          fontSize: "3rem",
          lineHeight: "1em",
          color: "#020202",
          display: "block",
          padding: "0 35px",
          textAlign: "center",
        }}
      >
        School ERP Management Software
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: "21px",
          lineHeight: "28px",
          color: "#1c1c1c",
          margin: "0 0 10px",
          boxSizing: "border-box",
          display: "block",
          textAlign: "center",
        }}
      >
        Amplify your school With the most credible cloud based management
        software to administer Your School more efficiently by digitalising and
        automating day to day academic and administrative activities and
        managing student's progress through better parent-Teacher communication.
      </Typography>
    </Container>
  );
}

export default ProductInfo;
