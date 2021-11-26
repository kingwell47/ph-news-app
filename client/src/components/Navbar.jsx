import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Link,
} from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ContentDrawer from "./ContentDrawer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Navbar = ({ category, setCategory, setTopic, topic, modeToggle }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      setTopic(e.target.value);
    }
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const backToGeneral = () => {
    setCategory("General");
    setTopic("");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
            title="Categories"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              onClick={backToGeneral}
              sx={{ cursor: "pointer" }}
              color="inherit"
              underline="hover"
            >
              PH Top News
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {topic ? topic : category}
            <Button
              onClick={toggleDrawer(true)}
              sx={{ cursor: "pointer" }}
              color="inherit"
            >
              <ArrowDropDownIcon color="inherit" />
            </Button>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for a topic…"
              inputProps={{ "aria-label": "search" }}
              onKeyDown={(e) => handleSearch(e)}
            />
          </Search>
          <Button color="inherit" onClick={modeToggle} title="Toggle Dark Mode">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <ContentDrawer
          toggleDrawer={toggleDrawer}
          setCategory={setCategory}
          setTopic={setTopic}
        />
      </Drawer>
    </Box>
  );
};

export default Navbar;
