import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled } from "@mui/material";

export const BannerWrap = styled(Box)`
  .slick-slider {
    .slick-dots {
      bottom: 20px;
      li {
        &.slick-active {
          button {
            &::before {
              color: ${primaryColors.primary};
            }
          }
        }
        button {
          &::before {
            font-size: 12px;
            color: ${primaryColors.color7D8184};
            opacity: 1;
          }
        }
      }
    }
  }
`;
