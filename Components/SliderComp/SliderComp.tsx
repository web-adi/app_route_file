import assets from "@/json/assets";
import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SliderCompWrap = styled(Box)`
  padding: 100px 0;

  .eachSlider {
    figure {
      line-height: 0;
      width: 300px;
      height: 200px;
      img {
        transition: all 0.3s ease-in-out;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
        &:hover {
          scale: 1.1;
        }
      }
    }
    .textBlk {
      margin-top: 15px;
      p {
        &:hover {
          color: ${primaryColors.errorMain};
        }
      }
    }
  }
`;

const SliderComp = () => {
  return (
    <SliderCompWrap>
      <Link href="#" className="eachSlider">
        <Box>
          <figure>
            <Image
              src={assets.carImg}
              width={1000}
              height={1000}
              alt="carImg"
            />
          </figure>
          <Box className="textBlk">
            <Typography variant="body1">Book Here</Typography>
          </Box>
        </Box>
      </Link>
    </SliderCompWrap>
  );
};

export default SliderComp;
