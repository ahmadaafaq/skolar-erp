import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { pages } from "../../data/data";
import Logo from "../logo/logo";

import { useMediaQuery } from "@mui/material";

function ResponsiveAppBar() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTab = useMediaQuery("(min-width:601px) and (max-width:1400px)");
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth={"false"}
        sx={{
          padding: isMobile ? "" : isTab ? "" : "0 60px 0 45px",
          display: "flex",
          justifyContent: "flex-start",
          background:
            "linear-gradient(90deg, rgba(209,209,209,1) 0%, rgba(190,199,204,1) 48%);",
          height: isMobile ? "14vh" : isTab ? "" : "",
        }}
      >
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Button href="/">
            <Logo />
          </Button>
          <Box
            sx={{
              flexGrow: 1,
              display: isMobile ? "flex" : isTab ? "flex" : "flex",
              justifyContent: isMobile ? "flex-end" : isTab ? "" : "",
              paddingRight: isMobile ? "" : isTab ? "" : "35px",
              marginLeft: isMobile ? "22vw" : isTab ? "60vw" : "74vw",
            }}
          >
            {pages.map((page) => (
              <Button
                href={page.href}
                key={page.title}
                sx={{
                  my: 2,
                  color: "black",
                  fontWeight: "700",
                  fontSize: isMobile ? ".7rem" : "1rem",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
