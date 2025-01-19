import { Grid, Typography, Box } from "@mui/material";
import Logo from "../logo/logo";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        padding: "20px 0",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "0 20px",
        }}
      >
        {/* Logo and Description */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", gap: 2, alignItems: "center" }}
        >
          <Box>
            <Logo />
          </Box>
          <Typography
            sx={{
              marginTop: 2,
              textAlign: "justify",
              fontSize: "0.9rem",
              lineHeight: 1.5,
            }}
          >
            Amplify your school with the most credible cloud-based management
            software to administer your school more efficiently by digitalizing
            and automating day-to-day academic and administrative activities.
          </Typography>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h4"
            sx={{ marginBottom: "20px", fontSize: "1.5rem" }}
          >
            Contact Information
          </Typography>
          <Box sx={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            <Typography>
              Address: A 3, Street No 1, Madhuvihar, Delhi 110092
            </Typography>
            <Typography>Contact: +91-9582929292</Typography>
            <Typography>Email: info@skolar.com</Typography>
            <Typography>Timing: 10AM - 6PM</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
