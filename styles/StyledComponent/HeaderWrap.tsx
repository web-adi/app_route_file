import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled } from "@mui/material";

export const HeaderWrap = styled(Box)`
  background: ${primaryColors.white};

  .MuiToolbar-root {
    min-height: auto;
    padding: 15px 0;
  }
  .headerContainer {
    background: transparent;
    box-shadow: none;
  }

  .headerLogo {
    color: ${primaryColors.black};
    font-weight: 700;
    font-size: 24px;
  }

  .navBar {
    margin-left: 80px;
    a {
      color: ${primaryColors.black};
      transition: all 0.3s ease-in-out;
      font-size: 16px;
      font-weight: 400;
      display: inline-block;
      position: relative;
      padding-bottom: 2px;
      &:hover {
        color: ${primaryColors.primary};

        &::after {
          content: "";
          position: absolute;
          width: 40px;
          height: 1px;
          background: ${primaryColors.primary};
          left: 0;
          bottom: 0;
        }
      }
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }

  .hrd_rgt {
    margin-left: auto;
    display: flex;
    align-items: center;

    .MuiFormControl-root {
      .MuiInputBase-root {
        background: rgba(0, 0, 0, 0.1);
        padding: 8px 10px;
        border-radius: 10px;
        input {
          padding: 0;
          font-size: 16px;
        }

        .MuiIconButton-root {
          padding: 0;
        }
        fieldset {
          display: none;
        }
      }
    }

    .iconButton_wrap {
      margin-left: 24px;
      display: flex;
      align-items: center;
      .MuiIconButton-root {
        padding: 0;
        &:not(:last-child) {
          margin-right: 15px;
        }
      }
    }
  }
`;
