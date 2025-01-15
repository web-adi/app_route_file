import {
  FlashSalesWrap,
  OtpModalWrap,
} from "@/styles/StyledComponent/FlashSalesWrap";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import CommonHeader from "../CommonHeader/CommonHeader";
import { Box, Button } from "@mui/material";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper/MuiModalWrapper";
import OtpInput from "react-otp-input";

const FlashSales = () => {
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);
  const handelToggel = () => {
    setOpen(!open);
  };
  return (
    <FlashSalesWrap className="commonGap">
      <Container fixed>
        <CommonHeader title="Today’s" sectionHead="Flash Sales" />
        <Button onClick={handelToggel}>Open</Button>
        <OtpModalWrap>
          <MuiModalWrapper open={open} title="Otp" onClose={handelToggel}>
            <Box className="otp_blk">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span> </span>}
                renderInput={(props) => <input {...props} />}
              />
            </Box>
          </MuiModalWrapper>
        </OtpModalWrap>
      </Container>
    </FlashSalesWrap>
  );
};

export default FlashSales;
