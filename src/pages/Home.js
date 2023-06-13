import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";
import { Typography, Card } from "@mui/material";
import { OurServices } from "../components/Body/Services";
import { Paper, Box } from "@mui/material";
import Const1 from "../images/Cont4.jpg"
import Const2 from "../images/Cont5.jpg"
import Const3 from "../images/Constr6.jpg"
import Carousel from "react-material-ui-carousel";

const items = [
  {
    name: "Building Materials",
    img: Const1,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    name: "Architectural Designs",
    img: Const2,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    name: "Building Quotations",
    img: Const3,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }
]
const Home = () => {
  return (
    <Layout>
      {/* <div className="home" style={{
        backgroundImage: `url(${Sketchy})`,
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundColor: "#c0dfc9",
        border: "1px solid #79987a",
        height: "852px",
        borderRadius: 5
      }}>
        
        <Grid container sx={{ margin: 10 }} gap={2}>
          <Grid item xs={12} md={3}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Card style={{
                backgroundImage: `url(${Sketchy1})`,
                minWidth: "300px",
                minHeight: "200px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                border: "1px solid #829e90",
                padding: 20,
                borderRadius: 10,
                display: "flex",

              }} elevation={0}>
                <ArrowForwardIcon />
                <Typography variant="5px">My Account</Typography>
              </Card>
            </Link>

          </Grid>
          <Grid xs={12} md={3}>
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <Card style={{
                backgroundImage: `url(${Sketchy2})`,
                minWidth: "300px",
                minHeight: "200px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                border: "1px solid #829e90",
                borderRadius: 10,
                padding: 20,
                display: "flex",
                "&:hover": {
                  opacity: 0.6,
                  padding: 50,
                }
              }} elevation={0}>
                <ArrowForwardIcon />
                <Typography variant="5px">Our Products</Typography>
              </Card>
            </Link>
          </Grid>
        </Grid>
        <Grid className="textarea" sx={{ margin: 10, alignContent: "center" }}>
          <Typography sx={{ marginBottom: 4, color: "#26743a" }} variant="h4">Come for Building Materials
          </Typography>
          <Typography sx={{ marginBottom: 4 }} variant="h5">
            Best Seller
          </Typography>
          <br></br>
          <Link to="/menu">
            <Button color="success" sx={{ padding: 2, backgroundColor: "#26743a", width: 200, borderRadius: 25 }} variant="contained" >Visit Catalog  <ArrowForwardIcon /> </Button>
          </Link>
        </Grid>

      </div> */}
      <br />
      <Carousel 
             autoPlay={true}
             swipe={true}
             indicators={true}
             indicatorContainerProps={{
               style: {
                 zIndex: 1,
                 marginTop: "-20px",
                 position: "relative"
               }
             }} 
      sx={{ zIndex: "-999" }} >
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }

      </Carousel>
      <div style={{ backgroundColor: "#f1f5f8" }}>
        <OurServices />
      </div>
      <br></br>
      {/* <ContactUs /> */}

    </Layout>
  );
};

export default Home;


function Item(props) {
  return (

    <Paper elevation={0} sx={{
      borderRadius: 4,
      height:700,
      backgroundImage: "linear-gradient(#4d4d4d,#000000, #000000)",
      "@media only screen and (max-width: 600px)": {
        height: 400
      }
      // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
    }}>
      <Box
      component="img"
      alt="Slider"
      height={700}
      width={'100%'}
      src={props.item.img}
      sx={{
        borderRadius: 10,
        opacity: 0.3,
        "@media only screen and (max-width: 600px)": {
          height: 350,
          marginTop:5
        }
      }}
      />
     
      <Card
        sx={{
          marginTop: "-200px",
          color: "#ffffff",
          marginLeft: 20,
          marginRight: 20,
          padding: 5,
          paddingTop: "20px",
          background: "transparent",
          backgroundColor: "#213443",
          "@media only screen and (max-width: 600px)": {
            marginLeft: 2,
            marginRight: 2,
            height:350,
            fontSize: "1pt !important",
            wordSpacing: "1px",
            marginTop: "-400px",
            padding: 1,
          }
        }}
      >
        <Typography variant="h4">{props.item.name}</Typography>
        <Typography variant="body2">{props.item.description}</Typography>
        <Link to="/products">
        </Link>
      </Card>
    </Paper>
  )
}
