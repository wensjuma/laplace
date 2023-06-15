import styled from "@emotion/styled";
import { Container, Grid, Paper, Card, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import BeamBlock from "../../images/beamblock.jpg"
import Precast from "../../images/Precast.jpeg"
import Floor from "../../images/floors.jpg"

const products = [
    {
        name: "Walls",
        description: ` Lore is a body of knowledge or tradition that is passed down among members of a culture, usually orally. It's the lore in "folklore," and responsible for spreading the
        word on mythical figures like Santa Claus, Paul Bunyan, and even Uncle Sam.`,
        id: "1",
        color: "#adafb0",
        image: Precast
    },
    {
        name: " Beam & Blocks",
        description: `Beam and block is a construction method to support flooring,
        especially for ground floors as well as multi story buildings.
        It is made of cast concrete, one piece of which is a prestressed
        concrete beam, which can be an inverted
        T-shaped beam, or lintel, the other piece being a simple rectangular block`,
        id: "2",
        color: "#2eb2e4",
        image: BeamBlock
    },
    {
        name: "Floors",
        description: `Lore is a body of knowledge or tradition that is passed down among members of a culture, usually orally. It's the lore in "folklore," and responsible for spreading the
        word on mythical figures like Santa Claus, Paul Bunyan, and even Uncle Sam.`,
        id: "3",
        color: "#2e7d32",
        image: Floor
    },
]
const StyledPaper = styled(Paper)(() => ({
    borderRadius: 0,
    padding: 40,
    minHeight: 350,
    maxHeight: 'auto',
    "&:hover": {
        fontSize: 23,
        color: "#ffffff",
        boxShadow: '0 1px 10px #ffffff',
        transform: 'scale(1.02)',
        transition: '1s',
        borderRadius: 10
    },
}))
const ProductCategories = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(()=>{
    //     const fetchProducts =async()=>{
    //         const result = await axios.post("http://localhost:8850/api/v1/eco/get-products");
    //         console.log(result.data);
    //         setProducts(result.data) 
    //     }
    //     fetchProducts();
    // },[]);
    return (
        <Layout>
            <div style={{
                backgroundImage: "linear-gradient(#86b8df,#70a1d3,#0172bc)",
                height: '100vh',
                padding: 20,
                boxShadow: 0,
                borderBottomRightRadius: "25%",
                borderTopLeftRadius: "25%"
            }}>
                <Container sx={{
                    marginTop: 20,
                    "@media only screen and (max-width: 600px)": {
                        marginTop: 2,

                    }
                }} >
                    <Grid container spacing={2}>
                        {
                            products.map(item => (
                                <Grid key={item.id} item xs={12} sm={12} md={4} lg={4}>
                                    <Link style={{ cursor: 'pointer', textDecoration: 'none' }} to={`/product/${item.name}`} state={{ data: item }}>
                                        <StyledPaper elevation={0} sx={{
                                            backgroundColor: item.color,
                                            "@media only screen and (max-width: 600px)": {

                                            }
                                        }} >
                                            <Card sx={{ width: "100%", height: 260, backgroundColor: "inherit" }} elevation={0}>
                                                <Typography color="white" variant="h4">{item.name}</Typography>
                                                <Typography color="textSecondary">

                                                    {item.description}
                                                </Typography>

                                            </Card >
                                            <Button variant="outlined" sx={{
                                                color: "#000000",
                                                border: "#ffffff",
                                                backgroundColor:"#ffffff",
                                                borderRadius:25,
                                                width: "100%",
                                                textTransform:"capitalize"
                                            }}>
                                                View More
                                                <ArrowForwardIosRounded sx={{
                                                    display: "block",
                                                    float: "right",
                                                    color: "#7b83eb",
                                                    "&:hover": {
                                                        display: "block",
                                                        color: "#ffffff",
                                                    },

                                                }} />
                                            </Button>
                                        </StyledPaper >
                                    </Link>
                                </Grid>
                            ))
                        }

                    </Grid>
                </Container>
            </div>
        </Layout>
    )
}
export default ProductCategories;