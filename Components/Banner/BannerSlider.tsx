import assets from "@/json/assets";
import { primaryColors } from "@/mui-theme/_muiPalette";
import ButtonArrowIcon from "@/ui/icons/ButtonArrowIcon";
import { Box, Button, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const BannerSliderWrap = styled(Box)`
  .bannerSlider {
    background: ${primaryColors.black};
    padding: 20px 60px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .bnr_left {
      h1 {
        color: ${primaryColors.white};
        font-size: 48px;
        font-weight: 600;
        margin: 20px 0;
      }

      .shopNow_btn {
        color: ${primaryColors.white};
        background: none;
        position: relative;
        padding-bottom: 5px;
        min-width: auto;
        padding: 0;
        transition: all 0.3s ease-in-out;
        &:hover {
          &::after {
            content: "";
            position: absolute;
            width: 50px;
            height: 1px;
            left: 0;
            bottom: 0;
            background: ${primaryColors.white};
          }
        }
      }
    }
  }
`;

const BannerSlider = () => {
  return (
    <BannerSliderWrap>
      <Box className="bannerSlider">
        <Box className="bnr_left">
          <Image
            src={assets.apple_logo}
            width={190}
            height={49}
            alt="apple_logo_img"
          />
          <Typography variant="h1">
            Up to 10% <br /> off Voucher
          </Typography>
          <Button endIcon={<ButtonArrowIcon />} className="shopNow_btn">
            Shop Now
          </Button>
        </Box>
        <Box className="bnr_rgt">
          <Image
            src={assets.iphone_14_img}
            width={340}
            height={280}
            alt="iphone_14_img"
          />
        </Box>
      </Box>
    </BannerSliderWrap>
  );
};

export default BannerSlider;
