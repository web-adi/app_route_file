import assets from "@/json/assets";
import { BannerWrap } from "@/styles/StyledComponent/BannerWrap";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
  };

  return (
    <BannerWrap>
      <Container fixed>
        <Slider {...settings}>
          <BannerSlider />
          <BannerSlider />
          <BannerSlider />
          <BannerSlider />
          <BannerSlider />
        </Slider>
      </Container>
    </BannerWrap>
  );
};

export default Banner;
