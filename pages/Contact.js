import React, { useState } from "react";
import color from "../components/color";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SubHeader from "../components/SubHeader";
import Box from "@material-ui/core/Box";
import Form from "../components/From";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";
import Snackbars from "../components/SnackBar";

const useStyles = makeStyles((theme) => ({
  container: {
    background: color.black,
    minWidth: "100vw",
    minHeight: "100vh",
  },
  spacer: {
    margin: "5%",
  },
  spacer2: {
    margin: "8%",
  },
  spacer3: {
    margin: "2%",
  },
  call: {
    color: color.white,
   padding: "10px 10px",
  },

  phone: {
    margin: 5,
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
       <Box className={classes.spacer} />
      <SubHeader text={"Contact"} colorgreen />
      <IconButton className={classes.call}>
        <CallIcon className={classes.phone} />
        <a href="070-761 78 15">
          <span />
          <span />
          {`${" 070-761 78 15"}`}
        </span>
      </IconButton>

      <Box className={classes.spacer3} />
      <Form />
    </Grid>
  );
};

export default Contact;
