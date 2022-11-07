import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Slider1, Slider2, Slider3 } from "../assets/images";

const HomeCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={2000}
      showThumbs={false}
      showArrows={true}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
      showIndicators={true}
    >
      <div>
        <img src={Slider1} className="rounded-md" />
      </div>
      <div>
        <img src={Slider2} className="rounded-md" />
      </div>
      <div>
        <img src={Slider3} className="rounded-md" />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
