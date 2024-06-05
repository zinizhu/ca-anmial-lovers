import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

type Videos = {
  videos: string[];
};

export function VideosSlider({ videos }: Videos) {
  return (
    <div
      style={{
        padding: "50px 90px 50px 90px",
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
        {videos.map((video) => (
          // <div
          //   style={{
          //     display: "flex",
          //     justifyContent: "center",
          //     alignItems: "center",
          //     height: "500px", // Height of the image container
          //     backgroundColor: "#f0f0f0", // Background color for padding effect
          //   }}
          // >
          <Box
            component="ul"
            sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
          >
            <Card component="li" sx={{ minWidth: 400, flexGrow: 1 }}>
              <CardCover>
                <video autoPlay loop muted>
                  <source src={video} type="video/mp4" />
                </video>
              </CardCover>
              <CardContent>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textColor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                ></Typography>
              </CardContent>
            </Card>
          </Box>
          // </div>
        ))}
      </Carousel>
    </div>
  );
}
