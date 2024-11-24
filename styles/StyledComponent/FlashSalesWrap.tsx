import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled } from "@mui/material";

export const FlashSalesWrap = styled(Box)`
  button {
    min-width: 200px;
    height: 60px;
    border-radius: 50px;
    padding: 10px;
    background: ${primaryColors.primary};
    color: ${primaryColors.black};

    &:hover {
      padding-right: 80px;
    }
  }
`;
