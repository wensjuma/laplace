import { Grid, Typography, Box } from "@mui/material"
import { ServiceCard, MoreButton } from "../../styles/Styles"
import { ContactUs } from "./ContactUs"
import { ArrowForwardIosOutlined } from "@mui/icons-material"
import GetQuote from "../../images/quotationRep.jpg";
import Materials from "../../images/Building.material.jpg";
import { Link } from "react-router-dom"
import CeraxJPeg from "../../images/designImg.jpg"
import Cerax2JPeg from "../../images/design.jpg"
import Carousel from 'react-bootstrap/Carousel';


export const OurServices = () => {
    return (
        <div style={{
            backgroundImage: "linear-gradient(#86b8df, #6d9ed1, #0072bc)",
            borderEndEndRadius: "50%",
            borderStartStartRadius: "50%",
            marginBottom: 15
        }}>
            <Grid container sx={{
                // backgroundColor: "#f8f0f2",

                marginTop: 5
            }}>
                <Grid item xs={1} md={1} lg={1}></Grid>
                <Grid item xs={12} md={10} lg={10}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={4}>
                            <ServiceCard sx={{

                            }} elevation={0}>
                                <Box>
                                    <section className="slider">
                                        <img
                                            className="d-block w-80"
                                            src={Materials}
                                            height={200}
                                            width={"100%"}
                                            alt="First slide"
                                        />

                                    </section>
                                </Box>
                                <Box
                                // component='img'
                                // src={Bmaterial}
                                // alt="Building"
                                // width={80}
                                // height={80}
                                >

                                </Box>

                                <Typography color="textPrimary" variant="h5">Building Materials</Typography>

                                <Typography color="textSecondary">
                                We supply building materials to our clients you're one of them take a look at our products here...
                                </Typography>

                                <Link to="/our-products">
                                    <MoreButton color="success" variant="outlined"> Explore &nbsp; <ArrowForwardIosOutlined /> </MoreButton>
                                </Link>
                            </ServiceCard>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <ServiceCard elevation={0}>
                                <Box
                                    sx={{
                                        //     background: `url(${CeraxJPeg})`,
                                        height: "200px",
                                        backgroundRepeat: "no-repeat",
                                        width: "100%",
                                        //     marginBottom:3

                                    }}
                                >
                                    <section className="slider">
                                        <Carousel>
                                            <Carousel.Item className='slide'>
                                                <img
                                                    className="d-block w-80"
                                                    src={CeraxJPeg}
                                                    height={200}
                                                    width={"100%"}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item className='slide'>
                                                <img
                                                    className="d-block w-80"
                                                    src={Cerax2JPeg}
                                                    height={200}
                                                    width={"100%"}
                                                    alt="Second slide"
                                                />
                                            </Carousel.Item>

                                        </Carousel>
                                    </section>

                                </Box>
                    
                                <Typography color="textPrimary" variant="h5">Architectural Designs</Typography>

                                <Typography color="textSecondary">
                                    We have a team of qualified Engineers to help in designs design the structures .
                                </Typography>
                                <MoreButton color="success" variant="outlined"> Explore &nbsp; <ArrowForwardIosOutlined /> </MoreButton>
                            </ServiceCard>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <ServiceCard elevation={0}>
                                <Box>
                                    <section className="slider">
                                        <img
                                            className="d-block w-80"
                                            src={GetQuote}
                                            height={200}
                                            width={"100%"}
                                            alt="First slide"
                                        />
                                    </section>
                                </Box>
                                {/* <Box
                                    component='img'
                                    src={BQuotation}
                                    alt="Building"
                                    width={80}
                                    height={80}
                                >

                                </Box> */}
                                <Typography color="textPrimary" variant="h5">Building Quotations</Typography>

                                <Typography color="textSecondary">
                              You want to know how much you need for all your construction work we give you an updated quatation...
                                </Typography>

                                <Link style={{ textDecoration: 'none' }} to={'/get-quotation'} className="Link">
                                    <MoreButton color="success" variant="outlined"> Explore &nbsp; <ArrowForwardIosOutlined /> </MoreButton>
                                </Link>
                            </ServiceCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={1} lg={1}></Grid>
            </Grid>
            {/* <br /> */}
            {/* <StyledDivider></StyledDivider> */}
            {/* <br /> */}
            <ContactUs />
        </div>
    )
}