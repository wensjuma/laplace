
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import {
    Grid,
    CardContent,
    Typography,
    Modal,
    Box,
    CardMedia,
    Card,
    CardActionArea,
    Button,
    Divider,
    TextField,
    Dialog
} from "@mui/material";
import { useState, useEffect } from "react";
import { StyledDivider, SubmitButton, StyledTextField } from "./../styles/Styles";

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import UploadFileIcon from '@mui/icons-material/UploadFile';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import {} from '@material-ui/icons';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Details = (props) => {

    let { state } = useLocation();
    const [selectedImage, setSelectedImage] = useState(null);
    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const [imageUrl, setImageUrl] = useState([]);
    const handleClose = () => setOpen(false);
    let menu = state.data

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);


    const handleClickOpen = () => {
        setOpen(true);
    };
    // imageUrl
    console.log(imageUrl);
    const getUploaded = (files) => {

        // Update chosen files
        // setFilesToUpload([ ...files ])
    };

    return (
        <Layout>

            <Grid container sx={{ marginTop: 5 }} flex={1} spacing={2}>
                <Grid item xs={1} md={2} lg={2}>

                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Card elevation={0} sx={{

                        // maxWidth: "100% !important",
                        // display: "flex",
                        // border: "1px solid #f7f5f7",
                        // // m: 2,
                        // borderRadius: 2
                    }}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ minHeight: "300px" }}
                                component={"img"}
                                src={menu.image}
                                alt={menu.name}
                            />
                            <CardContent>
                                <Typography variant="h6" color="textPrimary" gutterBottom component={"div"}>

                                    <Link to={`https://api.whatsapp.com/send?phone=254717649909&text=${"Hi, I would like to make an inquiry about *"+menu.name +' @ '+ menu.price+'*'}`}>
                                        <Button color="success" sx={{ padding: 2, borderRadius: 10 }} variant="outlined">
                                            <WhatsAppIcon color="success" /> &nbsp; WhatsApp Us
                                        </Button>
                                    </Link>
                                </Typography>
                                <Button />

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography variant="h4" color="primary">
                        {menu.name}
                    </Typography>

                    <Typography color="textSecondary">
                        {menu.description}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                        <StyledDivider sx={{ margin: 2 }}></StyledDivider>

                        <Button color="success" sx={{ padding: 1, width: 150, borderRadius: 25 }} onClick={handleClickOpen} variant="contained">
                            Engage
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={1} md={2} lg={2}>

                </Grid>
            </Grid>
            <Dialog sx={{ padding: 10, "@media only screen and (max-width: 600px)":{padding: 1}  }} open={open} onClose={handleClose}>
                <DialogTitle>Engage our team for {menu.name} Quotations</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill the form below to engage us on the product
                    </DialogContentText>
                    <StyledDivider></StyledDivider>
                    <StyledTextField
                        label="Enter Mobile number"
                        placeholder="Enter Mobile number"
                        fullWidth
                    // variant="standard"
                    ></StyledTextField>
                    <StyledTextField
                        label="Enter Email Address"
                        placeholder="Enter Email Address"
                        fullWidth
                    // variant="standard"
                    >
                        <StyledTextField
                            label="Enter Your Location"
                            placeholder="Enter Your Location"
                            fullWidth
                        // variant="standard"
                        ></StyledTextField>

                    </StyledTextField>
                    {imageUrl && selectedImage && (
                        <Box mt={2} textAlign="center">

                            <img src={imageUrl} alt={selectedImage.name} height="100px" />
                        </Box>
                    )}
                    <input
                        accept="image/*"
                        type="file"
                        id="select-image"
                        style={{ display: "none" }}
                        onChange={(e) => setSelectedImage(e.target.files[0])}
                    />
                    <label htmlFor="select-image">

                        <Typography> Upload your construction plan (Optional)</Typography>
                        <Button variant="outlined" sx={{ padding: 1, width: "100%" }} color="primary" component="span">
                            <UploadFileIcon /> &nbsp; &nbsp; Upload Plan
                        </Button>
                    </label>

                </DialogContent>
                <Divider></Divider>
                <br></br>
                <DialogActions>
                    {/* <Button variant="text" onClick={handleClose}>Cancel</Button> */}

                    <SubmitButton color="success" variant="contained" sx={{ padding: 1, width: "100%" }} onClick={handleClose}>Submit</SubmitButton>
                </DialogActions>
            </Dialog>

        </Layout>
    )
}


export default Details;