import { FooterWrap } from "@/styles/StyledComponent/FooterWrap";
import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid2, Typography } from "@mui/material";

const Footer = () => {
  return (
    <FooterWrap>
      <Container fixed>
        <Box className="ftr_top">
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 2.4 }}>
              <Typography variant="h5">Exclusive</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2.4 }}>
              <Typography variant="h5">Support</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2.4 }}>
              <Typography variant="h5">Account</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2.4 }}>
              <Typography variant="h5">Quick Link</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2.4 }}>
              <Typography variant="h5">Download App</Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
