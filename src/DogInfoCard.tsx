import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid"; // Grid version 1
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { DOGS_STATUS } from "./Constants";
import { Dog } from "./Constants";
import { formatDate } from "./UtilityFunctions";

type DogInfoProps = {
  dogInfo: Dog;
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
          onClick={() => navigate(`/sign-up-form`)}
        >
          HELP the Dog!
        </Button>
      </CardActions>
    </Card>
  );
}
