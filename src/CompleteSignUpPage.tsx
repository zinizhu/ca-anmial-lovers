import Typography from "@mui/material/Typography";
import { Card, CardContent, Container, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Grid version 1

import { Header } from "./Header";

export function CompleteSignUp() {
  const navigate = useNavigate();

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
        <Container maxWidth="md">
          <Grid
            item
            container
            xs={12}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Card sx={{ maxWidth: 550 }} variant="outlined">
              <CardMedia
                component="img"
                height={600}
                image="../images/dog_loves_you.jpg"
              />
              <CardContent>
                <Typography variant="h3" align="center">
                  Thanks for signing up!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </div>
    </>
  );
}
