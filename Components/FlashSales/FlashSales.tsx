import { FlashSalesWrap } from "@/styles/StyledComponent/FlashSalesWrap";
import React from "react";
import Container from "@mui/material/Container";
import CommonHeader from "../CommonHeader/CommonHeader";

import { Box, Slider, Stack, Tab, Tabs, Typography } from "@mui/material";
import EthIcon from "@/ui/icons/EthIcon";
import Image from "next/image";
import assets from "@/json/assets";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const FlashSales = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <FlashSalesWrap className="commonGap">
      <Container fixed>
        <CommonHeader title="Today’s" sectionHead="Flash Sales" />

        <Slider
          defaultValue={30}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                icon={<EthIcon />}
                iconPosition="start"
                label="ETH"
                {...a11yProps(0)}
              />

              <Tab label="USDT" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box className="tab_inr_content">
              <Typography variant="body1" className="text">
                ETH Balance: = $0.004875
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1">
                  Help, My Wallet Won’t Connect!
                </Typography>
                <Typography variant="body1">
                  Can’t find tokens in your wallet?
                </Typography>
              </Stack>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </Box>

        <Box>
          <Typography variant="body1" className="cart">
            cert
          </Typography>
          <Image
            src={assets.cart_img_one}
            width={950}
            height={270}
            alt="cart_img"
          />
        </Box>
      </Container>
    </FlashSalesWrap>
  );
};

export default FlashSales;
