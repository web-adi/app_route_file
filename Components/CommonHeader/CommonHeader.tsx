import { CommonHeaderWrap } from "@/styles/StyledComponent/CommonHeaderWrap";
import React from "react";
import Typography from "@mui/material/Typography";

interface commonHeaderProps {
  title: string;
  sectionHead: string;
}

const CommonHeader = ({ title, sectionHead }: commonHeaderProps) => {
  return (
    <CommonHeaderWrap>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="h4">{sectionHead}</Typography>
    </CommonHeaderWrap>
  );
};

export default CommonHeader;
