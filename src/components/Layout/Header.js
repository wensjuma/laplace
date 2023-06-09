import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/laplaceLogo.jpeg"
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { CallEndRounded, EmailRounded, WhatsApp } from "@mui/icons-material";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"#028a0f"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} style={{ borderRadius: 50, backgroundSize: "cover" }} alt="logo" height={"60"} width="110" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"https://api.whatsapp.com/send?phone=254717649909"}>
            <Typography sx={{ color: "#2e7d32" }}> <WhatsApp /> +2547-17-649-909</Typography>
          </NavLink>
          <li>
            <NavLink>
              <Typography sx={{ color: "#0172bc" }}> <CallEndRounded /> +2547-17-649-909</Typography>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <Typography sx={{ color: "#2e7d32" }} variant="h6"><EmailRounded /> email@laplace.com</Typography>
            </NavLink>
          </li>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#ffffff", boxShadow: "none" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ color: "#228c22" }} />
            </IconButton>
            <Typography
              color={"#228c22"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} style={{ borderRadius: 50, backgroundSize: "cover" }} alt="logo" height={"60"} width="110" />
              {/* <strong style={{paddingBottom:"70px !important", lineHeight: 3}}> LAPLACE</strong> */}
            </Typography>


            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/products"}>Our Products</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink>
                    <Typography sx={{ color: "#0172bc" }}> <CallEndRounded /> +2547-17-649-909</Typography>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"https://api.whatsapp.com/send?phone=254717649909"}>
                    {/* <Typography sx={{ color: "#0172bc" }}> <CallEndRounded /> +2547-17-649-909</Typography> */}
                    <Typography sx={{ color: "#2e7d32" }}> <WhatsApp /> +2547-17-649-909</Typography>
                  </NavLink>
                  {/* <Typography variant="h6" sx={{ color: "#2e7d32" }}> <WhatsApp /> +2547-17-649-909</Typography> */}
                </li>
                <li>
                  <NavLink>
                    <Typography sx={{ color: "#2e7d32" }} variant="h6"><EmailRounded /> email@laplace.com</Typography>
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
