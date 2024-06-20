import * as React from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import { Card, CardContent, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { DOGS_INFO } from "./Constants";
import { Header } from "./Header";

export function SignUpForm() {
  const navigate = useNavigate();

  const { id } = useParams();
  const dogInfo = DOGS_INFO.find((dog) => dog.id.toString() == id);

  const [fosterOrAdopt, setFosterOrAdopt] = React.useState("");
  const handleFosterOrAdoptChange = (event: SelectChangeEvent<string>) => {
    setFosterOrAdopt(event.target.value as string);
  };

  const [numberOfCats, setNumberOfCats] = React.useState("");
  const handleNumberOfCatsChange = (event: SelectChangeEvent<string>) => {
    setNumberOfCats(event.target.value as string);
  };

  const [numberOfDogs, setNumberOfDogs] = React.useState("");
  const handleNumberOfDogsChange = (event: SelectChangeEvent<string>) => {
    setNumberOfDogs(event.target.value as string);
  };

  const [homeType, sethomeType] = React.useState("");
  const handleHomeTypeChange = (event: SelectChangeEvent<string>) => {
    sethomeType(event.target.value as string);
  };

  const [yard, setYard] = React.useState("");
  const handleYardChange = (event: SelectChangeEvent<string>) => {
    setYard(event.target.value as string);
  };

  const [experience, setExperience] = React.useState("");
  const handleExperienceChange = (event: SelectChangeEvent<string>) => {
    setExperience(event.target.value as string);
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
                    <TextField
                      required
                      label="Phone Number"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="City" fullWidth margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="State" fullWidth margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Zip Code" fullWidth margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={3} container alignItems="center">
                    <Typography variant="body1">
                      Do you want to adopt or foster?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 240 }}
                    >
                      <InputLabel>Foster/Adpot</InputLabel>
                      <Select
                        value={fosterOrAdopt}
                        onChange={handleFosterOrAdoptChange}
                        label="Foster or Adopt"
                      >
                        <MenuItem value={"Foster"}>Foster</MenuItem>
                        <MenuItem value={"Adopt"}>Adopt</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3} container alignItems="center">
                    <Typography variant="body1">
                      What is the type of your home?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 240 }}
                    >
                      <InputLabel>Home Type</InputLabel>
                      <Select
                        value={homeType}
                        onChange={handleHomeTypeChange}
                        label="Home Type"
                      >
                        <MenuItem value={"Apartment"}>Apartment</MenuItem>
                        <MenuItem value={"Townhouse or Condo"}>
                          Townhouse or Condo
                        </MenuItem>
                        <MenuItem value={"Single Family House"}>
                          Single Family House
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3} container alignItems="center">
                    <Typography variant="body1">
                      Is there yard in your home?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 240 }}
                    >
                      <InputLabel>Yard</InputLabel>
                      <Select
                        value={yard}
                        onChange={handleYardChange}
                        label="Yard"
                      >
                        <MenuItem value={1}>Yes</MenuItem>
                        <MenuItem value={0}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3} container alignItems="center">
                    <Typography variant="body1">
                      How many cats live in your home?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 240 }}
                    >
                      <InputLabel>Number of Cats</InputLabel>
                      <Select
                        value={numberOfCats}
                        onChange={handleNumberOfCatsChange}
                        label="Number of Cats"
                      >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={"more than 2"}>more than 2</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3} container alignItems="center">
                    <Typography variant="body1">
                      How many dogs live in your home?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 240 }}
                    >
                      <InputLabel>Number of Dogs</InputLabel>
                      <Select
                        value={numberOfDogs}
                        onChange={handleNumberOfDogsChange}
                        label="Number of Dogs"
                      >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={"more than 2"}>more than 2</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3} container alignItems="center">
                    <Typography variant="body1">
                      Do you have experience in handling dogs?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 240 }}
                    >
                      <InputLabel>Experience in handling dog </InputLabel>
                      <Select
                        value={experience}
                        onChange={handleExperienceChange}
                        label="Experience"
                      >
                        <MenuItem value={1}>Yes</MenuItem>
                        <MenuItem value={0}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3} container alignItems="center">
                    <Typography variant="body1">Notes</Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Notes"
                      multiline
                      fullWidth
                      rows={4}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: "16px" }}
                  onClick={() => navigate(`/thanks-for-sign-up`)}
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
  );
}
