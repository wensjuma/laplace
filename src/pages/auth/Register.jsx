import { Typography, Grid } from "@mui/material"
import { AuthCard, StyledDivider } from "../../styles/Styles"
import { StyledTextField, SubmitButton } from "../../styles/Styles"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const Register = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={4} lg={4}></Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <AuthCard elevation={1}>
                    <Link to="/login" className="Link">
                            <ArrowBackIcon />
                        </Link>
                        <Typography sx={{ textAlign: "center" }} variant="h3"> Create account</Typography>
                        <Typography sx={{ textAlign: "center" }}>Register to receive updates from ceramics</Typography>

                        <StyledDivider></StyledDivider>

                        <StyledTextField placeholder="Enter your fullname" label="Enter your fullname">

                        </StyledTextField >
                        <StyledTextField label="Enter your Email" placeholder="Enter your Email">

                        </StyledTextField >
                        <StyledTextField label="Enter your Phone" placeholder="Enter your Phone number">

                        </StyledTextField >
                        <StyledTextField label="Enter Location/address" placeholder="Enter your Location">

                        </StyledTextField >

                        <StyledDivider></StyledDivider>
                        <SubmitButton color="success" variant="contained">Sign up</SubmitButton>

                        <Typography>Already have an account? <Link to="/login">Click here</Link></Typography>
                    </AuthCard>
                </Grid>
                <Grid item xs={12} md={4} lg={4}></Grid>
            </Grid>


        </>

    )
}