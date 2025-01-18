import { Box } from "@mui/material";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        border: "5px solid white",
      }}
    >
      <img src="/logo1.jpg" style={{ height: "13vh", width: "14vh" }} />
    </Box>
  );
}
