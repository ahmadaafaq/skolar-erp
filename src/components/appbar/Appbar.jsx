import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import "./appbar.css";

// const pages = [
//   "HOME",
//   "SCHOOL ERP",
//   "ADVANTAGE OF SCHOOL ERP",
//   "FAQ",
//   "CAREER",
//   "CONTACT",
// ];

// array of objects
const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "ADVANTAGE OF SCHOOL ERP",
    href: "/advantage-of-school",
  },
  {
    title: "Online Admission",
    href: "/school-erp",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "CAREER",
    href: "/career",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", height: "122px" }}
    >
      <Container
        sx={{ padding: "0 60px 0 45px", maxWidth: "1400px !important" }}
      >
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Box
            sx={{
              height: "120px",
              width: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/">
              <img
                alt="Remy Sharp"
                src="/logo.png"
                style={{ width: "200px", height: "72px" }}
              />
            </a>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-evenly",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                href={page.href}
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "700",
                  // margin: "20px",
                  // padding: "20px",
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
