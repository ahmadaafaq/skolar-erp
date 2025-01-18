import { Box, useMediaQuery } from "@mui/material";
import imageSrc from "../../../public/purplebg.jpg";
import ContactImg from "../../../public/imageimg.svg";
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
        // backgroundImage: `url(${imageSrc})`,
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
