import { useState } from "react";

import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";

import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";

const InputComp = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
      border-radius: 20px;
    }
    & input {
      color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
  }
  & label {
    color: white;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: white;
  }
`;

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const templateParams = {
      email,
      firstName,
      subject,
      message,
    };

    emailjs
      .send(
        "service_zpbtoiy",
        "template_itdoyai",
        templateParams,
        "LQy4mhZpQYrhNVFRR"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Thank you! Your message has been sent.");
          setEmail("");
          setFirstName("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccessMessage("Sorry, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "70%", md: "50%" },
        margin: "30px auto",
        padding: { xs: "10px", sm: "20px" },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          marginBottom: "20px",
          color: "white",
          textAlign: "center",
        }}
      >
        Contact Us
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={submitForm}
      >
        <InputComp
          label="Full Name"
          variant="outlined"
          fullWidth
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <InputComp
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputComp
          label="Subject"
          variant="outlined"
          fullWidth
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <TextareaAutosize
          aria-label="minimum height"
          minRows={4}
          placeholder="Enter a message"
          spellCheck
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            backgroundColor: "transparent",
            color: "white",
            resize: "none",
            border: "1px solid #ccc",
            padding: "10px",
            fontFamily: "inherit",
            fontSize: "inherit",
            borderRadius: "20px",
          }}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            width: "200px",
            fontSize: "16px",
            alignSelf: "center",
            borderRadius: "20px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Submit
        </Button>
      </Box>
      {successMessage && (
        <Typography
          variant="body1"
          sx={{
            marginTop: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          {successMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ContactUs;
