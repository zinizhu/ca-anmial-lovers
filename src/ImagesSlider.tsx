import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Images = {
  images: string[];
};

export function ImagesSlider({ images }: Images) {
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
        {images.map((image, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px", // Height of the image container
              backgroundColor: "#f0f0f0", // Background color for padding effect
            }}
          >
            <img
              src={image}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
