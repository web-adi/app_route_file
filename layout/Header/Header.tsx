import { HeaderWrap } from "@/styles/StyledComponent/HeaderWrap";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navItems = [
    {
      name: "Contact Us",
      route: "",
    },
    {
      name: "Blog",
      route: "",
    },
    {
      name: "News",
      route: "",
    },
    {
      name: "Why Us",
      route: "",
    },
    {
      name: "How It Works",
      route: "",
    },
  ];

  return (
    <HeaderWrap>
      <AppBar position="static" className="headerContainer">
        <Container fixed>
          <Toolbar>
            <Link href="/" className="headerLogo">
              Logo
            </Link>
            <Box className="navBar">
              {navItems.map((item, index) => (
                <Link href={item.route}>{item.name}</Link>
              ))}
            </Box>
            <Box className="hrd_rgt">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderWrap>
  );
};

export default Header;
