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
import { Card, CardContent, Container, CardActions } from "@mui/material";
import { ImagesSlider } from "./ImagesSlider";
import { VideosSlider } from "./VideosSlider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

export function DogDetailsPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const dogInfo = dogsInfo.find((d) => d.id.toString() === id);

  const ResourceInfo = {
    numberOfPeopleInterested: 10,
    assignee: "John Doe",
    phone_number: 123456,
  };

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
                  <Item elevation={0}>
                    <Grid
                      container
                      spacing={4}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={12} sm={6}>
                        <Card sx={{ minHeight: 250 }}>
                          <CardContent>
                            <Typography variant="h5" sx={{ mb: 1.5 }}>
                              Name: {dogInfo.name}
                            </Typography>
                            <Typography variant="body1">
                              Breed: {dogInfo.breed}
                              <br />
                              Age: {dogInfo.age} years old
                              <br />
                              Weight: {dogInfo.weight} LB
                              <br />
                              Gender: {dogInfo.gender}
                              <br />
                              Medical Condition: {dogInfo.medicalCondition}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Card sx={{ minHeight: 250 }}>
                          <CardContent>
                            <Typography
                              variant="h4"
                              sx={{ mb: 1.5 }}
                              color="red"
                            >
                              Deadline: {dogInfo.deadline}
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 1.5 }}>
                              {ResourceInfo.numberOfPeopleInterested} people
                              interested!
                            </Typography>
                            <Typography variant="body1">
                              Contact : {ResourceInfo.assignee}
                            </Typography>
                            <Typography variant="body1">
                              Phone number : {ResourceInfo.phone_number}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              variant="contained"
                              color="error"
                              size="large"
                              onClick={() => navigate(`/sign-up-form`)}
                            >
                              Help the Dog!
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Grid>
                  </Item>

                  <Item elevation={0}>
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
                  <Item elevation={0}>
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
