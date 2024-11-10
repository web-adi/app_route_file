import {
  AddProductModal,
  TodoBlkStyled,
} from "@/styles/StyledComponent/TodoBlkStyled";
import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, TextField } from "@mui/material";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper/MuiModalWrapper";
import ViewProductDetails from "../ViewProductDetails/ViewProductDetails";

const TodoBlk = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <TodoBlkStyled className="commonGap">
      <Container fixed>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Product +{" "}
        </Button>

        <ViewProductDetails/>

        {/* Modal */}
        <MuiModalWrapper open={open} onClose={handleClose} title="Add Product">
          <AddProductModal>
            <Box className="cmnFrom">
              <TextField placeholder="Product Name" fullWidth />
            </Box>
            <Box className="cmnFrom">
              <TextField placeholder="Product Qantity" fullWidth />
            </Box>
            <Box className="cmnFrom">
              <TextField placeholder="Agent Name" fullWidth />
            </Box>
            <Button variant="contained" color="primary" className="addBtn">
              Add
            </Button>
          </AddProductModal>
        </MuiModalWrapper>
      </Container>
    </TodoBlkStyled>
  );
};

export default TodoBlk;
