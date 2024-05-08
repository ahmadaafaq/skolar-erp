import { Link } from "react-router-dom";

import SendIcon from "@mui/icons-material/Send";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  FilledInput,
} from "@mui/material";

export default function Footer() {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "black",
          color: "white",
          maxWidth: "1400px !important",
          marginTop: "6%",
        }}
      >
        <Grid container spacing={10}>
          <Grid item sm={6} md={4} lg={3}>
            <Typography variant="h7">
              <img src="/logo.png" style={{ height: "70px" }} />
              Amplify your school with the most credible cloud based management
              software to administer your school more efficiently by
              digitalising and automating day to day academic and administrative
              activities.
            </Typography>
          </Grid>

          <Grid item sm={6} md={4} lg={3}>
            <Typography variant="h5" sx={{ marginBottom: "25px" }}>
              Contact Information
            </Typography>
            <Typography variant="h7">
              A: B 57, East Jyoti N agar,Shahdra, Delhi 110093
            </Typography>
            <Typography variant="h7">M: +91 7827565682</Typography>
            <Typography variant="h7">E: schoolerp2004@gmail.com</Typography>
            <Typography variant="h7">T: 10AM- 6PM</Typography>
          </Grid>

          <Grid item sm={6} md={4} lg={3}>
            <Typography variant="h5"> Quick Links</Typography>
            <Link style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h6"> About Us</Typography>

              <Typography variant="h6"> Our services</Typography>
              <Typography variant="h6"> Advantages of school ERP</Typography>
              <Typography variant="h6"> FAQ</Typography>
              <Typography variant="h6"> Career</Typography>
            </Link>
          </Grid>

          <Grid item sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "5px" }}>
              {" "}
              Newsletter
            </Typography>
            <Typography variant="h7" sx={{ margin: "5px" }}>
              {" "}
              You will be notified when something new will appear.
            </Typography>
            <FormControl
              sx={{
                m: 1,
                width: "25ch",
                backgroundColor: "gray",
                borderRadius: "10px",
              }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-email">
                Email Address
              </InputLabel>
              <FilledInput
                id="filled-adornment-email"
                sx={{
                  backgroundColor: "#564f4f",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="email"
                      onClick={() => {}}
                      onMouseDown={() => {}}
                      sx={{
                        borderRadius: "5%",
                        backgroundColor: "red",
                      }}
                      // edge="end"
                    >
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
