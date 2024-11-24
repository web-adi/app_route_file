import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled } from "@mui/material";

export const FlashSalesWrap = styled(Box)`
  .slick-slider {
    .slick-list {
      margin: 0 -15px;
      .slick-slide {
        padding: 0 15px;
        img {
          display: inline-block;
        }
      }
    }
  }

  .arrow_btn {
    button {
      min-width: auto;
      background: ${primaryColors.colorF6EFF8};
      width: 46px;
      height: 46px;
      border-radius: 50%;
      padding: 5px;
      transition: all 0.3s ease-in-out;
      color: black;
      &:hover {
        background: ${primaryColors.primary};
        color: ${primaryColors.white};
      }
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .viewAllBtn {
    max-width: 234px;
    height: 56px;
    background: ${primaryColors.primary};
    font-size: 16px;
    width: 100%;
    text-transform: capitalize;
    font-weight: 400;
    color: ${primaryColors.white};
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: ${primaryColors.black};
    }
  }
`;
