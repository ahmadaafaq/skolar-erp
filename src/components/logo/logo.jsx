import { Box, Typography } from "@mui/material";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "234px",
        border: "2px solid white",
      }}
    >
      <img src="/skolar-logo.png" style={{ height: "100px", width: "100px" }} />
      <Typography
        sx={{
          display: "flex",
          margin: "auto",
          color: "red",
          fontSize: "30px",
          fontWeight: "800",
          marginLeft: "17px",
          width: "100px",
          height: "100px",
        }}
      >
        The Skolar
      </Typography>
    </Box>
  );
}
