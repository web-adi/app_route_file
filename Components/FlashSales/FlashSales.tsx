import { FlashSalesWrap } from "@/styles/StyledComponent/FlashSalesWrap";
import React from "react";
import Container from "@mui/material/Container";
import CommonHeader from "../CommonHeader/CommonHeader";

const FlashSales = () => {
  return (
    <FlashSalesWrap className="commonGap">
      <Container fixed>
        <CommonHeader title="Today’s" sectionHead="Flash Sales" />
      </Container>
    </FlashSalesWrap>
  );
};

export default FlashSales;
