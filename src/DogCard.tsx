import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { List } from '@mui/material';

export type Dog = {
  name: string;
  age: number;
};

type DogProps = {
  dog: Dog;
};


export function DogCard({dog} : DogProps) {
  const navigate =  useNavigate()

  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          # People Showed Interest: 3
        </CardContent>
        <CardMedia
          component="img"
          height="200"
          image="../images/Chichi.jpeg"
          alt="Chichi"
        />
        <CardContent>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                NAME: {dog.name}
              </Grid>
              <Grid item xs={6}>
                Deadline: xx/xx
              </Grid>
              <Grid item xs={6}>
                Breed: GSD
              </Grid>
              <Grid item xs={6}>
                Age: {dog.age} years old
              </Grid>
              <Grid item xs={6}>
                Weight: 50LB
              </Grid>
              <Grid item xs={6}>
                Gender: Female
              </Grid>
              <Grid item xs={12}>
                Medical Condition: Needs Care
              </Grid>
            </Grid>
        </CardContent>

        <CardActions>
          <Button variant="outlined" size="large" onClick={() => navigate("/dogDetail")}>
            Learn More
          </Button>
          <Button variant="contained" color="error" size="large">I WANNA HELP!</Button>
        </CardActions>
    </Card>
  )
}