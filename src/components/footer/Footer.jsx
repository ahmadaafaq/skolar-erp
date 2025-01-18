import SendIcon from "@mui/icons-material/Send";
import { Container, Grid, Typography, Box } from "@mui/material";
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

// <Grid item sm={6} md={4} lg={4}>
//   {/* <Typography variant="h4" sx={{ marginBottom: "5vh" }}>
//     {"Newsletter"}
//   </Typography> */}
//   {/* <Typography variant="h7" sx={{ fontSize: ".9rem" }}>
//     You will be notified when something new will appear.
//   </Typography> */}
//   {/* <FormControl
//     sx={{
//       display: "block",
//       backgroundColor: "gray",
//       marginTop: "50px",
//       marginLeft: 0,
//       borderRadius: "20px",
//     }}
//     variant="filled"
//   >
//     <InputLabel htmlForm="filled-adornment-email">
//       Email Address
//     </InputLabel>
//     <FilledInput
//       id="filled-adornment-email"
//       sx={{
//         backgroundColor:
//           "linear-gradient(90deg, rgba(209,209,209,1) 0%, rgba(190,199,204,1) 48%);",
//         width: "100%",
//         borderRadius: 0,
//       }}
//       disableUnderline
//       autoComplete="off"
//       endAdornment={
//         <InputAdornment position="end">
//           <IconButton
//             aria-label="email"
//             onClick={() => {}}
//             onMouseDown={() => {}}
//             sx={{
//               borderRadius: "20px",
//               backgroundColor: "red",
//             }}
//             // edge="end"
//           >
//             <SendIcon />
//           </IconButton>
//         </InputAdornment>
//       }
//     />
//   </FormControl> */}
// </Grid>
