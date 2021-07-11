import React from "react";
import color from "./color";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    // minWidth: 400,
    // padding: "20px 20px",
  },

  header: {
    fontSize: "30px",
   
    lineHeight: "84px",
    letterSpacing: "1.2px",
    color: color.white,
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      textAlign: "center",
      letterSpacing: "0",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      letterSpacing: "0",
      lineHeight: "50px",
    },
  },
  colorgreen: {
    color: color.green,
    fontStyle: "HelveticaNeue",
    fontSize: "50px",
 
    lineHeight: "84px",
    letterSpacing: "1.2px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
      textAlign: "center",
      letterSpacing: "0",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      textAlign: "center",
      letterSpacing: "0",
      lineHeight: "50px",
    },
  },
}));

const Headers = ({ text, colorgreen }) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography
        className={colorgreen ? `${classes.colorgreen}` : `${classes.header}`}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Headers;
