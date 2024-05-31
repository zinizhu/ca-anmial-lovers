import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { dogsInfo } from "./DogsInfo";
import { Header } from "./Header";
import { Container } from "@mui/material";

export function DogDetailsPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const dogInfo = dogsInfo.find((d) => d.id === id);

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
              <div
                style={{
                  paddingBottom: "30px",
                }}
              >
                <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className=""
                  containerClass="container"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 3000,
                        min: 1024,
                      },
                      items: 1,
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0,
                      },
                      items: 1,
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464,
                      },
                      items: 1,
                    },
                  }}
                  rewind={false}
                  rewindWithAnimation={false}
                  rtl={false}
                  shouldResetAutoplay
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                  <img
                    src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                      display: "block",
                      height: "100%",
                      margin: "auto",
                      width: "100%",
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    style={{
                      display: "block",
                      height: "100%",
                      margin: "auto",
                      width: "100%",
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                      display: "block",
                      height: "100%",
                      margin: "auto",
                      width: "100%",
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                      display: "block",
                      height: "100%",
                      margin: "auto",
                      width: "100%",
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                      display: "block",
                      height: "100%",
                      margin: "auto",
                      width: "100%",
                    }}
                  />
                </Carousel>
              </div>
              <Container maxWidth="md">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
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
