import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
}));

export default function ImageCpnt({ photo }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt="Amin Titi" src={photo} className={classes.large} />
    </div>
  );
}
