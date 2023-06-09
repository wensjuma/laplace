import { Link, useLocation } from "react-router-dom";
import { SubmitButton } from "../../styles/Styles";
import { Container, Grid, Box, Card, Typography } from "@mui/material";
import Layout from "../Layout/Layout";

const ViewProduct = () => {
    let { state } = useLocation();
    let stateData = state.data;
    return (
        <Layout>
            <div style={{ backgroundColor: "#f5f5f5" }}>
                <Container sx={{ backgroundColor: "#ffffff", marginTop: 10, padding: 10 }} >
                    <Grid container>
                        <Grid item xs={12} sm={12} md={7} lg={7}>
                            <Box
                                component="img"
                                src={stateData.image}
                                width="70%"
                                height="70%"
                                alt="item image"
                            >

                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <Card elevation={0}>
                                <Typography align="center" color="textPrimary" variant="h4">
                                    {stateData.name}
                                </Typography>
                                <Typography align="center" color="textSecondary">
                                    {stateData.description}
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                    <Container sx={{ backgroundColor: "f5f5f5" }}>
                        <Link to="/get-quotation">
                            <SubmitButton sx={{ color: "#2e7d32" }} color="success" variant="outlined">Quick Quote</SubmitButton>
                        </Link>
                    </Container>
                </Container>
            </div>
        </Layout>
    )
}

export default ViewProduct;