import React from "react";
import Layout from "./../components/Layout/Layout";
import WhoWeAre from "../images/construction-site.avif"
import { Box, CardContent, CardMedia, Card, Container, Grid, Typography } from "@mui/material";
import AboutBG from "../images/AboutBG1.jpg"
import PatnerLogo from "../images/nca-license-registration.webp"
import OurTeam from "../components/Body/OurTeam";

const patners = [
  {
    id: 1,
    name: "National Construction(NCA)",
    logo: PatnerLogo,
  },
  {
    id: 2,
    name: "National Construction(NCA)",
    logo: PatnerLogo,

  },
  {
    id: 3,
    name: "National Construction(NCA)",
    logo: PatnerLogo,

  },
  {
    id: 4,
    name: "National Construction(NCA)",
    logo: PatnerLogo,

  },
  {
    id: 5,
    name: "National Construction(NCA)",
    logo: PatnerLogo,

  },
  {
    id: 6,
    name: "National Construction(NCA)",
    logo: PatnerLogo,

  },
]
const About = () => {
  return (
    <Layout>
      <Card
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${AboutBG})`,
          // filter: "brightness(100%)",

          height: 350,
          width: "100%"
        }}
      >
        <Container>
          <Grid container>
            <Grid mt={15} item xs={12} sm={12} md={5} lg={5}>
              <Typography mt={1} sx={{ color: "#ffffff", fontWeight: "bold" }} variant="h3">About Us</Typography>
              <Typography mt={2} variant="h6" sx={{ color: "#ffffff", fontWeight: "light" }} >
                We are specialists in building & construction industry
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}></Grid>
          </Grid>
        </Container>

      </Card>

      <Card sx={{
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
                src={WhoWeAre}
                width={"100%"}
                height={400}
                sx={{ borderRadius: 2, border: "solid 0px #000000" }}
              />
            </Grid>
            <Grid item md={6} lg={6} xs={12}>
              <Typography color="textPrimary" sx={{ fontWeight: "bold" }} mb={5} variant="h3"> Who We <span style={{ color: "#3c57a2" }}>Are</span> </Typography>
              <Typography>
                We are the leading construction consultancy firm,
                We provide building quatations, Materials, Construction plans and we handhold you through the construction process.

                Eco Deck is a revolutionary precast concrete beam and block slab system that combines structural integrity with maximum versatility. This system is designed to reduce construction time, cost and waste while providing an easy-to-install solution for residential or commercial buildings.

                Eco Deck's unique modular design offers the ultimate in flexibility – it can be tailored to fit any shape or size room with minimal effort and minimal wastage. It’s also lightweight enough to be easily moved into place by hand yet strong enough to support the weight of heavy furniture or equipment without buckling under pressure. The combination of steel reinforced beams and high strength blocks makes this one of the most reliable systems on the market today.

              </Typography>
            </Grid>
          </Grid>
        </div>
      </Card>

      <Card elevation={0}
        sx={{
          minHeight: 250,
          backgroundColor: "#f5f9fc",
          width: "100%",
          padding: 10,
          "@media only screen and (max-width: 600px)": {
            padding: 2,
            textAlign: "center"
          }
        }}
      >
        <Typography align="center" color="textPrimary" sx={{ fontWeight: "bold" }} mb={5} variant="h3"> Our <span style={{ color: "#3c57a2" }}>Patners</span> </Typography>
        <Grid container spacing={2}>
          {patners.map((pat) => (
            <Grid key={pat.id} item xs={6} sm={6} md={3} lg={3} >
              <Card elevation={0}>
                <Card elevation={0} sx={{ display: 'flex' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '3 0 auto' }}>
                      <Typography component="div" sx={{ fontSize: 9 }} variant="subtitle1">
                        {pat.name}
                      </Typography>

                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 0, pb: 0 }}>

                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 161 }}
                    image={pat.logo}
                    alt="Live from space album cover"
                  />
                </Card>
              </Card>
            </Grid>
          ))}

        </Grid>
      </Card>
      <Container>
        <OurTeam />
      </Container>
    </Layout>
  );
};

export default About;
