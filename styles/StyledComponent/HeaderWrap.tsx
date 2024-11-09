import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled } from "@mui/material";

export const HeaderWrap = styled(Box)`
  background: ${primaryColors.white};

  .MuiToolbar-root {
    min-height: auto;
    padding: 20px 0;
  }
  .headerContainer {
    background: transparent;
    box-shadow: none;
  }

  .headerLogo {
    color: ${primaryColors.black};
  }

  .navBar {
    margin-left: 80px;
    a {
      color: ${primaryColors.black};
      transition: all 0.3s ease-in-out;
      &:hover {
        color: ${primaryColors.primary};
      }
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }

  .hrd_rgt {
    margin-left: auto;
    button {
    }
  }
`;
