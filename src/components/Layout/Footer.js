import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Card, Divider, Grid, styled } from "@mui/material";
import { Box, Container, Typography } from "@mui/material";
import { Facebook, WhatsApp } from "@mui/icons-material";
import Logo from "../../images/laplaceLogo.png";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "#3c57a2",
  fontFamily: "cursive",
  paddingTop: 5,
  fontSize: 19,
  cursor: "pointer"
}));
const StyledSocialLink = styled(Link)(() => ({
  textDecoration: "none",
  fontFamily: "cursive",
  padding: 10,
  fontSize: 19,
  marginRight: 8,
  cursor: "pointer",
  border: "solid 1px #3c57a2",
  borderRadius: 25,
  marginTop: 17,

}));

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: 0,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          // p: 6,
        }}
        component="footer"
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item mt={2} xs={12} sm={12} lg={6} xl={6}>
              <Card
                sx={{
                  padding: 1,
                  bgcolor: "#eeeeee"
                }} elevation={0}>
                <img src={Logo} style={{ borderRadius: 50, backgroundSize: "cover" }} alt="logo" height={"80"} width="110" />
                <Typography align="left" color="#3c57a2"
                  sx={{ fontWeight: "bold", marginLeft: "4%" }}
                >ECODECK</Typography>
              </Card>
            </Grid>
            <Grid item mt={2} xs={12} sm={12} lg={6} xl={6}>
              <Card
                sx={{

                  padding: 3,
                  bgcolor: "#eeeeee"
                }} elevation={0}>
                <Typography mb={2} variant="h5" color="#3c57a2"> Quick Links </Typography>
                <StyledLink to="/about"><Typography> About Us</Typography></StyledLink> 
                <StyledLink to="/products"><Typography> Products</Typography></StyledLink> 
                <StyledLink to="/contact"><Typography> Contacts</Typography></StyledLink>


              </Card>
            </Grid>
          
            <Divider />
          
            <Grid item xs={12} sm={12} lg={12} xl={12}>
              <Grid container>
                <Grid item mt={3} xs={6} sm={6} md={3} lg={3}>
                  <StyledSocialLink color="inherit" to="https://api.whatsapp.com/send?phone=254717649909">
                    <WhatsApp color="success" /> <span> WhatsApp</span>
                  </StyledSocialLink>

                </Grid>
                <Grid item mt={3} xs={6} sm={6} md={3} lg={3}>
                  <StyledSocialLink color="inherit" to="">
                    <InstagramIcon color="secondary" /> <span>Instagram</span>
                  </StyledSocialLink>

                </Grid>
                <Grid item mt={3} xs={6} sm={6} md={3} lg={3}>
                  <StyledSocialLink color="inherit" to="">
                    <TwitterIcon color="primary" /> <span> Twitter</span>
                  </StyledSocialLink>

                </Grid>
                <Grid item mt={3} xs={6} sm={6} md={3} lg={3}>
                  <StyledSocialLink color="inherit" to="">
                    <Facebook color="primary" /><span> Facebook</span>
                  </StyledSocialLink>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
   
          <Typography mt={2} variant="body2" color="#3c57a2" align="center">
            {"Copyright © "}
            <Link style={{ marginBottom: 10 }} color="inherit" href="https://wensjuma.github.io/laplace/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear() + " "}
            Powered by MyDeveloper
            {"."}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
