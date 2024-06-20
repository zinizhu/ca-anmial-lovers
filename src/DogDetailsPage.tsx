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
import { Card, CardContent, Container, CardActions } from "@mui/material";

import { DOGS_INFO } from "./Constants";
import { Header } from "./Header";
import { ImagesSlider } from "./ImagesSlider";
import { VideosSlider } from "./VideosSlider";
import {
  VOLUNTEERS_INFO,
  DOG_VOLUNTEER_MAPPING,
  DOGS_STATUS,
} from "./Constants";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

export function DogDetailsPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const dogInfo = DOGS_INFO.find((d) => d.id.toString() === id);

  const volunteerId = dogInfo ? DOG_VOLUNTEER_MAPPING[dogInfo.id] : undefined;
  const volunteerInfo = volunteerId
    ? VOLUNTEERS_INFO.find((volunteer) => volunteer.id === volunteerId)
    : undefined;

  const dogStatus = dogInfo ? DOGS_STATUS[dogInfo.id] : undefined;

  const ResourceInfo = {
    numberOfPeopleInterested: 3,
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
                      style={{ background: "#fef2e0" }}
                    >
                      <Grid item xs={12} sm={6}>
                        <Card sx={{ minHeight: 300 }}>
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
                        <Card sx={{ minHeight: 300 }}>
                          <CardContent>
                            <Typography
                              variant="h5"
                              color="red"
                              sx={{ mb: 1.5 }}
                            >
                              Deadline: {dogInfo.deadline}
                            </Typography>
                            {dogStatus ? (
                              <div>
                                <Typography variant="body1">
                                  Rescue Status: {dogStatus.rescue_status}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 1.5 }}>
                                  Adopter/Foster Status:{" "}
                                  {dogStatus.adopter_foster_status}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 1.5 }}>
                                  {dogStatus.number_of_interested} people
                                  interested!
                                </Typography>
                              </div>
                            ) : (
                              <Typography variant="body1">
                                Dog Status Not Available
                              </Typography>
                            )}

                            {volunteerInfo ? (
                              <div>
                                <Typography variant="body1">
                                  Contact : {volunteerInfo.name}
                                </Typography>
                                <Typography variant="body1">
                                  Phone number : {volunteerInfo.phone_number}
                                </Typography>
                              </div>
                            ) : (
                              <Typography variant="body1">
                                No volunteer assigned
                              </Typography>
                            )}
                          </CardContent>
                          <CardActions>
                            <Button
                              variant="contained"
                              color="error"
                              size="large"
                              onClick={() =>
                                navigate(`/sign-up-form/${dogInfo.id}`)
                              }
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
                    <Box sx={{ bgcolor: "", height: "20vh" }}>
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
