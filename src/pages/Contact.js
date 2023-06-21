import React from "react";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Grid,
  Card,
  Container,
  Typography,
} from "@mui/material";
import ContactBG from "../images/contactUsImg.jpg";
import PhoneBooth from "../images/PhoneBooth.jpg";
import PhoneIcon from '@mui/icons-material/Phone';
import { StyledDivider, StyledTextarea } from "../styles/Styles";
import { StyledTextField, SubmitButton } from "../styles/Styles";
import SendIcon from '@mui/icons-material/Send';
import { EmailRounded, WhatsApp } from "@mui/icons-material";
import "../styles/HomeStyles.css";



const Contact = () => {
  return (
    <Layout>
      <Card
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${ContactBG})`,
          height: 350,
          width: "100%"
        }}
      >
        <Container>
          <Grid container>
            <Grid mt={15} item xs={12} sm={12} md={5} lg={5}>
              <Typography mt={1} sx={{ color: "#ffffff", fontWeight: "bold" }} variant="h3">Talk To Us</Typography>
              <Typography mt={2} variant="h6" sx={{ color: "#ffffff", fontWeight: "light" }} >
                You can reach us anytime, you need us.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}></Grid>
          </Grid>
        </Container>

      </Card>
      <Card elevation={0} sx={{
        padding: 10,
        "@media only screen and (max-width: 600px)": {
          padding: 2,
          textAlign: "center"
        }
      }}>
        <div className="container">
          <Grid container spacing={4}>
            <Grid item md={6} lg={6} xs={12}>
              <Box
                component={"img"}
                src={PhoneBooth}
                width={"100%"}
                height={600}
                sx={{ borderRadius: 2, border: "solid 0px #000000" }}
              />
            </Grid>
            <Grid item md={6} lg={6} xs={12}>
              <Typography color="textPrimary" align="center" sx={{ fontWeight: "bold" }} mb={0} variant="h4"> Contact Us <span style={{ color: "#3c57a2" }}>Through</span> </Typography>
         
              <br />
              {/* <Typography align="center">Or</Typography>

              <Typography align="center" variant="h4">Fill The Contact Form To Reach Us</Typography> */}
              <br></br>
              <br></br>
              <StyledTextField label="Enter your Name"></StyledTextField>
              <br></br>
              <StyledTextField label="Enter your Name"></StyledTextField>
              <br></br>
              <StyledTextarea
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
              >

              </StyledTextarea>
              <StyledDivider></StyledDivider>
              <br />
              <SubmitButton mb={5} variant="outlined" sx={{ color: "green" }} color="success">Submit Message &nbsp; <SendIcon /></SubmitButton>
              <Typography mt={4} variant="h5" color="#3c57a2" align="center">You can also get in contact through:</Typography>
              <Card elevation={0} sx={{padding: 2}}>
                <br></br>
                <Typography>
                <PhoneIcon color="#3c57a2" className="iconC" />  +254 717 649909
                </Typography>
                <br></br>
                <Typography>
                <WhatsApp className="iconC" />  +254 717 649909
                </Typography> 
                <br></br>
                <Typography>
               
                <EmailRounded className="iconC" />  info@ecodeck.com
                </Typography>
                <br/>
                <Typography>
                  <strong>We are located at </strong> <br />
                  5th Floor, Jamii House
                  Uguni Road
                  P.O Box 5605 – 00900
                  Nairobi, Kenya
                </Typography>
              </Card>

            </Grid>
          </Grid>
        </div>
      </Card>



    </Layout>
  );
};

export default Contact;
