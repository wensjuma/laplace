import React from 'react'
import { Grid, Card, CardActionArea, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Profile1 from "../../images/profileImage.jpg"
import Profile2 from "../../images/profileImage1.jpg"
import { ArrowForwardRounded } from '@mui/icons-material';

const ourTeam = [
    {
        id: 1,
        name: "Emmanuel Oyucho",
        post: "Director",
        profileImage: Profile1
    },
    {
        id: 2,
        name: "Emmanuel MMbasu",
        post: "Head of Operations",
        profileImage: Profile2
    },
    {
        id: 3,
        name: "{PlaceHolder}",
        post: "Field Officer",
        profileImage: Profile1
    },
    {
        id: 4,
        name: "{PlaceHolder2}",
        post: "Customer Service",
        profileImage: Profile2
    },
    {
        id: 5,
        name: "Wenslaus Juma",
        post: "ICT Wing Lead",
        profileImage: Profile1
    },
    {
        id: 6,
        name: "{Placeholder}",
        post: "Chief Technical Officer",
        profileImage: Profile1
    },
]

export default function OurTeam() {
    return (
        <div>
            <Typography align="center" color="textPrimary" sx={{ fontWeight: "bold" }} mb={5} variant="h3"> Our Team </Typography>
            <Grid container spacing={3}>
                {ourTeam.map(el => (
                    <Grid key={el.id} marginTop={5} item md={4} lg={4} xs={12}>
                        <Card elevation={0} sx={{ maxWidth: "100%", height:"100%" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="50%"
                                    sx={{height:300}}
                                    image={el.profileImage}
                                    alt={el.post}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {el.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {el.post}
                                    </Typography>
                                    <br />

                                 <span style={{color:"#3c57a2"}}> More Info</span>&nbsp; 
                                 <ArrowForwardRounded />
                                    <br />
                                </CardContent>

                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}
