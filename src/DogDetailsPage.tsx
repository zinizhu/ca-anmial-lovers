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

import { DOGS_INFO } from "./Constants";
import { Header } from "./Header";
import { Card, CardContent, Container, CardActions } from "@mui/material";
import { ImagesSlider } from "./ImagesSlider";
import { VideosSlider } from "./VideosSlider";
import {
  VOLUNTEERS_INFO,
  DOG_VOLUNTEER_MAPPING,
  DOGS_STATUS,
} from "./Constants";
import { useState, useEffect } from "react";

type Gender = "male" | "female";

type MedicalCondition = "none" | "exist";

type Dog = {
  id: number;
  name: string;
  year: number;
  month: number;
  weight: number;
  deadline: string;
  breed: string;
  gender: Gender;
  medical_condition: MedicalCondition;
  medical_condition_note: string;
  description: string;
  image_urls: string[];
  video_urls: string[];
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

export const DogDetailsPage = () => {
  const [dog, setDog] = useState<Dog>({
    id: 0,
    name: 'unknown',
    year: 0,
    month: 0,
    weight: 0,
    deadline: 'unknown',
    breed: 'unknown',
    gender: 'female',
    medical_condition: 'exist',
    medical_condition_note: '',
    description: '',
    image_urls: [],
    video_urls: []
  });

  const navigate = useNavigate();

  const { id } = useParams();

  // Fetch dog info from backend
  const fetchDog = async () => {
    const response = await fetch(`http://localhost:8080/api/dog/info/${id}`);
    const dogInfoFromBackend = await response.json();
    setDog(dogInfoFromBackend.dog)
  }
  
  const volunteerId = dog ? DOG_VOLUNTEER_MAPPING[dog.id] : undefined;
  const volunteerInfo = volunteerId
    ? VOLUNTEERS_INFO.find((volunteer) => volunteer.id === volunteerId)
    : undefined;

  const dogStatus = dog ? DOGS_STATUS[dog.id] : undefined;

  const ResourceInfo = {
    numberOfPeopleInterested: 3,
  };

  useEffect(() => {
    fetchDog()
  }, []);

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
          {dog ? (
            <Container maxWidth="md">
              <ImagesSlider images={dog.image_urls} />
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
                        <Card sx={{ minHeight: 250 }}>
                          <CardContent>
                            <Typography variant="h5" sx={{ mb: 1.5 }}>
                              Name: {dog.name}
                            </Typography>
                            <Typography variant="body1">
                              Breed: {dog.breed}
                              <br />
                              Age: {dog.year} year {dog.month} month
                              <br />
                              Weight: {dog.weight} LB
                              <br />
                              Gender: {dog.gender}
                              <br />
                              Medical Condition: {dog.medical_condition_note}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Card sx={{ minHeight: 250 }}>
                          <CardContent>
                            <Typography
                              variant="h5"
                              color="red"
                              sx={{ mb: 1.5 }}
                            >
                              Deadline: {dog.deadline}
                            </Typography>
                            {dogStatus ? (
                              <div>
                                <Typography variant="body1">
                                  Rescue Status: {dogStatus.rescue_status}
                                </Typography>
                                <Typography variant="body1">
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
                    <Box sx={{ bgcolor: "", height: "20vh" }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Description
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {dog.description}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Item>
                  <Item elevation={0}>
                    <VideosSlider videos={dog.video_urls} />
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
