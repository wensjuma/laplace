

import { Typography, Grid } from "@mui/material"

import { StyledTextField, AuthCard, SubmitButton, StyledDivider } from "../../styles/Styles"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const Login = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={4} lg={4}></Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <AuthCard elevation={1}>
                        <Link to="/" className="Link">
                            <ArrowBackIcon />
                        </Link>
                        <Typography sx={{ textAlign: "center" }} variant="h3"> Sign in</Typography>
                        <Typography sx={{ textAlign: "center" }}>Enter your credentials to login</Typography>

                        <StyledDivider></StyledDivider>


                        <StyledTextField type="email" label="Enter your Email" placeholder="Enter your Email">

                        </StyledTextField >
                        <StyledTextField type="password" placeholder="Enter your Password" label="Enter your fullname">

                        </StyledTextField >

                        <StyledDivider></StyledDivider>
                        <SubmitButton color="success" variant="contained">Sign in</SubmitButton>

                        <Typography>Doesn't have an account? <Link to="/register">Click here</Link></Typography>
                    </AuthCard>
                </Grid>
                <Grid item xs={12} md={4} lg={4}></Grid>
            </Grid>

        </>
    )
}