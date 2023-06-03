import { Grid, Typography, Paper } from "@mui/material"
import { ServiceCard, StyledDivider } from "../../styles/Styles"
import { ContactUs } from "./ContactUs"


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

                                <Typography color="textPrimary" variant="h5">Building Materials</Typography>

                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>


                            </ServiceCard>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <ServiceCard elevation={0}>
                                <Typography color="textPrimary" variant="h5">Architectural Designs</Typography>

                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                            </ServiceCard>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <ServiceCard elevation={0}>
                                <Typography color="textPrimary" variant="h5">Building Quotations</Typography>

                                <Typography color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
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