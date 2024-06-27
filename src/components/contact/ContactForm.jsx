import React, { useState } from "react";

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

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ email, firstName, subject, message });
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
          onClick={submitForm}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
