import { FlashSalesWrap } from "@/styles/StyledComponent/FlashSalesWrap";
import React, { useRef } from "react";
import Container from "@mui/material/Container";
import CommonHeader from "../CommonHeader/CommonHeader";
import CommonCard from "../CommonCard/CommonCard";
import { flashSaleData } from "@/json/mock/demo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Stack } from "@mui/material";
import LeftArrow from "@/ui/icons/LeftArrow";
import RightArrow from "@/ui/icons/RightArrow";
const FlashSales = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
  };
  return (
    <FlashSalesWrap className="commonGap">
      <Container fixed>
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <CommonHeader title="Today’s" sectionHead="Flash Sales" />
          <Box className="arrow_btn">
            <Button onClick={() => sliderRef.current?.slickPrev()}>
              <LeftArrow />
            </Button>
            <Button onClick={() => sliderRef.current?.slickNext()}>
              <RightArrow />
            </Button>
          </Box>
        </Stack>
        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          <Slider {...settings} ref={sliderRef}>
            {flashSaleData.map((data, index) => (
              <CommonCard key={index} {...data} />
            ))}
          </Slider>

          <Box
            sx={{
              marginTop: "70px",
              textAlign: "center",
            }}
          >
            <Button className="viewAllBtn">View All Products</Button>
          </Box>
        </Box>
      </Container>
    </FlashSalesWrap>
  );
};

export default FlashSales;
