import React, { useState } from "react";
import color from "../components/color";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SubHeader from "../components/SubHeader";
import Box from "@material-ui/core/Box";
import ImageCpnt from "../components/ImageCpnt";
import Form from "../components/From";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";
import Snackbars from "../components/SnackBar";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    background: color.black,
    minWidth: "100vw",
    minHeight: "100vh",
  },

  subContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
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
    // marginRight: "auto",
    padding: "10px 20px",
  },

  test: {
    margin: 5,
  },
}));

const TechStack = () => {
  const classes = useStyles();
  const arr = [
    "/images/image1.svg",
    "/images/image3.svg",
    "/images/image.svg",
    "/images/image4.svg ",
    "/images/image5.svg ",
    "/images/image6.svg ",
    "/images/image7.svg ",
    "/images/image9.svg ",
    "/images/image14.jpg",
    "/images/image11.jpg",
    "/images/image12.jpg",
    "/images/image13.svg",
   
  
  
      ];

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Box className={classes.spacer} />
      <SubHeader text={"Skills"} colorgreen />
      <Box className={classes.spacer3} />
      <Container className={classes.subContainer}>
        {arr.map((item) => {
   
          return <ImageCpnt photo={item} />;
        })}
      </Container>
      <Box className={classes.spacer} />
    </Grid>
  );
};

export default TechStack;
