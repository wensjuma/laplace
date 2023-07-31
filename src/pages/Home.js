import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/HomeStyles.css";
import { OurServices } from "../components/Body/Services";
import Const1 from "../images/Cont4.jpg"
import Const2 from "../images/Cont5.jpg"
import Const3 from "../images/Constr6.jpg"
import Carousel from 'react-bootstrap/Carousel';
import OfficeLocationDetails from "../components/Body/Locations";

const items = [
  {
    name: "Our Mission",
    img: Const1,
    description: `
    Upgrade your construction projects with Eco Deck - the precast beam and block slab designed to provide a safe, secure and cost-effective flooring for residential and commercial buildings. `
  },
  {
    name: "Vission",
    img: Const2,
    description: `  There is a lot of detail that goes into designing an architectural project. Each step of the project is carefully thought out for safety and day to day comfort, we call this flow. What is architectural design? And what is involved in the design process?

    `
  },
  {
    name: "School Motto",
    img: Const3,
    description: `A construction quotation is a document sent by a construction company or firm to their clients for the discussion of the items, materials, and workforce that need to be paid. Since a Quotation is just an initial list.`
  }
]
const Home = () => {
  return (
    <Layout>
      <section className="slider">
        <Carousel
          style={{
            [`@media only screen and (maxWidth: 600px)`]: {
              height: 400
            }
          }}
        >
          {/* <Carousel.Item className='slide'> */}
          {items.map((item, index) => (
            <Carousel.Item key={index} className='slide'>
              <img
                style={{
                  height: 550,
                  width: "100%",
                  borderRadius: 5,
                  background: "linear-gradient(#4d4d4d,#000000, #000000)",
                  filter: "brightness(40%)",
                  [`@media only screen and (maxWidth: 600px)`]
                    : {
                    height: 400
                  }
                }}
                className="d-block w-80"
                src={item.img}

                alt="Second slide"
              />
              <Carousel.Caption>
                <h3><strong>{item.name}</strong></h3>
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



