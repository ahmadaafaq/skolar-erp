import { Box } from "@mui/material";
import imageSrc from "../../../public/contactus.jpg"; // Import your image source
import ContactForm from "./ContactForm"

export default function Contact() {
    return (
        <>
            <Box
                width="100%"
                height="100%"
                p="5px"
                display="flex"
                justifyContent="flex-start"
                sx={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} >
                <ContactForm />
            </Box>
        </>
    )
}
