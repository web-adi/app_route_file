import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled } from "@mui/material";

export const FooterWrap = styled(Box)`
  background: ${primaryColors.black};

  .ftr_top {
    padding: 60px 0;

    h5 {
      color: ${primaryColors.white};
    }
  }
`;
