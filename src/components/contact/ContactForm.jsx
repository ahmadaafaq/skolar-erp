import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";

let InputComp = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
      border-radius: 25px;
    }
    &:hover {
      fieldset {
        border-color: #bb8fce;
      }
    }
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

    // Template parameters for EmailJS
    const templateParams = {
      email,
      firstName,
      subject,
      message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_zpbtoiy", // Replace with your EmailJS Service ID
        "template_itdoyai", // Replace with your EmailJS Template ID
        templateParams,
        "LQy4mhZpQYrhNVFRR" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Thank you! Your message has been sent.");
          // Clear form fields
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
    <Box sx={{ width: "40%", margin: "30px" }}>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ marginBottom: "20px", color: "white" }}
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
          autoFocus={true}
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
            borderRadius: "25px",
          }}
        />

        <Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{
            width: "200px",
            fontSize: "16px",
            alignSelf: "center",
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
