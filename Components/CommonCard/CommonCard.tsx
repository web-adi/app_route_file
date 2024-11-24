import assets from "@/json/assets";
import { primaryColors } from "@/mui-theme/_muiPalette";
import { CommonCardWrap } from "@/styles/StyledComponent/CommonCardWrap";
import { Box, Chip, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface commonCardProps {
  discount: number;
  productName: string;
  price: number;
  crossPrice: number;
  ratingVal: number;
  productImg: string;
}

const CommonCard = ({
  discount,
  productName,
  price,
  crossPrice,
  ratingVal,
  productImg,
}: commonCardProps) => {
  return (
    <CommonCardWrap>
      <Link href="#">
        <Box className="main_wrap">
          <Box className="upper_blk">
            <Box className="chip_wrap">
              <Chip label={`- ${discount}%`} />
            </Box>
            <figure>
              <Image
                src={productImg}
                width={172}
                height={152}
                alt="gaming_remote"
              />
            </figure>
          </Box>
          <Box
            className="lower_blk"
            sx={{
              marginTop: "10px",
            }}
          >
            <Typography variant="body1">{productName}</Typography>
            <Stack direction="row" alignItems="center">
              <Typography
                variant="body1"
                sx={{
                  marginRight: "10px",
                  color: primaryColors.primary,
                }}
              >
                ${price}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: primaryColors.color7D8184,
                  textDecoration: "line-through",
                }}
              >
                ${crossPrice}
              </Typography>
            </Stack>
            <Box className="rating">
              <Rating name="simple-controlled" value={ratingVal} readOnly />
              <Typography variant="body1">(88)</Typography>
            </Box>
          </Box>
        </Box>
      </Link>
    </CommonCardWrap>
  );
};

export default CommonCard;
