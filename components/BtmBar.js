import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import color from "./color";
import { Box } from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: color.white,
  },

  copyright: {
    color: color.black,

    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
    },
  },
  icons: {
    color: color.green,
  },
  tlbr: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },

  iconBox: {
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
    },
  },
}));

const BtmBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.tlbr}>
          <Typography color="inherit" className={classes.copyright}>
            &copy; Next JS By Amin Titi
          </Typography>
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default BtmBar;
