import { ViewProductDetailsWrap } from "@/styles/StyledComponent/ViewProductDetailsWrap";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const tableData = [
  {
    productName: "Ipnone",
    quantity: 4,
    agentName: "relince",
  },
];

const ViewProductDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(tableData);
  }, []);

  //   Edit handler

  const handelEdit = (id) => {
    alert(id);
  };

  const handelDelete = (id) => {
 if(id > 0){
    const dt = data.filter(item => item.id ==)
 }
  };

  return (
    <ViewProductDetailsWrap>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Sr No</TableCell>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Product Quantity</TableCell>
            <TableCell align="left">Agent Name</TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{item.productName}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left">{item.agentName}</TableCell>
              <TableCell align="left">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) => handelEdit(index + 1)}
                >
                  Edit
                </Button>
              </TableCell>

              <TableCell align="left">
                <Button
                  color="warning"
                  variant="contained"
                  onClick={(e) => handelEdit(index + 1)}
                >
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
