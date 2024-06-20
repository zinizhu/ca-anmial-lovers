import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid"; // Grid version 1
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { DogInfo, DOGS_STATUS } from "./Constants";

type DogInfoProps = {
  dogInfo: DogInfo;
};

export function DogInfoCard({ dogInfo }: DogInfoProps) {
  const navigate = useNavigate();

  const dogStatus = DOGS_STATUS[dogInfo.id];

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
        image={dogInfo.images[0]}
        alt={dogInfo.name}
      />
      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
      </CardContent>

      <CardActions>
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
