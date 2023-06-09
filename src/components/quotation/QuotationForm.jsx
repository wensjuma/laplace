import styled from "@emotion/styled";
import {
    FormGroup,
    FormControlLabel,
    Checkbox,
    Grid,
    TextField,

    InputLabel,
    Select,
    Typography,
    MenuItem,
    FormControl,
    Container,
    Button,
    Box,

} from "@mui/material";

import UploadFileIcon from '@mui/icons-material/UploadFile';

import { StyledDivider, MoreButton } from "../../styles/Styles";
import { useState, useEffect, useLocation } from "react";
import { DeleteForeverRounded, DeleteForeverTwoTone } from "@mui/icons-material";
import Layout from "../Layout/Layout";


const QuoteFormTextField = styled(TextField)(() => ({
    width: "100%",
    marginTop: 50
}))
const FormControls = styled(FormControl)(() => ({
    width: "100%",
    marginTop: 50,

}))

const QuotationForm = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState([]);
    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    // imageUrl
    console.log(imageUrl);
    const getUploaded = (files) => {
    };
    const handleChange = () => {

    }
    return (
        <>
            <Layout>
                <Container sx={{
                    bgcolor: "f5f5f5",
                    marginTop: 15,
                    textAlign: "center"
                }}>
                    <Typography variant="h4" color="textPrimary">Get Quick Quote</Typography>
                    <Typography color="textSecondary">
                        Please also attach your plans using the "add files..." button at the bottom of the form
                    </Typography>
                </Container>
                <Grid container>
                    <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
                    <Grid item xs={10} sm={10} md={8} lg={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <QuoteFormTextField

                                    id="filled-hidden-label-medium"
                                    label="Enter Your Name"
                                    placeholder="Enter Your Name"
                                    variant="outlined"
                                    size="medium"
                                />
                                <br />
                                <br />
                                <StyledDivider></StyledDivider>
                                <br />
                                <label> Which Product are you interested in? </label>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="BEAM & BLOCK" />
                                    <FormControlLabel control={<Checkbox />} label="ROBUST UPPER FLOORS" />
                                    <FormControlLabel control={<Checkbox />} label="ANCILLARIES" />

                                </FormGroup>

                                <QuoteFormTextField

                                    id="filled-hidden-label-medium"
                                    label="Enter address"
                                    placeholder="Enter your address"
                                    variant="outlined"
                                    size="medium"
                                />

                                {imageUrl && selectedImage && (
                                    <Box mt={2} sx={{ display: 'flex', backgroundColor: "#f5f5f5", gap: 3, minWidth: "100%", maxWidth: "fit-content" }} >

                                        <img src={imageUrl} alt={selectedImage.name} height="100px" />
                                        <label style={{ marginTop: "10%", color: "#007b55" }} >{selectedImage.name}

                                        </label>
                                        <DeleteForeverTwoTone sx={{ float: "right", marginTop: "10%", color: "red" }} />
                                    </Box>
                                )}
                                <br />
                                <input
                                    accept="image/*"
                                    type="file"
                                    id="select-image"
                                    style={{ display: "none" }}
                                    onChange={(e) => setSelectedImage(e.target.files[0])}
                                />
                                <br />
                                <label htmlFor="select-image">

                                    <InputLabel> Upload your construction plans Image(s)</InputLabel>
                                    <Button size="lg" variant="outlined" sx={{ padding: 1, width: "100%" }} color="primary" component="span">
                                        <UploadFileIcon /> &nbsp; &nbsp; Upload Plan
                                    </Button>
                                </label>



                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <QuoteFormTextField
                                    hiddenLabel
                                    id="filled-hidden-label-medium"
                                    label="Enter email"
                                    placeholder="Enter your personal/company email"
                                    variant="outlined"
                                    size="medium"
                                />

                                <QuoteFormTextField
                                    hiddenLabel
                                    id="filled-hidden-label-medium"
                                    label="Company Name"
                                    placeholder="Company Name"
                                    variant="outlined"
                                    size="md"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <QuoteFormTextField
                                    hiddenLabel
                                    id="filled-hidden-label-medium"
                                    defaultValue=""
                                    label="Enter Phone Number"
                                    placeholder="Enter Phone Number"
                                    variant="outlined"
                                    size="medium"
                                />
                                <QuoteFormTextField

                                    id="filled-hidden-label-medium"
                                    label="Location"
                                    placeholder="Enter your Location"
                                    variant="outlined"
                                    size="medium"
                                />


                                <FormControls sx={{ minWidth: "100%" }} size="medium">
                                    <InputLabel id="demo-select-small-label">Select county</InputLabel>
                                    <Select
                                        labelId="demo-select-medium-label"
                                        id="demo-select-medium"
                                        value={'age'}
                                        label="Select county"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Nairobi'}>Nairobi</MenuItem>
                                        <MenuItem value={"Mombasa"}>Mombasa</MenuItem>
                                        <MenuItem value={"Nakuru"}>Mombasa</MenuItem>
                                        <MenuItem value={"Kisumu"}>Kisumu</MenuItem>
                                    </Select>
                                </FormControls>

                                <FormControls sx={{ minWidth: "100%" }} size="medium">
                                    <InputLabel id="demo-select-small-label">Select Subcounty</InputLabel>
                                    <Select
                                        labelId="demo-select-medium-label"
                                        id="demo-select-medium"
                                        value={'age'}
                                        label="Select Subcounty"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Nairobi'}>Kasarani</MenuItem>
                                        <MenuItem value={"Mombasa"}>Kisauni</MenuItem>
                                        <MenuItem value={"Nakuru"}>Bamala</MenuItem>
                                        <MenuItem value={"Kisumu"}>Bondo</MenuItem>
                                    </Select>
                                </FormControls>


                            </Grid>
                        </Grid>
                        <br /> <br />
                        <StyledDivider></StyledDivider>
                        <br /> <br />
                        <MoreButton variant="outlined" sx={{ padding: 1, width: "100%" }} color="success" component="span">
                            &nbsp; &nbsp; Submit
                        </MoreButton>
                    </Grid>
                    <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
                </Grid>
            </Layout>
        </>
    )
}

export default QuotationForm;