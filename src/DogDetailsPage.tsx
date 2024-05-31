import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

import { dogsInfo } from "./DogsInfo";
import { Header } from "./Header";
import { Container } from "@mui/material";

export function DogDetailsPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const dogInfo = dogsInfo.find((d) => d.id === id);

  return (
    <>
      <div>
        <Header></Header>
      </div>

      <div>
        <Button
          startIcon={<ArrowBackIosNewIcon />}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </div>

      <div>
        <Container>
          {dogInfo ? (
            <Container maxWidth="md">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  Name: {dogInfo.name}
                </Grid>
                <Grid item xs={6}>
                  Deadline: {dogInfo.deadline}
                </Grid>
                <Grid item xs={6}>
                  Breed: {dogInfo.breed}
                </Grid>
                <Grid item xs={6}>
                  Age: {dogInfo.age} years old
                </Grid>
                <Grid item xs={6}>
                  Weight: {dogInfo.weight} LB
                </Grid>
                <Grid item xs={6}>
                  Gender: {dogInfo.gender}
                </Grid>
                <Grid item xs={12}>
                  Medical Condition: {dogInfo.medicalCondition}
                </Grid>
              </Grid>
            </Container>
          ) : (
            <Typography variant="h5" component="h2">
              Dog not found
            </Typography>
          )}
        </Container>
      </div>
    </>
  );
}
