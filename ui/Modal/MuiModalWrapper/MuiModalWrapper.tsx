import { primaryColors } from "@/mui-theme/_muiPalette";
import { Box, Dialog, Modal, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface muiModalWrapperProps {
  open: boolean;
  children: JSX.Element | JSX.Element[];
  onClose?: () => void;
  title: string;
}

export const CustomDialog = styled(Dialog)`
  .MuiPaper-root {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    height: auto;
    .modalContent {
      padding: 20px;
      h6 {
        font-size: 20px;
        font-weight: 600;
        color: ${primaryColors.black};
        text-transform: uppercase;
      }
    }
  }
`;

const MuiModalWrapper = ({
  open,
  children,
  onClose,
  title,
}: muiModalWrapperProps) => {
  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modalContent">
        <Typography id="modal-modal-title" variant="h6">
          {title}
        </Typography>
        <Box>{children}</Box>
      </Box>
    </CustomDialog>
  );
};

export default MuiModalWrapper;
