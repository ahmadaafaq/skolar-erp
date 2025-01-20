import { Box } from "@mui/material";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        width: "100%",
        maxWidth: "16vh",
        height: "auto",
        overflow: "hidden",
      }}
    >
      <img
        src="/logo1.jpg"
        alt="Logo"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}
