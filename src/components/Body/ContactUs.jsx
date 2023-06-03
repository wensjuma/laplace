
import { Card, Box, Button, Typography, Grid, TextField, TextareaAutosize, styled } from "@mui/material"
import { AuthCard, StyledDivider, StyledTextarea } from "../../styles/Styles"
import { StyledTextField, SubmitButton } from "../../styles/Styles"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactImg from '../../images/mycontact-bg.png'
import "../../styles/HomeStyles.css"


const SCard = styled(Card)(() => ({
    padding: 25,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15,
    fontFamily: "cursive",
    margin: 5,
    minHeight: 450
}))
export const ContactUs = () => {
    return (
        <>
            <Grid container spacing={3} sx={{}}>
                <Grid item xs={1} md={1} lg={1}></Grid>
                <Grid item xs={12} md={10} lg={10}>


                    <SCard sx={
                        {
                        backgroundImage: "linear-gradient(#b1f2ff, #5996cd, #3989c7,  #0173bc)"
                        }
                    } elevation={0}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} lg={6}>
                                <Box
                                component="img"
                                width={600}
                                height={450}
                                src={ContactImg}
                                sx={{
                                    "@media only screen and (max-width: 600px)": {
                                        display: "none",
                                        visibility: "hidden"
                                    }
                                }}
                                                                />
                                {/* <img style={{
                                    "@media only screen and (max-width: 600px)": {
                                        display: "none",
                                        visibility: "hidden"
                                    }
                                }} width={600} height={450} src={ContactImg} /> */}
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Typography sx={{ fontFamily: "cursive" }} variant="h5">Fill The Contact Form To Reach Us</Typography>
                                <br></br>
                                <br></br>
                                {/* <StyledDivider></StyledDivider> */}
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
                                <SubmitButton variant="contained" color="success">Submit Message &nbsp; <SendIcon /></SubmitButton>
                            </Grid>


                        </Grid>
                    </SCard>

                </Grid>
          
                <Grid item xs={1} md={1} lg={1}></Grid>
            </Grid>


        </>
    )
}