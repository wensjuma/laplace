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
        name: "Supply and Install",
        description: `Take full advantage of our:
        Transportation
        Installation
        Hoisting Services
        
        Eco Deck ensures efficiency and safety during the supply and installation. Handling Beam and Block technology is an easy task, but in the hands of ignorance, it can turn into a deadly weapon. The entire process, from loading, transportation, offloading, and installation, needs to be precisely executed to ensure the safety of all personnel.
        
        Furthermore, when done with limited experience, it usually translates into a tedious process. Worry not, for we have the full solution available.`,
        id: "1",
        color: "#adafb0",
        image: Precast
    },
    {
        name: "Beam and Block Technology",
        description: `At Eco Deck, let us help you answer these questions: 
        Is Beam and Block cost-effective? Is it safe? Is it durable?
        
        Eco Deck introduces the new self-supporting slab system. Beam and block flooring have been used for decades in construction. The technology is gaining daily traction in the built environment as many professionals and local authorities have started to understand and appreciate the technology.
        
        To take full advantage, visit Eco Deck and have your house designs approved by the NCA and county authorities using beam and block technology. Build it with a Sovereign warranty.`,
        id: "2",
        color: "#2eb2e4",
        image: BeamBlock
    },
    {
        name: "Shell and Core",
        description: `Design it all; have your skeleton done with us!
        Are you looking to save on slabs? What if we can extend the savings to the footings, columns, and beams? Performance, cost, and efficiency are central to the decision-making process before any build. With a 30% reduced weight on all floors, you can introduce 1 or 2 more storeys compared to the initial conventional design. Alternatively, for limited-height houses, you can reduce the amount of:
        - Steel reinforcement
        - Concrete
        - Labor
        
        Save more on the entire build with us.`,
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
                borderTopLeftRadius: "25%",
                "@media only screen and (max-width: 600px)": {
                    marginBottom: 100,

                }
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
                                                height: 180,
                                                padding: 2,
                                                width: "100%",
                                                borderRadius: 3
                                            }
                                        }} >
                                            <Card sx={{ width: "100%", height: 260, backgroundColor: "inherit" }} elevation={0}>
                                                <Typography color="white" variant="h5">{item.name}</Typography>
                                                <br />
                                                <Typography color="textSecondary">

                                                    {item.description}
                                                </Typography>

                                            </Card >
                                            <Button variant="outlined" sx={{
                                                color: "#000000",
                                                border: "#ffffff",
                                                backgroundColor: "#ffffff",
                                                borderRadius: 25,
                                                width: "100%",
                                                textTransform: "capitalize"
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Layout>
    )
}
export default ProductCategories;