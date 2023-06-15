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
import Carousel from 'react-bootstrap/Carousel';
import OfficeLocationDetails from "../components/Body/Locations";

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
      <section className="slider">
        <Carousel>
          {/* <Carousel.Item className='slide'> */}
          {items.map((item, index) => (
            <Carousel.Item key={index} className='slide'>
              <img
                style={{
                  height: 600,
                  width: "100%",
                  borderRadius: 5,
                  background: "linear-gradient(#4d4d4d,#000000, #000000)",
                  filter: "brightness(40%)",
                  [`@media only screen and (maxWidth: 500px)`]
                    : {
                    height: 400
                  }
                }}
                className="d-block w-80"
                src={item.img}

                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
          {/* <Typography>Test text over</Typography> */}
        </Carousel>
      </section>
      <OfficeLocationDetails></OfficeLocationDetails>
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
      height: 700,
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
            marginTop: 5
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
            height: 350,
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
