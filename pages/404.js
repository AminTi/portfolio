import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import ButtonCpmnt from "../components/ButtonCpmnt";
import color from "../components/color";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  container: {
    background: color.white,
    minWidth: "100vw",
    minHeight: "100vh",
  },
  spacer: {
    margin: "5%",
  },
  spacer2: {
    margin: "2%",
  },
});

const NotFound = () => {
  const classes = useStyles();
  const router = useRouter();

  const clickHandler = () => {
    router.push("/");
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Header text={"What are you looking for !!!"} colorgreen />
      <ButtonCpmnt
        text="Back"
        ArrowBack
        clickHandler={clickHandler}
        ArrowBackIcon
      />
    </Grid>
  );
};

export default NotFound;
