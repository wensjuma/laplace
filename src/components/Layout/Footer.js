import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, Link } from "@mui/material";
import { Box, Container, Typography } from "@mui/material";
import { Facebook, WhatsApp } from "@mui/icons-material";


const Footer = () => {
  return (
    <>
      <Box
        sx={{
     
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          // p: 6,
        }}
        component="footer"
      >
        <Container maxWidth="sm">
          <Grid container>
            <Grid item xs={12} sm={12} lg={12} xl={12}>
              <Typography sx={{ padding:2 }} align="center">
                <Link color="inherit" href="https://your-website.com/">
                  <WhatsApp color="success" />
                </Link>
                &nbsp;&nbsp;
                <Link color="inherit" href="">
                  <InstagramIcon color="secondary" />
                </Link>
                &nbsp;&nbsp;
                <Link color="inherit" href=""> <TwitterIcon color="primary" /></Link>
                &nbsp;&nbsp;
                <Link color="inherit" href="">  <Facebook color="primary" /></Link>
              </Typography>

            </Grid>

          </Grid>
          <br />
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
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
