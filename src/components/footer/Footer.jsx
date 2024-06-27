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
          marginTop: "5%",
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
            <Typography variant="h4" sx={{ marginBottom: "5vh" }}>
              Contact Information
            </Typography>
            <Typography variant="h7" sx={{ fontSize: ".9rem" }}>
              A: B 57, East Jyoti Nagar,Shahdra, Delhi 110093
            </Typography>
            <Typography variant="h7" sx={{ fontSize: ".9rem" }}>
              M: +91 7827565682
            </Typography>
            <Typography variant="h7" sx={{ fontSize: ".9rem" }}>
              E: schoolerp2004@gmail.com
            </Typography>
            <Typography variant="h7" sx={{ fontSize: ".9rem" }}>
              T: 10AM- 6PM
            </Typography>
          </Grid>

          <Grid item sm={6} md={4} lg={4}>
            <Typography variant="h4" sx={{ marginBottom: "5vh" }}>
              {"Newsletter"}
            </Typography>
            <Typography variant="h7" sx={{ fontSize: ".9rem" }}>
              You will be notified when something new will appear.
            </Typography>
            <FormControl
              sx={{
                display: "block",
                backgroundColor: "gray",
                marginTop: "50px",
                marginLeft: 0,
                borderRadius: "20px",
              }}
              variant="filled"
            >
              <InputLabel htmlForm="filled-adornment-email">
                Email Address
              </InputLabel>
              <FilledInput
                id="filled-adornment-email"
                sx={{
                  backgroundColor:
                    "linear-gradient(90deg, rgba(209,209,209,1) 0%, rgba(190,199,204,1) 48%);",
                  width: "100%",
                  borderRadius: 0,
                }}
                disableUnderline
                autoComplete="off"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="email"
                      onClick={() => {}}
                      onMouseDown={() => {}}
                      sx={{
                        borderRadius: "20px",
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
