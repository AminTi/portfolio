import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import color from "../components/color";

const useStyles = makeStyles((theme) => ({
  root: {
    color: color.white,
    fontSize: "18px",
    width: "60%",
    margin: "0 auto",
    //  textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      width: "90%",
    },
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      padding: "10px 15px",
    },
  },
}));

const TextCpmnt = ({ text }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <p className={classes.root}>{text}</p>;
    </Box>
  );
};

export default TextCpmnt;
