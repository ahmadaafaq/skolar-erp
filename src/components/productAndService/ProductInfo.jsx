import { Container, Typography } from "@mui/material";

function ProductInfo() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
        padding: "10vh 2vh 7vh",
        fontFamily: "josh, sans-serif",
        boxSizing: "border-box",
        background: "linear-gradient(145deg, #f3f4f6, #e4e6eb)", // Subtle gradient background
        borderRadius: "15px", // Add rounded corners
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
      }}
    >
      <Typography
        sx={{
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Enhanced text shadow for better readability
          color: "#cd211d",
          fontWeight: "800",
          textTransform: "uppercase",
          letterSpacing: ".3rem",
          lineHeight: "2rem",
          textAlign: "center",
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
          marginBottom: "1rem", // Add spacing between elements
        }}
        variant="h6"
      >
        Our Products & Services
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "700", // Increase weight for emphasis
          letterSpacing: "0.05em", // Slightly adjust spacing
          marginBottom: "1rem",
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
          lineHeight: "1.3em",
          color: "#333333",
          textAlign: "center",
        }}
      >
        School ERP Management Software
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
          lineHeight: "1.8em",
          color: "#555555",
          textAlign: "center",
          padding: { xs: "0 10px", sm: "0 20px", md: "0 50px" },
          maxWidth: "800px", // Limit text width for better readability
          marginTop: "0.5rem",
        }}
      >
        Amplify your school with the most credible cloud-based management
        software to administer your school more efficiently. Digitalize and
        automate day-to-day academic and administrative activities while
        enhancing student progress tracking through improved parent-teacher
        communication.
      </Typography>
    </Container>
  );
}

export default ProductInfo;
