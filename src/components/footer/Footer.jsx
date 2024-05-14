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
  Box,
} from "@mui/material";

import Logo from "../logo/logo";

export default function Footer() {
  return (
    <>
      <Container
        maxWidth={"false"}
        sx={{
          backgroundColor: "black",
          color: "white",
          marginTop: "6%",
          paddingBottom: "50px",
        }}
      >
        <Grid
          container
          spacing={10}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Grid item sm={6} md={4} lg={4}>
            <Logo />
            <Typography sx={{ marginTop: "10px" }}>
              Amplify your school with the most credible cloud based management
              software to administer your school more efficiently by
              digitalising and automating day to day academic and administrative
              activities.
            </Typography>
          </Grid>

          <Grid item sm={6} md={4} lg={4}>
            <Typography variant="h4" sx={{ marginBottom: "25px" }}>
              Contact Information
            </Typography>
            <Typography variant="h7">
              A: B 57, East Jyoti Nagar,Shahdra, Delhi 110093
            </Typography>
            <Typography variant="h7">M: +91 7827565682</Typography>
            <Typography variant="h7">E: schoolerp2004@gmail.com</Typography>
            <Typography variant="h7">T: 10AM- 6PM</Typography>
          </Grid>

          <Grid item sm={6} md={4} lg={4}>
            <Typography variant="h4">{"Newsletter"}</Typography>
            <Typography variant="h7">
              You will be notified when something new will appear.
            </Typography>
            <FormControl
              sx={{
                display: "block",
                backgroundColor: "gray",
                marginTop: "50px",
                marginLeft: 0,
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
                  width: "100%",
                  borderRadius: 0,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="email"
                      onClick={() => { }}
                      onMouseDown={() => { }}
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
