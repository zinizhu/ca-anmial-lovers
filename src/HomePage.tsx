import * as React from "react";

import Grid from "@mui/material/Grid"; // Grid version 1
import Container from "@mui/material/Container";

import { DogInfoCard } from "./DogInfoCard";
import { DOGS_INFO } from "./Constants";
import { Header } from "./Header";

document.body.style.backgroundColor = "#fef2e0";

function HomePage() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div>
        <Container>
          <Grid container rowSpacing={4} padding={5}>
            {DOGS_INFO.map((dogInfo, dogIdx) => (
              <Grid item xs={12} sm={6} md={4} key={dogIdx}>
                <DogInfoCard dogInfo={dogInfo} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
export default HomePage;
