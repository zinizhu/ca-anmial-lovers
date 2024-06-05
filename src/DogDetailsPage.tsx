import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { dogsInfo } from "./DogsInfo";
import { Header } from "./Header";
import { Card, CardContent, Container } from "@mui/material";
import { ImagesSlider } from "./ImagesSlider";
import { VideosSlider } from "./VideosSlider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
              <ImagesSlider images={dogInfo.images} />
              <Container maxWidth="md">
                <Stack spacing={2}>
                  <Item>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6}>
                        Name: {dogInfo.name}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        Deadline: {dogInfo.deadline}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        Breed: {dogInfo.breed}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        Age: {dogInfo.age} years old
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        Weight: {dogInfo.weight} LB
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        Gender: {dogInfo.gender}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        Medical Condition: {dogInfo.medicalCondition}
                      </Grid>
                    </Grid>
                  </Item>

                  <Item>
                    <CssBaseline />
                    <Box sx={{ bgcolor: "#fef1e1", height: "20vh" }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Description
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {dogInfo.description}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Item>
                  <Item>
                    <VideosSlider videos={dogInfo.videos} />
                  </Item>
                </Stack>
              </Container>
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
