import { HeaderWrap } from "@/styles/StyledComponent/HeaderWrap";
import CartIcon from "@/ui/icons/CartIcon";
import LoveIcon from "@/ui/icons/LoveIcon";
import SearchIcon from "@/ui/icons/SearchIcon";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Contact",
      route: "",
    },
    {
      name: "About",
      route: "",
    },
    {
      name: "Sign Up",
      route: "",
    },
  ];

  return (
    <HeaderWrap>
      <AppBar position="static" className="headerContainer">
        <Container fixed>
          <Toolbar>
            <Link href="/" className="headerLogo">
              Exclusive
            </Link>
            <Box className="navBar">
              {navItems.map((item, index) => (
                <Link href={item.route}>{item.name}</Link>
              ))}
            </Box>
            <Box className="hrd_rgt">
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="What are you looking for?"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box className="iconButton_wrap">
                <IconButton disableRipple>
                  <LoveIcon />
                </IconButton>

                <IconButton disableRipple>
                  <CartIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderWrap>
  );
};

export default Header;
