import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Typography from "@material-ui/core/Typography";
import color from "./color";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";


const useStyles = makeStyles((theme) => ({
  btn: {
    display: "flex",
    justifyContent: "space-between",
    color: color.white,
    background: color.green,
    borderRadius: "100px",
    minWidth: "500px",
    padding: "5px 10px",
    margin: "5% ",
    [theme.breakpoints.down("sm")]: {
      minWidth: "70%",
      padding: "10px 10px",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "90%",
      padding: "0px 10px",
    },
  },
  text: {
    // fontSize: "500px",
    // fontWeight: "bold",
  },

  text: {
    fontWeight: "bold",
    fontSize: "18px",
    color: color.white,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  icon: {
    fontWeight: "bold",
    fontSize: "16px",
  },
}));

const ButtonCpmnt = ({ text, download, send, value, type, clickHandler }) => {
  const classes = useStyles();

  const returnIcon = () => {
    if (send) {
      return <SendIcon className={classes.size} />;
    } else if (download) {
      return <CloudDownloadIcon className={classes.size} />;
    } else {
      return <ArrowForwardIcon className={classes.size} />;
    }
  };

  return (
    <>
      <Button
        variant="contained"
        className={classes.btn}
        value={value}
        type={type}
        onClick={clickHandler}
      >
        <Typography className={classes.text}> {text}</Typography>
        <IconButton className={classes.text}>{returnIcon()}</IconButton>
      </Button>
    </>
  );
};

export default ButtonCpmnt;
