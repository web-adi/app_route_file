import { Box, styled } from "@mui/material";

export const FlashSalesWrap = styled(Box)`
  .MuiSlider-root {
    height: 25px;
    .MuiSlider-rail {
      background: #ced1d9;
      height: 40px;
      padding: 7px;
      border-radius: 50px;
    }
    .MuiSlider-track {
      background: linear-gradient(116.39deg, #4b28a9 0%, #c655ae 63.63%);
      border: none;
      left: 7px !important;
    }

    .MuiSlider-thumb {
      display: none;
    }
  }

  .MuiTabs-root {
    .MuiTabs-scroller {
      .MuiTabs-flexContainer {
        .utr_blk {
          background: rgba(206, 209, 217, 0.2);
          padding: 9px 13px;
          border-radius: 50px;
        }
        button {
          min-height: auto;
          padding: 12px 120px;
          background: rgba(243, 243, 243, 1);
          color: #020202;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(206, 209, 217, 0.2);
            padding: 9px 13px;
          }
          &:not(:last-child) {
            margin-right: 16px;
          }
          &.Mui-selected {
            background: linear-gradient(
              114.23deg,
              rgba(132, 214, 252, 0.6) 21.89%,
              rgba(246, 170, 209, 0.4) 77.98%
            );
          }

          border-radius: 50px;
        }
      }

      .MuiTabs-indicator {
        display: none;
      }
    }
  }

  .tab_inr_content {
    .text {
      text-align: center;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 40%;
        height: 1px;
        background: rgba(206, 209, 217, 1);
        left: 0;
        top: 50%;
      }
      &::after {
        content: "";
        position: absolute;
        width: 40%;
        height: 1px;
        background: rgba(206, 209, 217, 1);
        right: 0;
        top: 50%;
      }
    }
  }
`;
