import { Box, useMediaQuery } from "@mui/material";
import ContactImg from "/imageimg.svg";
import ContactForm from "./ContactForm";

export default function Contact() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      width="100%"
      height="80vh"
      p="5px"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        backgroundColor: "#00000",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ContactForm />
      {!isMobile && (
        <Box
          sx={{
            height: "60vh",
            width: "60vh",
            backgroundImage: `url(${ContactImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      )}
    </Box>
  );
}
