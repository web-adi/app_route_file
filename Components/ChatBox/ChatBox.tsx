import assets from "@/json/assets";
import { primaryColors } from "@/mui-theme/_muiPalette";
import { ChatBoxStyled } from "@/styles/StyledComponent/ChatBoxStyled";
import Eye from "@/ui/icons/Eye";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export const viewsListData = [
  {
    userName: "Sayan",
  },
  {
    userName: "Sayan",
  },
  {
    userName: "Sayan",
  },
  {
    userName: "Sayan",
  },
  {
    userName: "Sayan",
  },
];

const ChatBox = () => {
  const [openBox, setOpenBox] = useState(false);

  const toggleBox = () => {
    setOpenBox(!openBox);
  };
  return (
    <ChatBoxStyled>
      <Box className="utr_blk" onClick={toggleBox}>
        <Box className="inr_blk">
          <figure className="statusImg">
            <Image
              src={assets.carImg}
              width={1000}
              height={1000}
              alt="carImg"
            />
          </figure>
        </Box>
        <Box className="view_blk">
          <Box>
            <Typography variant="body1">test for </Typography>
          </Box>
          <Box className="eyeButton">
            <Button onClick={toggleBox}>
              <Eye />
            </Button>
          </Box>
        </Box>
        <Box className={`toggleBox  ${openBox ? "active" : ""}`}>
          <Box className="toggle_inr_blk">
            <Box className="top_wrap">
              <Typography variant="body1">100 Views</Typography>
            </Box>
            <List className="viewUserList" disablePadding>
              {viewsListData.map((data, index) => (
                <ListItem disablePadding key={index}>
                  <figure>
                    <Image
                      src={assets.carImg}
                      width={1000}
                      height={1000}
                      alt="apple_logo"
                    />
                  </figure>
                  <Box
                    sx={{
                      marginLeft: "10px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: primaryColors.white,
                        fontWeight: "600",
                      }}
                    >
                      {data.userName}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "10px",
                        fontWeight: "400",
                        color: primaryColors.white,
                      }}
                    >
                      10 sec ago
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </ChatBoxStyled>
  );
};

export default ChatBox;
