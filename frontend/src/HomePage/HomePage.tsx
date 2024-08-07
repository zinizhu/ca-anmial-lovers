import Grid from "@mui/material/Grid"; // Grid version 1
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { DogInfoCard } from "./DogInfoCard";
import { Dog } from "./constants";
import { Header } from "../Header";

document.body.style.backgroundColor = "#fef2e0";

function HomePage() {
  const [dogsInfo, setDogsInfo] = useState<Dog[]>();

  const fetchDogsInfo = async () => {
    const response = await fetch("http://localhost:8080/api/dogs/info");
    const dogsInfoFromBackend = await response.json();
    setDogsInfo(dogsInfoFromBackend.dogs);
  };

  useEffect(() => {
    fetchDogsInfo();
  }, []);

  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div>
        <Container>
          <Grid container rowSpacing={4} padding={5}>
            {dogsInfo ? (
              dogsInfo.map((dogInfo) => (
                <Grid item xs={12} sm={6} md={4} key={dogInfo.id}>
                  <DogInfoCard dogInfo={dogInfo} />
                </Grid>
              ))
            ) : (
              <Typography variant="h5" component="h2">
                No Dogs Information Found.
              </Typography>
            )}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
export default HomePage;
