import assets from "@/json/assets";
import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled } from "@mui/material";

export const CommonCardWrap = styled(Box)`
  a {
    display: inline-block;
    width: 100%;
  }
  .upper_blk {
    background: ${primaryColors.colorfdf8ff};
    text-align: center;
    position: relative;

    .chip_wrap {
      position: absolute;
      top: 10px;
      left: 10px;
    }

    figure {
      padding: 40px 0;
    }
  }

  .rating {
    display: flex;
    align-items: center;
  }

  .MuiChip-root {
    background: ${primaryColors.primary};
    width: 55px;
    height: 25px;
    padding: 5px;
    border-radius: 5px;

    .MuiChip-label {
      font-size: 12px;
      font-weight: 400;
      color: ${primaryColors.white};
      padding: 0;
    }
  }
`;
