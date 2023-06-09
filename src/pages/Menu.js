import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";

import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ArrowBackIosNewRounded, ArrowForwardIos, ArrowForwardIosOutlined, ArrowForwardIosRounded, ArrowForwardIosSharp } from "@mui/icons-material";


const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", marginTop: 3 }}>
        {MenuList.map((menu) => (
          <Link key={menu.name} style={{textDecoration: "none"}}
           to={`/details/${menu.name}`} state={{ data: menu }}>
            <Card elevation={0} sx={{
              maxWidth: "390px",
              minWidth: "390px",
              maxHeight: "430px",
              display: "flex",
              border: "1px solid #f7f5f7",
              m: 2,
              borderRadius: 2
            }}>
              <CardActionArea>
                <CardMedia
                  sx={{ maxHeight: "180px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h6" color="textPrimary" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="h6" color="textSecondary" gutterBottom component={"div"}>
                    {menu.description}
                  </Typography>
                  <Button />
                  <Divider sx={{ marginBottom: 2 }}></Divider>
                  {/* <Button variant="contained">

                </Button> */}
                  <Link
                    to={`/details/${menu.name}`} state={{ data: menu }}
                  > <Button sx={{padding: 1, minWidth: 150, borderRadius:25}} color="success" variant="outlined">View Product &nbsp; <ArrowForwardIosRounded /> </Button></Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
