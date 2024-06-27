import { Box } from "@mui/material";
import imageSrc from "../../../public/purplebg.jpg";
import ContactImg from "../../../public/imageimg.svg";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Box
      width="100%"
      height="80vh"
      p="5px"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ContactForm />
      <Box
        sx={{
          height: "60vh",
          width: "60vh",
          backgroundImage: `url(${ContactImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
    </Box>
  );
}
