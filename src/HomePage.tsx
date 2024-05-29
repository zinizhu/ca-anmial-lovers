import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PetsIcon from "@mui/icons-material/Pets";
import Grid from "@mui/material/Grid"; // Grid version 1

import { DogInfoCard, DogInfo } from "./DogInfoCard";

const dogsInfo: DogInfo[] = [
  {
    id: 1,
    name: "Chichi",
    image: "../images/Chichi.jpeg",
    age: 2,
    deadline: "05/02",
    breed: "Huskey",
    gender: "Male",
    weight: 60,
    medicalCondition: "Needs Care",
  },
  {
    id: 2,
    name: "Levi",
    image: "../images/Levi.jpeg",
    age: 3,
    deadline: "05/02",
    breed: "GSD",
    gender: "Male",
    weight: 50,
    medicalCondition: "Needs Care",
  },
  {
    id: 3,
    name: "Claire",
    image: "../images/Claire.jpeg",
    age: 7,
    deadline: "05/03",
    breed: "GSD",
    gender: "Female",
    weight: 40,
    medicalCondition: "Good",
  },
];

function HomePage() {
  return (
    <>
      <div>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <PetsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                CA Animal Lovers
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>

      <div>
        {
          <Grid container rowSpacing={4}>
            {dogsInfo.map((dogInfo, dogIdx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={dogIdx}>
                <DogInfoCard dogInfo={dogInfo} />
              </Grid>
            ))}
          </Grid>
        }
      </div>
    </>
  );
}
export default HomePage;
