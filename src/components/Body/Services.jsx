import { Grid, Typography, Paper, Button, Box, makeStyles } from "@mui/material"
import { ServiceCard, StyledDivider, MoreButton } from "../../styles/Styles"
import { ContactUs } from "./ContactUs"
import { ArrowForwardIosOutlined, Image } from "@mui/icons-material"
import Bmaterial from "../../images/buildmaterial.png"
import BQuotation from "../../images/quotation.png"
import ADesigns from "../../images/architecture.png"
import { Link } from "react-router-dom"


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
                                <Box
                                component='img'
                                src={Bmaterial}
                                alt="Building"
                                width={80}
                                height={80}
                                
                                >

                                </Box>

                                <Typography color="textPrimary" variant="h5">Building Materials</Typography>

                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>

                                <Link to="/our-products">
                                <MoreButton color="success" variant="outlined"> Explore &nbsp; <ArrowForwardIosOutlined /> </MoreButton>
                                </Link>
                            </ServiceCard>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <ServiceCard elevation={0}>
                            <Box
                                component='img'
                                src={ADesigns}
                                alt="Building"
                                width={80}
                                height={80}
                                alignContent={'center'}
                                >

                                </Box>
                                <Typography color="textPrimary" variant="h5">Architectural Designs</Typography>

                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                                <MoreButton color="success" variant="outlined"> Explore &nbsp; <ArrowForwardIosOutlined /> </MoreButton>
                            </ServiceCard>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <ServiceCard elevation={0}>
                                <Box
                                component='img'
                                src={BQuotation}
                                alt="Building"
                                width={80}
                                height={80}
                                >

                                </Box>
                                <Typography color="textPrimary" variant="h5">Building Quotations</Typography>

                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                               
                                <Link style={{textDecoration: 'none'}} to={'/get-quotation'} className="Link">
                                <MoreButton color="success" variant="outlined"> Explore &nbsp; <ArrowForwardIosOutlined /> </MoreButton>
                                </Link>
                            </ServiceCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={1} lg={1}></Grid>
            </Grid>
            <br />
            <StyledDivider></StyledDivider>
            <br />
            <ContactUs />
        </div>
    )
}