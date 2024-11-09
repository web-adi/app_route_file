import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled } from "@mui/material";

export const CommonHeaderWrap = styled(Box)`
  p {
    font-size: 16px;
    font-weight: 600;
    color: ${primaryColors.primary};
    position: relative;
    padding-left: 30px;

    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 40px;
      background: ${primaryColors.primary};
      top: -10px;
      left: 0;
      border-radius: 6px;
    }
  }

  h4 {
    margin-top: 20px;
    font-size: 36px;
    font-weight: 600;
  }
`;
