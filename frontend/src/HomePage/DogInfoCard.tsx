import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid"; // Grid version 1
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Dog, DogStatus } from "./constants";
import { formatDate } from "../helper_functions";

type DogInfoProps = {
  dogInfo: Dog;
};

export function DogInfoCard({ dogInfo }: DogInfoProps) {
  const navigate = useNavigate();

  const [dogsStatus, setDogsStatus] = useState<DogStatus[]>();

  const fetchDogsStatus = async () => {
    const response = await fetch("http://localhost:8080/api/dogs/status");
    const dogsStatusFromBackend = await response.json();
    setDogsStatus(dogsStatusFromBackend.dogs_status);
  };

  useEffect(() => {
    fetchDogsStatus();
  }, []);

  const dogStatus = dogsStatus
    ? dogsStatus.find((dogStatus) => dogStatus.dog_id === dogInfo.id)
    : undefined;

  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      {dogStatus ? (
        <div>
          <CardContent>
            # People Showed Interest: {dogStatus.number_of_interested}
          </CardContent>
        </div>
      ) : (
        <CardContent># People Showed Interest: UNKOWN </CardContent>
      )}
      <CardMedia
        component="img"
        height="200"
        image={dogInfo.image_urls[0]}
        alt={dogInfo.name}
      />
      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            Name: {dogInfo.name}
          </Grid>
          <Grid item xs={12}>
            Deadline: {formatDate(dogInfo.deadline)}
          </Grid>
          <Grid item xs={12}>
            Breed: {dogInfo.breed}
          </Grid>
          <Grid item xs={12}>
            Age: {dogInfo.year} years {dogInfo.month} month
          </Grid>
          <Grid item xs={12}>
            Weight: {dogInfo.weight} LB
          </Grid>
          <Grid item xs={12}>
            Gender: {dogInfo.gender}
          </Grid>
          <Grid item xs={12}>
            Medical Condition: {dogInfo.medical_condition}
          </Grid>
        </Grid>
      </CardContent>

      <CardActions style={{ justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="info"
          size="large"
          onClick={() => navigate(`/dog-detail/${dogInfo.id}`)}
        >
          Learn More
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => navigate(`/sign-up-form/${dogInfo.id}`)}
        >
          HELP the Dog!
        </Button>
      </CardActions>
    </Card>
  );
}
