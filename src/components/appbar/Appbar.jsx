import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { pages } from "../../data/data";
import Logo from "../logo/logo";

import "./appbar.css";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth={"false"}
        sx={{
          padding: "0 60px 0 45px",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(200,43,227,1) 35%, rgba(0,212,255,1) 100%)",
        }}
      >
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Logo />
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
                paddingRight: "35px",
              },
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
