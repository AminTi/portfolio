import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "./Drawer";
import Box from "@material-ui/core/Box";
import color from "./color";

import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: `${color.black}`,
    // padding: "5px 0px",
  },
  menuButton: {
    color: `${color.green}`,
    marginRight: theme.spacing(2),
    display: "none",
    background: `${color.black}`,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  title: {
    cursor: "default",
    padding: "5px 10px",
    fontWeight: "bold",
    fontSize: "18px",
    borderRadius: "20px",
    color: `${color.white}`,
    "&:hover": {
      background: color.green,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  wrapper: {
    marginLeft: "auto",
  },

  cv: {
    cursor: "default",
    color: `${color.green}`,
    fontSize: "18px",
    padding: "5px 10px",
    fontWeight: "bold",
    borderRadius: "20px",
    "&:hover": {
      background: color.green,
      color: color.white,
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  avatar: {
    border: `2px solid ${color.white}`,
  },
  // amintiti: {
  //   color: `${color.green}`,
  //   padding: "5px 10px",
  //   fontWeight: "bold",
  //   borderRadius: "20px",
  //   fontSize: "30px",
  //   fontFamily: "cursive",
  //   "&:hover": {
  //     background: color.geen,
  //     color: color.white,
  //     borderBottom: `1px solid ${color.green}`,
  //   },
  // },
  icons: {
    color: color.green,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [openDrawer, setOpen] = React.useState(false);

  const MenuHandler = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={MenuHandler}
          >
            <MenuIcon />
          </IconButton>

          <Link href="/">
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Link>
          {/* <Link href="/Projects">
            <Typography variant="h6" className={classes.title}>
              Projects
            </Typography>
          </Link> */}
          <Link href="/About">
            <Typography variant="h6" className={classes.title}>
              About
            </Typography>
          </Link>
          <Link href="/Contact">
            <Typography variant="h6" className={classes.title}>
              Contact
            </Typography>
          </Link>
          <Link href="/TechStack">
            <Typography variant="h6" className={classes.cv}>
              Tech-Stack
            </Typography>
          </Link>
          <div className={classes.wrapper}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              {/* <Avatar
                alt="Amin Titi"
                src="/amintiti.jpg"
                className={classes.avatar}
              /> */}
              {/* 
              <Typography variant="h6" className={classes.amintiti}>
                Amin Titi
              </Typography> */}
              <Box className={classes.iconBox}>
                <IconButton>
                  <a href="https://www.instagram.com/tartamin/">
                    <InstagramIcon className={classes.icons} />
                  </a>
                </IconButton>

                <IconButton>
                  <a href="https://se.linkedin.com/in/amin-titi-17078131">
                    <LinkedInIcon className={classes.icons} />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="https://github.com/AminTi">
                    <GitHubIcon className={classes.icons} />
                  </a>
                </IconButton>
              </Box>
            </IconButton>
          </div>
          <Drawer openDrawer={openDrawer} setOpen={setOpen} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
