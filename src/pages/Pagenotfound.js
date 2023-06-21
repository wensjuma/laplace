import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Pagenotfound = () => {
  return (
    <Layout>
      <Typography align="center">
        <br />
        <h2>Page Not Found</h2>
        <Link style={{ color: "#3c57a2" }} to="/"> Click here to go home  </Link>
      </Typography>
    </Layout>
  );
};

export default Pagenotfound;
