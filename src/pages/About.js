import React from "react";
import Layout from "./../components/Layout/Layout";
import Ateam from "../images/groupImage.jpeg"
import Avatar3 from "../images/avatar3.jpg"
import { Box, Container, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Container>
        <Box
          sx={{
            my: 15,
            textAlign: "center",

            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:600px)": {
              mt: 0,
              "& h4 ": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h4">This Is Ecodeck LTD</Typography>

          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            deserunt libero reprehenderit cum sint fugit cumque temporibus modi
            facere eveniet amet obcaecati ducimus harum velit maxime vel qui
            voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
            tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
            ullam impedit velit quo, corporis ducimus numquam dignissimos
            inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
            aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
            ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
            nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
            tempore voluptatibus perferendis esse eaque temporibus porro?
            Aspernatur beatae deleniti illo autem!
          </p>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={6} lg={6} xs={12}>
            <Box
              component={"img"}
              src={Avatar3}
              width={"100%"}
              height={350}
              sx={{ borderRadius: 3, border: "solid 1px #000000" }}
            />
          </Grid>
          <Grid item md={6} lg={6} xs={12}>
            <Typography color="textPrimary" variant="h4"> Group MD</Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            deserunt libero reprehenderit cum sint fugit cumque temporibus modi
            facere eveniet amet obcaecati ducimus harum velit maxime vel qui
            voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
            tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
            ullam impedit velit quo, corporis ducimus numquam dignissimos
            inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
            aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
            ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
            nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
            tempore voluptatibus perferendis esse eaque temporibus porro?
            Aspernatur beatae deleniti illo autem!
          </Grid>


          <br /> <br />

          <Grid marginTop={10} item md={6} lg={6} xs={12}>
            <Typography color="textPrimary" variant="h4"> Head Operations</Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              deserunt libero reprehenderit cum sint fugit cumque temporibus modi
              facere eveniet amet obcaecati ducimus harum velit maxime vel qui
              voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
              tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
              ullam impedit velit quo, corporis ducimus numquam dignissimos
              inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
              aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
              ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
              nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
              tempore voluptatibus perferendis esse eaque temporibus porro?
              Aspernatur beatae deleniti illo autem!
            </p>
          </Grid>
          <Grid item marginTop={10} md={6} lg={6} xs={12}>
            <Box
              component={"img"}
              src={Avatar3}
              width={"100%"}
              height={350}
              sx={{ borderRadius: 3, border: "solid 1px #000000" }}
            />
          </Grid>


          <Grid item md={6} lg={6} xs={12}>
            <Box
              component={"img"}
              src={Avatar3}
              width={"100%"}
              height={350}
              sx={{ borderRadius: 3, border: "solid 1px #000000" }}
            />
          </Grid>
          <Grid item md={6} lg={6} xs={12}>
            <Typography color="textPrimary" variant="h4"> Field Director </Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            deserunt libero reprehenderit cum sint fugit cumque temporibus modi
            facere eveniet amet obcaecati ducimus harum velit maxime vel qui
            voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
            tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
            ullam impedit velit quo, corporis ducimus numquam dignissimos
            inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
            aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
            ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
            nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
            tempore voluptatibus perferendis esse eaque temporibus porro?
            Aspernatur beatae deleniti illo autem!
          </Grid>

          <br /> <br />

          <Grid marginTop={10} item md={6} lg={6} xs={12}>
            <Typography color="textPrimary" variant="h4"> Head Operations</Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              deserunt libero reprehenderit cum sint fugit cumque temporibus modi
              facere eveniet amet obcaecati ducimus harum velit maxime vel qui
              voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
              tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
              ullam impedit velit quo, corporis ducimus numquam dignissimos
              inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
              aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
              ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
              nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
              tempore voluptatibus perferendis esse eaque temporibus porro?
              Aspernatur beatae deleniti illo autem!
            </p>
          </Grid>
          <Grid item marginTop={10} md={6} lg={6} xs={12}>
            <Box
              component={"img"}
              src={Avatar3}
              width={"100%"}
              height={350}
              sx={{ borderRadius: 3, border: "solid 1px #000000" }}
            />
          </Grid>


          <Grid item marginTop={10} md={12} lg={12} xs={12}>
          <Typography color="textPrimary" variant="h4"> A Team</Typography>
          <br></br>
            <Box
              component={"img"}
              src={Ateam}
              width={"100%"}
              height={500}
              sx={{ borderRadius: 3, border: "solid 1px #000000" }}
            />
          </Grid>
        </Grid>

      </Container>
    </Layout>
  );
};

export default About;
