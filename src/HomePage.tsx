import * as React from "react";

import Grid from "@mui/material/Grid"; // Grid version 1

import { DogInfoCard } from "./DogInfoCard";
import { dogsInfo } from "./DogsInfo";
import { Header } from "./Header";

document.body.style.backgroundColor = "#fef2e0";

function HomePage() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div>
        <Grid container rowSpacing={4} padding={5}>
          {dogsInfo.map((dogInfo, dogIdx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={dogIdx}>
              <DogInfoCard dogInfo={dogInfo} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default HomePage;
