import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, styled } from "@mui/material";

export const TodoBlkStyled = styled(Box)``;

export const AddProductModal = styled(Box)`
  margin-top: 20px;

  .cmnFrom {
    margin-bottom: 15px;

    .MuiFormControl-root {
      .MuiInputBase-root {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 12px;
      }
      fieldset {
        display: none;
      }
    }
  }

  .addBtn {
    margin-top: 10px;
    max-width: 130px;
    width: 100%;
    min-width: auto;
    &:hover {
      background: ${primaryColors.primary};
    }
  }
`;
