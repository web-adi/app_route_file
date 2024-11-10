import { ViewProductDetailsWrap } from "@/styles/StyledComponent/ViewProductDetailsWrap";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const tableData = [
  {
    productName: "Ipnone",
    quantity: 4,
    agentName: "relince",
  },
];

const ViewProductDetails = () => {
  return (
    <ViewProductDetailsWrap>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Product Quantity</TableCell>
            <TableCell align="left">Agent Name</TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Update</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{item.productName}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left">{item.productName}</TableCell>
              <TableCell align="left">
                <Button variant="contained" color="secondary">
                  Edit
                </Button>
              </TableCell>
              <TableCell align="left">
                <Button variant="contained" color="success">
                  Upadate
                </Button>
              </TableCell>
              <TableCell align="left">
                <Button color="warning" variant="contained">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ViewProductDetailsWrap>
  );
};

export default ViewProductDetails;
