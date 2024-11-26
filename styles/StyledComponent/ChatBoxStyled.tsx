import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled } from "@mui/material";

export const ChatBoxStyled = styled(Box)`
  .utr_blk {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.6);
    height: 600px;
    position: relative;
    .inr_blk {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .statusImg {
        line-height: 0;
        max-width: 300px;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .view_blk {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 10px;

      .eyeButton {
        width: 100%;
        text-align: center;
        button {
          min-width: auto;
          padding: 0;
        }
      }
    }

    .toggleBox {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.3s ease-in-out;
      &.active {
        opacity: 1;
        transform: translate(0);
        transition: all 0.3s ease-in-out;
      }
      .toggle_inr_blk {
        .top_wrap {
          background-color: ${primaryColors.primary};
          padding: 10px;
          border-radius: 15px 15px 0 0;
        }
        .viewUserList {
          width: 100%;
          max-height: 250px;
          overflow: auto;
          background-color: ${primaryColors.black};
          li {
            padding: 10px;
            figure {
              width: 45px;
              height: 45px;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
