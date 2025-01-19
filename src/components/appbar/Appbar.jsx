import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { pages } from "../../data/data";
import Logo from "../logo/logo";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth="xl"
        sx={{
          padding: { xs: "0 20px", sm: "0 40px", md: "0 60px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "black",
          height: { xs: "10vh", sm: "12vh", md: "15vh" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button href="/" sx={{ p: 0, minWidth: "auto" }}>
            <Logo />
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              flexGrow: 1,
              justifyContent: { xs: "center", sm: "flex-end" },
              alignItems: "center",
              gap: { xs: "10px", sm: "15px", md: "20px" },
            }}
          >
            {pages.map((page) => (
              <Button
                href={page.href}
                key={page.title}
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: { xs: "0.7rem", sm: "1rem" },
                  textTransform: "none",
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
