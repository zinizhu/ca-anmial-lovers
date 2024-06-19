import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { DOGS_INFO } from "./Constants";
import { Header } from "./Header";

export function SignUpForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dogInfo = DOGS_INFO.find((dog) => dog.id.toString() == id);

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

      <Container>
        {dogInfo ? (
          <Card>
            <CardContent>
              <Typography variant="h5">
                Sign Up to Help - {dogInfo.name}
              </Typography>
              <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                  {/* Dog Information */}

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Dog Name"
                      value={dogInfo.name}
                      fullWidth
                      margin="normal"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Dog Breed"
                      value={dogInfo.breed}
                      fullWidth
                      margin="normal"
                      disabled
                    />
                  </Grid>

                  {/* Divider */}
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>

                  {/* Person Information */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label="Person Name"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Email" fullWidth margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Phone Number" fullWidth margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Address" fullWidth margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Home Style" fullWidth margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Number of Cats at Home"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Number of Dogs at Home"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: "16px" }}
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h5">Dog not found</Typography>
        )}
      </Container>
    </>

    // <Box
    //   component="form"
    //   sx={{
    //     "& .MuiTextField-root": { m: 1, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <div>
    //     <TextField
    //       required
    //       id="outlined-required"
    //       label="Required"
    //       defaultValue="Hello World"
    //     />
    //     <TextField
    //       disabled
    //       id="outlined-disabled"
    //       label="Disabled"
    //       defaultValue="Hello World"
    //     />
    //     <TextField
    //       id="outlined-password-input"
    //       label="Password"
    //       type="password"
    //       autoComplete="current-password"
    //     />
    //     <TextField
    //       id="outlined-read-only-input"
    //       label="Read Only"
    //       defaultValue="Hello World"
    //       InputProps={{
    //         readOnly: true,
    //       }}
    //     />
    //     <TextField
    //       id="outlined-number"
    //       label="Number"
    //       type="number"
    //       InputLabelProps={{
    //         shrink: true,
    //       }}
    //     />
    //     <TextField id="outlined-search" label="Search field" type="search" />
    //     <TextField
    //       id="outlined-helperText"
    //       label="Helper text"
    //       defaultValue="Default Value"
    //       helperText="Some important text"
    //     />
    //   </div>
    // </Box>
  );
}
