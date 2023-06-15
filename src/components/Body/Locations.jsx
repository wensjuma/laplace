import { Card, Grid, Typography } from "@mui/material";
import "../../styles/HomeStyles.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const OfficeLocationDetails = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:"AIzaSyCeXaOKfJXQZuh-3wZmMmYSt5NruUJPVgU" //process.env.REACT_APP_GOOGLE_API_KEY,
      });
      const center = useMemo(() => ({ lat: 0.52043, lng: 36.856743 }), []);
    
    return (
        <div className="container-fluids pt-3">

            <Grid container spacing={2}>
                <Grid item xm={1} sm={1} md={1} lg={1}></Grid>
                <Grid item xm={12} sm={12} md={10} lg={10}>
                    <Card elevation={0}
                        sx={{
                            padding: 4,
                            //     boxShadow: "inset 1px 3px 4px 2px #3c57a2",
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xm={12} sm={12} md={6} lg={6}>
                                <h4 style={{ textAlign: "center" }}>Ecodeck Office Location</h4>

                                <br></br>
                                <Typography color="textSecondary" variant="h6">
                                    ours@ecodeck.co.ke <br></br>
                                    +254709876434 <br></br>
                                    Along Nairobi ~ Kenyatta Avenue
                                </Typography>
                            </Grid>
                            <Grid item xm={12} sm={12} md={6} lg={6}>
                                {!isLoaded ? (
                                    <h1>Loading...</h1>
                                ) : (
                                    <GoogleMap
                                        mapContainerClassName="map-container"
                                        center={center}
                                        zoom={10}
                                    />
                                )}
                            </Grid>
                        </Grid>

                    </Card>
                </Grid>
                <Grid item xm={1} sm={1} md={1} lg={1}></Grid>
                {/* <Grid item xm={12} sm={12} md={6} lg={6}></Grid> */}
            </Grid>
        </div>
    )
}
export default OfficeLocationDetails;