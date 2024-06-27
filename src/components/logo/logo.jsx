import { Box } from "@mui/material";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100px",
        borderLeft: "20px solid white",
        borderRight: "20px solid white",
        borderTop: "4px solid white",
        borderBottom: "10px solid white",
      }}
    >
      <img src="/logo1.jpg" style={{ height: "100px", width: "100px" }} />
    </Box>
  );
}
